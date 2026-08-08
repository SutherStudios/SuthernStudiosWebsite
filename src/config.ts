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
 * Contact / newsletter form endpoints.
 *
 * Both are unwired by design — the markup is production-ready and posts
 * nowhere until you choose a provider. To go live with Formspree or
 * Web3Forms, paste the endpoint URL here and the forms start working with no
 * other changes (see README § Wiring up the forms).
 */
export const FORMS = {
  contactEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxxx'
  newsletterEndpoint: '', // e.g. 'https://formspree.io/f/yyyyyyyy'
} as const;
