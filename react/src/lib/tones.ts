/**
 * Cover "tones" — the colour grounds used for podcast / newsletter / show art.
 * Each maps to a background + foreground pair so the dummy covers stay on-brand
 * without shipping real cover images.
 */
export type Tone =
  | "ink"
  | "gold"
  | "green"
  | "darkgreen"
  | "cream"
  | "sand"
  | "card"
  | "mint"
  | "pink"
  | "orange"
  | "lime"
  | "redink";

export const toneClass: Record<Tone, string> = {
  ink: "bg-[#15110c] text-[#f4efe6]",
  gold: "bg-[#e3b23c] text-[#15110c]",
  green: "bg-[#2f6b4f] text-[#f3efe2]",
  darkgreen: "bg-[#143a2c] text-[#a7e0b8]",
  cream: "bg-[#efe9d8] text-[#15110c]",
  sand: "bg-[#d9c7a3] text-[#2a2114]",
  card: "bg-[#f6efe1] text-[#15110c]",
  mint: "bg-[#cfe7d6] text-[#16321f]",
  pink: "bg-[#e7c7c0] text-[#3a1f1a]",
  orange: "bg-[#fa541c] text-white",
  lime: "bg-[#b6d63f] text-[#1b2206]",
  redink: "bg-[#2b1410] text-[#f3b8a3]",
};

export function tone(t: string): string {
  return toneClass[(t as Tone)] ?? toneClass.card;
}
