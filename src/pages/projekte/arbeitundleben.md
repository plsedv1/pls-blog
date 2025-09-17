---
layout: ../../layouts/ProjectPage.astro
title: "Arbeit und Leben – Hamburg"
pubDate: 2021-08-02
description: "WordPress-Website mit Divi für eine große Redaktion (≈30 Redakteur:innen) – mit Anbindung an das Bildungsurlaubs-Angebot und besonderem Fokus auf Barrierefreiheit."
author: "Philipp Leser"
image:
  url: "/images/arbeitundleben.jpg"
  alt: "Screenshot der Website Arbeit und Leben Hamburg"
tags:
  [
    "WordPress",
    "Divi",
    "A11y",
    "Barrierefreiheit",
    "Redaktionsworkflow",
    "Bildungsurlaub",
    "Performance",
    "SEO",
  ]
pageTitle: "Projekt: Arbeit und Leben – Hamburg"
---

# Arbeit und Leben – Hamburg

Für **Arbeit und Leben Hamburg** entstand eine **WordPress-Website auf Basis von Divi**, die von einem **Redaktionsteam mit rund 30 Personen** aktiv genutzt wird.  
Zentral war ein **barrierefreies Design** (A11y) sowie eine **technische Anbindung** an das bestehende **Bildungsurlaubs-Angebot**, sodass Interessierte **direkt von der Website aus Bildungsurlaube buchen** können – die eigentliche Zahlung erfolgt **nicht** auf der Seite, sondern im angeschlossenen System.

## Ziele

Die Plattform sollte Inhalte aus unterschiedlichen Programmbereichen übersichtlich bündeln, redaktionell leicht pflegbar sein und einen **schnellen Zugang zu Bildungsurlauben** ermöglichen.  
Darüber hinaus standen **Barrierefreiheit, Performance und Stabilität** im Fokus, um allen Nutzer:innen – auch mit Assistenztechnologien – eine zugängliche Erfahrung zu bieten.

## Lösung

Die Website wurde mit **WordPress (6.x)** und dem **Divi-Theme** realisiert.  
Für die Redaktion wurden **Rollen & Rechte** granular konfiguriert, damit Teams effizient arbeiten können, ohne sich gegenseitig zu behindern. Wiederverwendbare **Divi-Module** und Inhaltsvorlagen sorgen für konsistente Gestaltung und kurze Bearbeitungszeiten.

Für die Bildungsurlaube wurde eine **Anbindung an das externe Angebots-System** umgesetzt. Kurslisten und Detailseiten sind nahtlos in die Seite integriert; der **Buchungsprozess** führt anschließend in das Drittsystem – **ohne Zahlungsabwicklung** auf der WordPress-Seite.

## Barrierefreiheit (A11y)

Besonderes Augenmerk lag auf **WCAG-orientierter Umsetzung**:

- **Semantisches HTML**, korrekte Überschriftenhierarchien, Landmark-Regionen
- **Tastaturbedienbarkeit** und eindeutige **Fokuszustände**
- **Kontraststarke Farbpalette** und skalierbare Typografie
- Sinnvolle **Alternativtexte**, **ARIA-Attribute** und verständliche Linktexte
- **Fehlermeldungen** und Formulare mit Labels/Deskriptoren

Diese Maßnahmen wurden mit manuellem Testing (Tab-Navigation, Screenreader-Checks) und automatisierten Checks (Lighthouse/WAVE) begleitet.

## Redaktionsworkflow

Für das etwa **30-köpfige Redaktionsteam** wurden:

- **Rollen/Rechte** (z. B. Autor:in, Redakteur:in, Admin) sauber getrennt
- **Editor-Guidelines** und **Vorlagen** bereitgestellt
- **Custom Fields** für strukturierte Inhalte eingesetzt
- **Medien-Richtlinien** (Alt-Texte, Dateigrößen, responsive Bilder) dokumentiert

So bleiben Qualität und Konsistenz im Tagesgeschäft gewährleistet.

## Technik-Stack & Performance

- **WordPress (6.x)**, **Divi**
- **Custom Fields**/**CPT** für strukturierte Inhalte
- **Externe Anbindung**: Bildungsurlaubs-Angebote inkl. Kurslisten/Detailseiten, Deep-Links zur Buchung
- **Caching & Asset-Optimierung**, Bildgrößen/Lazy Loading
- **SEO-Basics**: sprechende URLs, Meta-Daten, strukturierte Daten (wo sinnvoll)

## Ergebnis

Die Seite bietet eine **zugängliche, performante** Nutzererfahrung und erleichtert die Recherche sowie Buchung von Bildungsurlauben.  
Die Redaktion profitiert von **klaren Workflows**, wiederverwendbaren Modulen und einem stabilen Setup, das auch bei hoher Belastung zuverlässig bleibt.

---

**Live ansehen:** [hamburg.arbeitundleben.de](https://hamburg.arbeitundleben.de/)
