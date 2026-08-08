/**
 * Site configuration — single source of truth for nav, metadata and links.
 *
 * ⚠️ VERIFY BEFORE LAUNCH: the entries marked TODO are placeholders carried
 * over from the design system's reference build. Point them at the real
 * accounts (or drop them from `socials`) before going live.
 */

export const SITE = {
  name: 'Suthern Studios',
  /** Used in <title> suffix and structured data. */
  shortName: 'Suthern Studios',
  tagline: 'Worlds with soul, made by one.',
  description:
    'Suthern Studios is a solo game studio building deep, systems-driven worlds where every mechanic connects to the next. Currently building AfterShock.',
  url: 'https://suthernstudios.com',
  /** Default social share image, relative to /public. */
  ogImage: '/assets/og-image.png',
  locale: 'en_US',
  founded: 2026,
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Games', href: '/games/' },
  { label: 'Devlog', href: '/devlog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/**
 * Footer-only links. Pages that matter to a minority of visitors but shouldn't
 * crowd the header — press, and legal pages if they ever exist.
 */
export const FOOTER_LINKS = [{ label: 'Press', href: '/press/' }] as const;

export const CONTACT = {
  email: 'hello@suthernstudios.com',
  /** Advertised on the contact page. Keep it honest — it's a solo studio. */
  responseTime: 'within 48 hours',
} as const;

export const SOCIALS = [
  {
    icon: 'mail',
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: 'twitter',
    label: 'Twitter / X',
    value: '@suthernstudios',
    href: 'https://x.com/suthernstudios', // TODO: verify handle
  },
  {
    icon: 'discord',
    label: 'Discord',
    value: 'Join the community',
    href: '#', // TODO: real invite link
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'SutherStudios',
    href: 'https://github.com/SutherStudios',
  },
] as const;

/**
 * The flagship title. Kept here so the home page, game page and structured
 * data never drift apart.
 */
export const AFTERSHOCK = {
  title: 'AfterShock',
  tagline: 'Survive the collapse. Build what comes next.',
  status: 'In development',
  summary:
    'A post-apocalyptic colony simulation where you guide survivors through a procedurally generated wasteland — building shelter, managing needs, crafting tools, and defending against raids.',
  genres: ['Colony sim', 'Survival', 'Strategy', 'Base building', 'Voxel art'],
  /**
   * Real key art, once it exists — drop a 16:9 image in public/assets/ and put
   * the path here (e.g. '/assets/aftershock-key-art.png'). While this is empty
   * the game page renders a branded title card instead. Don't point it at
   * og-image.png: that's the *studio* social card and reads as the wrong brand
   * inside a panel labelled AfterShock.
   */
  keyArt: '',
  steamUrl: '', // TODO: paste the Steam store URL — the wishlist CTA disables itself while this is empty
  specs: [
    ['Engine', 'Unity 6 · URP'],
    ['Language', 'C#'],
    ['Art', '3D voxel'],
    ['Voxel size', '1 unit cube'],
    ['Face texture', '16 × 16'],
    ['Platform', 'PC · Steam'],
    ['Status', 'Early Access soon'],
    ['Modding', 'Full rights, day one'],
  ],
  features: [
    {
      icon: 'globe',
      title: 'Procedural worlds',
      body: 'Layered terrain, climate, biomes, radiation zones and ruined cities from a single seed.',
    },
    {
      icon: 'users',
      title: 'Living colonists',
      body: 'Hunger, sleep, mood, health and mental breaks. Push them too far and they crack.',
    },
    {
      icon: 'hammer',
      title: 'Deep crafting',
      body: 'Flexible recipes with quality tiers, tool requirements and full production chains.',
    },
    {
      icon: 'crosshair',
      title: 'Tactical combat',
      body: 'Melee and ranged with faction AI, cover systems and escalating raids.',
    },
    {
      icon: 'map',
      title: 'Expeditions',
      body: 'Explore the world map, trade with settlements, and haul resources home.',
    },
    {
      icon: 'sprout',
      title: 'Full ecology',
      body: 'Agriculture, cooking, wildlife, animal husbandry and hunting all interlock.',
    },
  ],
} as const;

/**
 * Press kit — everything a journalist or creator needs without emailing first.
 *
 * The descriptions are boilerplate meant to be pasted verbatim into an article
 * or video description, which is why there are three lengths. Edit them here,
 * not on the page.
 */
export const PRESS = {
  descriptions: {
    short: 'A post-apocalyptic colony simulation where every system feeds the next.',
    medium:
      'AfterShock is a post-apocalyptic colony simulation from solo studio Suthern Studios. Guide survivors through a procedurally generated wasteland — building shelter, managing needs, crafting tools, and defending against raids — in a world where terrain, climate, radiation and faction AI all interlock.',
    long: 'AfterShock is a post-apocalyptic colony simulation built by a single developer at Suthern Studios. Players guide a group of survivors through a procedurally generated wasteland, building shelter, managing hunger, sleep, mood and health, crafting tools through full production chains, and defending against escalating raids.\n\nIts systems are designed to feed each other rather than sit side by side: world generation layers climate over terrain before scattering biomes and radiation zones, colonists form memories that change where they will and will not go, and combat resolves through cover and line-of-sight against faction AI. The game is rendered in handcrafted 3D voxel art — every cube textured on all six faces at 16×16 — and ships with full modding rights from day one.',
  },

  /**
   * Downloadable brand assets. Dimensions are read off the actual files — if
   * you replace one, update the label to match or the page starts lying.
   */
  assets: [
    {
      file: '/assets/logo-mark-original.png',
      label: 'Logo mark — full size',
      detail: 'PNG · 1024 × 1024 · transparent',
    },
    {
      file: '/assets/logo-mark-512.png',
      label: 'Logo mark — 512',
      detail: 'PNG · 512 × 512 · transparent',
    },
    {
      file: '/assets/logo-mark.png',
      label: 'Logo mark — trimmed',
      detail: 'PNG · 160 × 200 · cropped to the glyph',
    },
    {
      file: '/assets/og-image.png',
      label: 'Studio social card',
      detail: 'PNG · 1200 × 630',
    },
  ],

  /** The brand palette, for anyone laying out a thumbnail or article header. */
  palette: [
    ['Ember', '#FF6B3D', 'Primary accent'],
    ['Cyan', '#2BD6DE', 'Secondary accent'],
    ['Gold', '#FFB23E', 'Heritage amber'],
    ['Ink', '#0A0C13', 'Canvas'],
  ],

  /**
   * Screenshots and trailers, once they exist. Drop files in public/assets and
   * add them here — the media section swaps its placeholder for a gallery on
   * its own, the same way the game page handles keyArt.
   */
  screenshots: [] as { file: string; alt: string }[],
  trailerUrl: '',

  /**
   * Say the quiet part out loud. Creators shouldn't have to email to find out
   * whether they're allowed to monetise a video.
   */
  permissions: [
    'You may record, stream and monetise video of AfterShock. No permission needed, no revenue share, forever.',
    'You may use anything on this page — logos, art, copy — in coverage of the game or studio.',
    'There is no embargo and no NDA. Everything published here is cleared for use today.',
    'Please don’t stretch or recolour the logo, or imply the studio endorses an unrelated product.',
  ],
} as const;

/**
 * Contact / newsletter form endpoints.
 *
 * Currently live on Web3Forms. Everything around these — validation, submit
 * handling, success and error states, spam honeypots — lives in the components
 * and src/scripts/forms.ts. Blank either endpoint and that form reverts to a
 * disabled state; no other change needed.
 *
 * Works with either provider (see README § Wiring up the forms):
 *
 *   Formspree  → paste the form's endpoint URL. Leave accessKey empty.
 *                contactEndpoint: 'https://formspree.io/f/xxxxxxxx'
 *
 *   Web3Forms  → use the shared submit URL for both, and put your key in
 *                accessKey. One key covers every form on the site.
 *                contactEndpoint: 'https://api.web3forms.com/submit'
 *                newsletterEndpoint: 'https://api.web3forms.com/submit'
 *                accessKey: 'your-uuid-here'
 *
 * The two endpoints are separate so contact messages and newsletter signups
 * can land in different inboxes — point them at the same URL if you'd rather
 * they didn't.
 */
export const FORMS = {
  contactEndpoint: 'https://api.web3forms.com/submit',
  newsletterEndpoint: 'https://api.web3forms.com/submit',
  /**
   * Web3Forms only — rendered as the hidden `access_key` field.
   *
   * Public by design: it ships in the built HTML either way, and Web3Forms
   * documents it as safe to expose (worst case, someone can email you). Spam
   * defence is the honeypots here plus the provider's own filtering — not
   * secrecy. See README § Wiring up the forms.
   */
  accessKey: '6556eada-c24e-439d-a639-5da9538e4bb0',
} as const;
