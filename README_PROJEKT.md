# tvättlösningar.se - Astro Projekt

## 🎉 Projektet är nu uppsatt och igång!

Utvecklingsservern körs på: **http://localhost:4322/**

---

## 📁 Projektstruktur

```
/
├── src/
│   ├── pages/                    # Alla sidor (routes)
│   │   ├── index.astro          # Startsida (/)
│   │   └── vard-och-hygien.astro # Vård & Hygien (/vard-och-hygien)
│   │
│   ├── layouts/                  # Layout-templates
│   │   └── BaseLayout.astro     # Grundlayout med nav + footer
│   │
│   ├── components/               # Återanvändbara komponenter
│   │   ├── Hero.astro
│   │   ├── ProblemRecognition.astro
│   │   ├── SolutionAreas.astro
│   │   ├── FAQ.astro
│   │   └── FinalCTA.astro
│   │
│   ├── styles/                   # CSS-filer
│   │   └── global.css           # Tailwind CSS import
│   │
│   └── content/                  # Content collections (framtida blogg)
│       └── blog/
│
├── public/                       # Statiska filer (bilder, fonts, etc.)
│
└── package.json                  # Dependencies
```

---

## 🚀 Kommandon

### Starta utvecklingsserver
```bash
npm run dev
```
→ Öppnar på http://localhost:4321/ (eller 4322 om 4321 är upptagen)

### Bygg för produktion
```bash
npm run build
```
→ Skapar optimerade filer i `dist/`

### Förhandsgranska produktionsbygge
```bash
npm run preview
```
→ Testar produktionsbygget lokalt

### Stäng av servern
Om servern körs i bakgrunden, hitta process-ID:
```bash
lsof -ti:4322 | xargs kill
```

---

## ✅ Vad som är klart

### Sidor som fungerar:
- ✅ **Startsida** (`/`) - Välj bransch
- ✅ **Vård & Hygien** (`/vard-och-hygien`) - Komplett med allt innehåll från Fas 3

### Komponenter som finns:
- ✅ `Hero` - Hero-sektion med titel, text och CTAs
- ✅ `ProblemRecognition` - Problem-grid med ikoner
- ✅ `SolutionAreas` - Tre lösningsområden med fördelar
- ✅ `FAQ` - Accordion med frågor och svar
- ✅ `FinalCTA` - Slutlig konverteringssektion

### Layout & Navigation:
- ✅ `BaseLayout` - Huvudlayout med:
  - Navigation i header
  - SEO-metadata (title, description, OG tags)
  - Footer med länkar och nyhetsbrev
- ✅ Tailwind CSS konfigurerat och fungerar
- ✅ Responsiv design (mobil + desktop)

---

## 📋 Nästa steg för dig

### 1. Testa sidan lokalt
1. Öppna webbläsaren på **http://localhost:4322/**
2. Navigera till `/vard-och-hygien` för att se hela sidan
3. Testa responsivitet (ändra fönsterstorlek eller använd DevTools)

### 2. Lägg till bilder
Skapa mappar i `public/`:
```bash
mkdir -p public/images/og
mkdir -p public/images/hero
```

Lägg till bilder:
- `public/images/og/vard-och-hygien.jpg` (1200x630px för Open Graph)
- `public/images/hero/vard.jpg` (bakgrundsbild för hero)
- `public/favicon.svg` (favikon)

### 3. Skapa fler branschsidor
Kopiera `vard-och-hygien.astro` och ändra innehållet:
```bash
cp src/pages/vard-och-hygien.astro src/pages/bygg-och-fastighet.astro
```

Uppdatera innehållet enligt Fas 2-planen.

### 4. Skapa verktyg (interaktiva)
För ROI-kalkylator, Volymberäknare etc:
- Skapa nya sidor under `src/pages/verktyg/`
- Använd React-komponenter för interaktivitet
- Exempel:
  ```bash
  mkdir -p src/pages/verktyg
  # Skapa roi-kalkylator.astro, volymberaknare-vard.astro, etc.
  ```

