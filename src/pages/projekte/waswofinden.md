---
layout: ../../layouts/ProjectPage.astro
title: "Was-wo-finden.de – Lokale Suchmaschine"
pubDate: 2019-09-16
description: "Konzeption & Umsetzung einer lokalen Suchmaschine auf WordPress-Basis mit Avada – performant, barrierearm und mobil-optimiert."
author: "Philipp Leser"
image:
  url: "/images/was.jpg"
  alt: "Screenshot der Startseite von was-wo-finden.de mit Suchfeld"
tags:
  [
    "WordPress",
    "Avada",
    "Lokale Suche",
    "CPT",
    "ACF",
    "Geodaten",
    "Performance",
    "A11y",
    "SEO",
  ]
pageTitle: "Projekt: was-wo-finden.de"
---

# was-wo-finden.de – Lokale Suchmaschine

**Kurzfassung:** Für _was-wo-finden.de_ habe ich eine **lokale Suchmaschine** auf Basis von **WordPress + Avada** realisiert.  
Die Plattform macht lokale Anbieter:innen, Orte und Angebote schnell auffindbar und kombiniert eine klare Informationsarchitektur mit hoher Performance und Barrierefreiheit.

Die Umsetzung folgt einem konsequent **mobile-first** Ansatz. Dadurch bleiben Interaktionen auch auf schwächeren Geräten schnell und die Nutzerführung ist jederzeit übersichtlich und zugänglich.

## Ziele

Im Zentrum stand die schnelle Auffindbarkeit relevanter Informationen. Nutzer:innen sollen mit wenigen Klicks passende Ergebnisse erhalten, ohne dabei in komplexen Menüs zu verlieren.

Gleichzeitig sollte das System **redaktionsfreundlich** bleiben: Inhalte lassen sich strukturiert pflegen, sind suchmaschinenfreundlich aufbereitet und können bei Bedarf erweitert werden.

- Relevante Ergebnisse mit **wenigen Klicks** finden
- **Klare Informationsarchitektur** & barrierearme Navigation
- **Mobile First** mit sehr kurzen Ladezeiten
- **Pflegeleichte Datenstruktur** für Redakteur:innen

## Lösung

Technisch basiert das Projekt auf **WordPress (6.x)** mit dem **Avada Theme** als flexibler Baukasten.  
Strukturierte Inhalte wurden über **Custom Post Types (CPT)** und **Advanced Custom Fields (ACF)** modelliert, sodass Orte, Anbieter und Kategorien mit einheitlichen Feldern verwaltet werden.

Die Suche ist über maßgeschneiderte **WP_Query**-Konfigurationen und Filter aufgebaut. Damit lassen sich Begriffe gewichten, Teiltreffer finden und Ergebnisse nach Kategorien, Standorten oder Öffnungszeiten eingrenzen.

- **WordPress + Avada** als stabiler, editierbarer Unterbau
- **CPT** für Einträge (z. B. Anbieter, Orte, Kategorien)
- **ACF** für Adresse, Öffnungszeiten, Kontakt, Geokoordinaten
- **Custom Query & Facetten** (Kategorie, Ort, Öffnungszeiten)
- **SEO-Basics**: saubere Permalinks, strukturierte Daten, Meta-Handling

## Funktionsumfang

Die Anwendung bietet eine Kombination aus **Volltextsuche**, **Filter-Facetten** und optionaler **Kartendarstellung**.  
Dabei bleibt die Bedienung bewusst reduziert: Eine klare Ergebnisliste, gut sichtbare Filter und semantisch sauberes Markup sorgen für Orientierung.

- 🔎 **Volltextsuche** + Filter (Kategorie, Standort, Schlagwörter)
- 🗺️ **Geodaten** (Koordinaten), vorbereiteter Kartenlayer
- 🧭 **Breadcrumbs** & semantisches Markup für bessere Orientierung
- 🧩 **Avada-Komponenten** für Teaser, Cards & Listen
- 🖼️ **Bildoptimierung** (responsiv, Lazy Loading)

## Technik-Stack

Die technische Basis ist bewusst pragmatisch gewählt: WordPress liefert Redaktionskomfort, Avada beschleunigt die UI-Bausteine, und gezielte Template-Overrides sorgen für sauberes, performantes HTML.

- **WordPress (6.x)**, **Avada**
- **Custom Post Types** & **Advanced Custom Fields (ACF)**
- Individuelle **WP_Query**-Konfigurationen & Template-Overrides
- **Performance**: Caching, Asset-Minifizierung, responsives Bild-Handling
- **A11y**: Tastaturnavigation, ARIA-Labels, klarer Fokus, Kontraste

## Ergebnisse

Die Suche reagiert spürbar schnell, auch auf mobilen Geräten mit schlechter Verbindung.  
Durch die strukturierte Pflege sparen Redakteur:innen Zeit, und die klare UX steigert die Nutzungsquote der Suche.

In der Summe entsteht eine **leichte, erweiterbare** Lösung, die sowohl Nutzer:innen als auch Redaktion überzeugt.

---

**Live ansehen:** [was-wo-finden.de](https://was-wo-finden.de)
