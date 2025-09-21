import { useEffect, useState } from "react";

type WPFeaturedMedia = {
  source_url?: string;
  alt_text?: string;
};

type WPTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string; // "category" | "post_tag"
};

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
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

function getCategories(p: WPPost): WPTerm[] {
  const groups = p._embedded?.["wp:term"] ?? [];
  return groups.flat().filter((t) => t?.taxonomy === "category");
}

export default function PostDetail({ slug }: { slug: string }) {
  const [post, setPost] = useState<WPPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    if (!WP_BASE) {
      setError("PUBLIC_WP_BASE fehlt (.env.*).");
      return;
    }
    const url = `${WP_BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(
      slug
    )}&_embed=1`;

    let cancelled = false;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((arr: WPPost[]) => {
        if (!cancelled) {
          if (arr && arr.length) setPost(arr[0]);
          else setError("Beitrag nicht gefunden.");
        }
      })
      .catch((e) => !cancelled && setError(e.message));

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error)
    return (
      <div className="rounded border border-red-400/30 bg-red-900/20 p-4 text-red-200">
        <strong>Fehler:</strong> {error}
      </div>
    );

  if (!post)
    return (
      <div className="space-y-3">
        <div className="h-8 w-2/3 bg-white/10 rounded animate-pulse" />
        <div className="h-60 w-full bg-white/10 rounded animate-pulse" />
        <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
      </div>
    );

  const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const alt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "";
  const cats = getCategories(post);

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
        <a href="/aktuelles" className="hover:underline">
          ← Zur Übersicht
        </a>
        <span>•</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {cats.length > 0 && (
          <>
            <span>•</span>
            <ul className="m-0 p-0 list-none flex flex-wrap gap-1">
              {cats.map((c) => (
                <li
                  key={c.id}
                  className="px-2 py-0.5 rounded bg-white/10 text-white/90"
                >
                  {c.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

      {img && (
        <img
          src={img}
          alt={alt}
          className="w-full max-h-[420px] object-cover rounded-xl my-6"
          loading="lazy"
          decoding="async"
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
