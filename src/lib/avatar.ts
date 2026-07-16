/**
 * Placeholder avatar helpers: speakers without a photo get their initials on
 * a colour drawn from the site's brand palette. The colour is picked by
 * hashing the name (not at random) so a given person always gets the same
 * colour, including between server render and client hydration.
 */

export interface AvatarColor {
  background: string;
  text: string;
}

/** Brand palette (expoOrange / expoBlue from tailwind.config.ts) plus
 *  derived tints, each paired with a legible text colour. */
const AVATAR_COLORS: AvatarColor[] = [
  { background: "#F4A637", text: "#041A51" }, // expoOrange
  { background: "#041A51", text: "#FFFFFF" }, // expoBlue
  { background: "#C77E1B", text: "#FFFFFF" }, // dark orange
  { background: "#1C3E8A", text: "#FFFFFF" }, // light brand blue
  { background: "#365B9C", text: "#FFFFFF" }, // steel blue
];

export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function getAvatarColor(seed: string): AvatarColor {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}
