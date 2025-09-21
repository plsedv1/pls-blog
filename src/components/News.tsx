// src/components/News.tsx
import { useEffect, useMemo, useState } from "react";

type WPFeaturedMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url: string }>;
  };
};

type WPTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string; // "category" | "post_tag" ...
};

type WPPost = {
  id: number;
  slug: string;
  link?: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
    "wp:term"?: WPTerm[][];
  };
};

const WP_BASE = import.meta.env.PUBLIC_WP_BASE;

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function getFeaturedImage(p: WPPost): { src: string | null; alt: string } {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return { src: null, alt: "" };

  const sizes = media.media_details?.sizes;
  const order = ["medium_large", "medium", "large", "full"];
  if (sizes) {
    for (const key of order) {
      const s = sizes[key];
      if (s?.source_url)
        return { src: s.source_url, alt: media.alt_text || "" };
    }
  }
  return { src: media.source_url || null, alt: media.alt_text || "" };
}

function getCategories(p: WPPost): WPTerm[] {
  const termGroups = p._embedded?.["wp:term"] ?? [];
  const flat = termGroups.flat().filter(Boolean);
  return flat.filter((t) => t.taxonomy === "category");
}

export default function News({
  perPage = 9,
  showExcerpt = true,
  internalLinks = true, // true = Link zu /aktuelles/[slug], false = externe WP-Links
}: {
  perPage?: number;
  showExcerpt?: boolean;
  internalLinks?: boolean;
}) {
  const cap = Math.min(perPage ?? 9, 9);

  const [posts, setPosts] = useState<WPPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url = useMemo(() => {
    if (!WP_BASE) return null;
    const base = `${WP_BASE}/wp-json/wp/v2/posts`;
    const params = new URLSearchParams({
      _embed: "1",
      per_page: String(cap),
      status: "publish",
      // kein _fields → volle Embedded-Daten (inkl. Bildgrößen)
    });
    return `${base}?${params.toString()}`;
  }, [cap]);

  useEffect(() => {
    if (!url) {
      setError(
        "PUBLIC_WP_BASE fehlt. Bitte in .env(.development/.production) setzen."
      );
      return;
    }
    let cancelled = false;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: WPPost[]) => {
        if (!cancelled) setPosts(data);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (error)
    return (
      <div className="rounded border border-red-400/30 bg-red-900/20 p-4 text-red-200">
        <strong>Fehler:</strong> {error}
      </div>
    );

  if (!posts)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: cap }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-white/10 bg-[#262626]"
          >
            <div className="h-44 w-full bg-white/10 animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-5 w-3/4 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );

  const items = posts.slice(0, cap);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
      {items.map((p) => {
        const { src: img, alt } = getFeaturedImage(p);
        const cats = getCategories(p);
        const href = internalLinks ? `/aktuelles/${p.slug}/` : p.link || "#";

        return (
          <article
            key={p.id}
            className="rounded-xl overflow-hidden border border-white/10 bg-[#262626] flex flex-col"
          >
            {/* Bild oben */}
            {img ? (
              <a href={href} className="block">
                <img
                  src={img}
                  alt={alt || ""}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ) : (
              <div className="w-full h-44 bg-white/10" />
            )}

            {/* Text unten */}
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                {cats.length > 0 && (
                  <>
                    <span>•</span>
                    <ul className="flex flex-wrap gap-1">
                      {cats.map((c) => (
                        <li
                          key={c.id}
                          className="px-2 py-0.5 rounded bg-white/10 text-white/90"
                          title={c.slug}
                        >
                          {c.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <a
                href={href}
                className="mt-2 block font-semibold leading-snug hover:underline"
                dangerouslySetInnerHTML={{ __html: p.title.rendered }}
              />

              {showExcerpt && (
                <p
                  className="mt-2 text-sm text-white/80 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
                />
              )}

              <div className="mt-auto pt-4">
                <a
                  href={href}
                  className="inline-block text-sm font-medium underline underline-offset-4"
                >
                  Weiterlesen
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
