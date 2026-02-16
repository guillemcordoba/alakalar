# Alakalar - DM Guide for "El Temple Perdut d'Alak'Alar"

A Vue 3 single-page app serving as an interactive Dungeon Master guide for the D&D adventure "The Lost Temple of Alak'Alar". All content is in Catalan.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`) + **Vue Router 4** (hash-based history)
- **Vite** with `base: './'` for relative asset paths
- **pnpm** as package manager
- No component library, no CSS framework, no build-time preprocessor — just plain CSS in `src/assets/style.css`

## Commands

- `pnpm run dev` — start dev server
- `pnpm run build` — production build to `dist/`
- `pnpm run preview` — preview production build

On NixOS, prefix with `nix develop --command`.

## Project Structure

```
src/
  main.js              — app entry, mounts router + style
  App.vue              — layout shell: menu toggle, Sidebar, router-view, PlayerBar
  router.js            — all routes (hash-based)
  assets/style.css     — single stylesheet, dark fantasy theme
  composables/
    usePlayer.js       — singleton audio player (background + event tracks)
  components/
    Sidebar.vue        — navigation sidebar listing all 18 zones
    PlayerBar.vue      — persistent bottom audio controls
    MusicBtn.vue       — inline button to trigger a track (ambient/battle/event)
    ZoneCard.vue       — wrapper for a single zone's content
    ReadAloud.vue      — styled box for text the DM reads aloud to players
    DmNote.vue         — styled box for DM-only notes (hidden from players)
    Encounter.vue      — combat encounter block with creature table
    ItemCard.vue       — magic item / loot card
  views/
    HomeView.vue       — landing page
    IntroduccioView.vue — adventure introduction (single zone)
    Part1View.vue      — Part I zones (param: :zone = granges | campament)
    Part2View.vue      — Part II zones (param: :zone = saqueig | boca | mur)
    Acte3View.vue      — Act III rooms 1-8 (param: :room)
    Acte4View.vue      — Act IV rooms 9-12 (param: :room)
    MapsView.vue       — numbered temple maps (upper + lower)
    ObjectesView.vue   — item summary and adventure continuation
public/
  images/              — map images and illustrations
```

## Routing

Each zone has its own URL. Views use route params + `v-if` to render one zone at a time.

```
/                        → HomeView
/introduccio             → IntroduccioView
/part1/:zone             → Part1View  (granges, campament)
/part2/:zone             → Part2View  (saqueig, boca, mur)
/acte3/:room             → Acte3View  (1–8)
/acte4/:room             → Acte4View  (9–12)
/mapes                   → MapsView
/objectes                → ObjectesView
```

Bare section paths (`/part1`, `/part2`, `/acte3`, `/acte4`) redirect to their first zone.

## Navigation Flow

Every zone has prev/next links at the bottom:

```
Home → Introduccio → Granges → Campament → Saqueig → Boca → Mur →
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → Objectes
```

## Audio System

`usePlayer.js` is a singleton composable managing two `Audio` elements:
- **Background** (`bgAudio`): loops, persists across navigation, state saved to localStorage
- **Event** (`eventAudio`): one-shot, fades out background, restores it when done

`MusicBtn` renders inline buttons with three variants: `ambient`, `battle`, `event`. Tracks stream directly from `https://incompetech.com/music/royalty-free/mp3-royaltyfree/{track}.mp3` (Kevin MacLeod, CC BY 4.0).

## Component Conventions

- Components are renderless wrappers using `<slot />` for content (ReadAloud, DmNote, ZoneCard)
- All styling is in `style.css` via class names matching component names (`.read-aloud`, `.dm-note`, `.zone-card`, `.encounter`, `.item-card`)
- No scoped styles — everything is global CSS
- Props use Vue 3 `defineProps()` with simple type declarations

## Content Conventions

Views contain the adventure content directly in the template as HTML. The pattern for zone views is:

```vue
<template>
  <div class="content-area">
    <MusicBtn track="..." variant="ambient" />
    <ZoneCard v-if="room === N" id="sala-N" title="..." :room="N">
      <ReadAloud><p>Text the DM reads aloud...</p></ReadAloud>
      <DmNote><ul><li>DM-only notes...</li></ul></DmNote>
      <Encounter title="..." :creatures="[{ name: '...', qty: N }]">
        <template #music><MusicBtn track="..." variant="battle" /></template>
        <p>Encounter details...</p>
      </Encounter>
      <ItemCard title="..." type="..."><ul><li>Item properties...</li></ul></ItemCard>
    </ZoneCard>
    <div class="page-nav"><!-- prev/next links --></div>
  </div>
</template>
```

## Style

Dark fantasy theme with CSS custom properties defined at `:root`. Key tokens:
- `--bg-dark`, `--bg-card`, `--bg-card-alt` — background layers
- `--accent-gold`, `--accent-red` — highlight colors
- `--text-light`, `--text-muted` — text colors
- Font stack: `'Cinzel'` for headings, system serif for body text

## Images

Static images live in `public/images/`. Referenced via `import.meta.env.BASE_URL + 'images/...'` (assigned to a `base` const in views that need images).
