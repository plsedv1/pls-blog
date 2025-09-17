---
layout: ../../layouts/ProjectPage.astro
title: "Lieblingsplatz – Restaurantwebsite mit Reservierung & Gutscheinen"
pubDate: 2016-07-12
description: "WordPress-Website mit Divi, OpenTable-Reservierung, SEO-Optimierung und individueller Gutschein-Lösung."
author: "Philipp Leser"
image:
  url: "/images/lieblingsplatz.jpg"
  alt: "Mockup/Screenshot der Restaurantwebsite Lieblingsplatz"
tags:
  [
    "WordPress",
    "Divi",
    "OpenTable",
    "SEO",
    "Gutscheine",
    "E-Commerce",
    "Performance",
    "A11y",
  ]
pageTitle: "Projekt: Restaurant Lieblingsplatz"
---

# Restaurant Lieblingsplatz

Für das **Restaurant Lieblingsplatz** wurde eine moderne **WordPress-Website auf Basis von Divi** umgesetzt.  
Ziel war eine klare Präsentation von Speisekarte, Impressionen und Events – kombiniert mit einer **nahtlosen Tischreservierung via OpenTable** sowie einer **individuellen Lösung zum Verkauf von Gutscheinen**.

Der Auftritt wurde **SEO-optimiert**, performant umgesetzt und barrierebewusst gestaltet, damit sowohl Suchmaschinen als auch Gäste schnell ans Ziel kommen.

## Ziele

Die Seite sollte Gäste intuitiv durch **Speisekarte, Reservierung und Kontakt** führen.  
Gutscheine sollten **einfach online kaufbar** sein – ohne den Overhead eines vollwertigen Shops – und das Team sollte Inhalte eigenständig pflegen können.

- Intuitive **Reservierung** direkt auf der Website
- **Gutscheinkauf** mit minimaler Reibung (lightweight E-Commerce)
- **Schnelle Ladezeiten** & **SEO-Basis** für bessere Sichtbarkeit
- Einfache **Redaktion** durch vordefinierte Divi-Module

## Lösung

- **WordPress + Divi**: Komponenten-Bibliothek (Hero, Menü-Sektionen, Testimonials, Galerie, Event-Teaser) mit globalen Farben/Typo
- **OpenTable-Integration**: DSGVO-konforme Einbettung/Einwilligung, Reservierungs-Widget prominent im Header & auf einer eigenen Reservierungsseite
- **Gutschein-Lösung (Custom)**:
  - Formular/Flow für Auswahl (Betrag/Motiv/Empfängertext)
  - Generierung einer **eindeutigen Gutscheinnummer** & PDF-Voucher
  - **E-Mail-Zustellung** an Käufer:in (Bestätigung + PDF)
  - Statusverwaltung (offen/bezahlt/eingelöst) im Backend
  - Zahlungsanbindung wahlweise per Rechnung/Vorkasse oder Payment-Provider (z. B. Stripe) – ohne komplettes Shop-System
- **SEO & Inhalt**: strukturierte Daten (Organisation/Restaurant, Breadcrumbs), sprechende URLs, Meta-Titel/Beschreibungen, Open-Graph
- **A11y & Performance**: semantisches HTML, Fokus-Styles, ausreichende Kontraste, responsive Bilder, Lazy Loading, Caching/Minify

## Funktionsumfang

- 🔎 **Speisekarte** mit saisonalen Bereichen und Badge-System (vegan/vegetarisch/neu)
- 📅 **Reservierung** via OpenTable mit Datum/Uhrzeit/Personenzahl
- 🎁 **Gutscheine**: Kauf, PDF-Erzeugung, Code-Verwaltung, Backend-Übersicht
- 🖼️ **Galerie & Impressionen** (lichtgewichtige Lightbox)
- 🗺️ **Kontakt & Anfahrt** mit Öffnungszeiten, Schema.org-Daten

## Technik-Stack

- **WordPress (6.x)**, **Divi**
- Custom-Post-Types / ACF für Menü & Events
- OpenTable-Widget (mit Consent-Gate)
- Server-seitige **PDF-Generierung** (z. B. dompdf/wkhtmltopdf)
- Mail-Versand über SMTP (Transaktionsmails)
- **Caching**, Bildkomprimierung, Critical-CSS-Ansatz

## Ergebnis

Die Website führt Gäste **schnell zur Reservierung**, steigert dank SEO die **Sichtbarkeit** und erlaubt dem Team, Inhalte ohne Agenturaufwand zu aktualisieren.  
Der **Gutschein-Flow** reduziert Prozesskosten und macht saisonale Peaks (Feiertage, Events) digital abbildbar – ohne einen kompletten Shop betreiben zu müssen.

---

**Live ansehen:** [restaurant-lieblingsplatz.de](https://restaurant-lieblingsplatz.de/)
