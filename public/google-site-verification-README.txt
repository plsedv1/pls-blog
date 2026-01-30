# Google-Indexierung – Kurzanleitung

## Bereits eingerichtet

- robots.txt: Erlaubt allen Suchmaschinen das Crawlen (Allow: /) und verweist auf die Sitemaps.
- sitemap.xml: Statische Sitemap mit allen wichtigen Seiten (Startseite, Kontakt, Leistungen, Landingpages, Projekte usw.).
- sitemap-index.xml: Wird beim Build von Astro erzeugt (falls Seiten prerendered sind).
- Im Layout: Canonical-URLs, Meta robots (index, follow), Sitemap-Link im Head.

## Google Search Console einrichten (einmalig)

1. Öffnen: https://search.google.com/search-console
2. Property hinzufügen: URL-Präfix wählen, z. B. https://www.pls-edv.de
3. Verifizierung: z. B. per HTML-Tag (Meta-Tag in Layout einfügen) oder DNS-Eintrag.
4. Sitemap einreichen: Unter "Sitemaps" die URL eintragen:
   - https://www.pls-edv.de/sitemap.xml
   (oder https://www.pls-edv.de/sitemap-index.xml falls beim Build erzeugt)
5. "Indexierung" > "Seiten": Prüfen, ob Seiten erfasst werden; bei Bedarf "URL prüfen" nutzen.

## Nützliche URLs

- robots.txt: https://www.pls-edv.de/robots.txt
- Sitemap: https://www.pls-edv.de/sitemap.xml

Nach dem Einreichen der Sitemap in der Search Console kann es einige Tage dauern, bis neue Seiten in Google erscheinen.
