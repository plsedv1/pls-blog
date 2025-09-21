export const WP_BASE = import.meta.env.PUBLIC_WP_BASE;

// kleine Helper-Funktion
export async function wpFetch<T = any>(
  path: string,
  params: Record<string, any> = {}
) {
  const url = new URL(`${WP_BASE}/wp-json/wp/v2/${path}`);
  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.set(k, String(v))
  );
  const res = await fetch(url.toString());
  if (!res.ok)
    throw new Error(`WP fetch failed: ${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}