### 5. Lägg till Schema.org markup
I `vard-och-hygien.astro`, lägg till i `<head>`:
```astro
<script type="application/ld+json">
  {JSON.stringify(faqSchema)}
</script>
```

Där `faqSchema` är JSON-LD från Fas 3-dokumentet.

---

## 🎨 Anpassa design

### Färger
Ändra färger i Tailwind-klasser:
- Primärfärg: `bg-blue-600` → ändra till valfri Tailwind-färg
- Exempel: `bg-green-600`, `bg-purple-600`, etc.

### Typsnitt
Lägg till Google Fonts i `BaseLayout.astro`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Uppdatera `global.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Spacing & Layout
Ändra Tailwind-klasser:
- `py-16` → padding vertical
- `px-4` → padding horizontal
- `max-w-7xl` → max bredd på container
- `gap-8` → avstånd mellan element i grid

---

## 🔧 Felsökning

### "Port 4321 is in use"
Astro byter automatiskt till nästa port (4322). Om du vill använda 4321:
```bash
lsof -ti:4321 | xargs kill
npm run dev
```

### Tailwind-styling fungerar inte
1. Kontrollera att `global.css` är importerad i `BaseLayout.astro`
2. Restart utvecklingsservern: `Ctrl+C` och `npm run dev`

### Sidan visar fel eller laddar inte
1. Kolla terminalen för felmeddelanden
2. Kontrollera att alla komponenter har rätt Props-interface
3. Se till att alla importerade komponenter finns

---

## 📦 Deployment (framtida)

### Netlify (Rekommenderat - Gratis)
1. Skapa konto på [netlify.com](https://netlify.com)
2. Koppla till GitHub-repo
3. Bygg-kommando: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Skapa konto på [vercel.com](https://vercel.com)
2. Importera projekt från Git
3. Vercel detekterar Astro automatiskt

### Manuellt (via FTP)
```bash
npm run build
# Ladda upp innehållet i dist/ till din webbserver
```

---

## 📚 Resurser

### Astro dokumentation
- [Astro Docs](https://docs.astro.build)
- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### React (för verktyg)
- [React Docs](https://react.dev)
- [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/)

---

## 🎯 Projektets status

### ✅ Klart:
- Grundstruktur
- Vård & Hygien-sidan (komplett)
- Startsida med branschval
- Komponenter
- Layout med navigation och footer
- Tailwind CSS styling
- Responsiv design

### 🚧 Att göra:
- [ ] Lägg till bilder
- [ ] Skapa övriga branschsidor (Bygg, Sport, Djur, Räddning)
- [ ] Skapa Leasing-sida
- [ ] Skapa verktyg (ROI-kalkylator, Volymberäknare, Quiz)
- [ ] Skapa guider/landningssidor
- [ ] Skapa blogg
- [ ] Lägg till Schema.org markup
- [ ] Konfigurera formulär (kontakt, leadmagnets)
- [ ] SEO-optimering (meta tags, sitemap.xml, robots.txt)
- [ ] Analytics (Plausible eller Google Analytics)
- [ ] Deploy till produktion

---

## 📝 Content från Fas 3

Allt innehåll för Vård & Hygien finns redan implementerat från:
`FAS3_CONTENT_VARD_HYGIEN.md`

Inklusive:
- Hero-text
- 8 problemområden
- 3 lösningsområden
- 4 verktyg/resurser
- 12 FAQ-frågor med detaljerade svar
- Slutlig CTA

---

## 💬 Support

Om du behöver hjälp:
1. Kolla Astro-dokumentationen
2. Fråga ChatGPT/Claude om specifika problem
3. Astro Discord: https://astro.build/chat

---

**Skapad:** 2025-12-10
**Framework:** Astro v5.16.5
**Styling:** Tailwind CSS v4
**Status:** ✅ Utvecklingsserver igång på http://localhost:4322/
