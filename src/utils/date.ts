/**
 * Devlog date formatting.
 *
 * Frontmatter dates are written as plain calendar days (`2026-06-12`), which
 * parse to UTC midnight. Formatting those in the build machine's local zone
 * rolls the date back a day anywhere west of UTC — so every formatter here is
 * pinned to UTC. The date on the page is the date in the file, always.
 */

const DOTTED = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'UTC',
});

const LONG = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

/** `2026.06.12` — the house style for build-log stamps. */
export function formatDotted(date: Date): string {
  return DOTTED.format(date).replace(/-/g, '.');
}

/** `June 12, 2026` — for prose and `<time>` tooltips. */
export function formatLong(date: Date): string {
  return LONG.format(date);
}

/** `2026-06-12` — the machine-readable `datetime` attribute. */
export function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
