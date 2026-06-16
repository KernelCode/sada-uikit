import * as React from "react";
import { cn } from "../lib/cn";
import { tone } from "../lib/tones";

/**
 * A typographic "cover" — stands in for podcast / newsletter / documentary art.
 * Renders the title big in the display face over a tinted ground (no images).
 */
export function Cover({
  label,
  tone: t,
  className,
  ratio = "square",
  size = "md",
  corner,
}: {
  label: string;
  tone: string;
  className?: string;
  ratio?: "square" | "video";
  size?: "sm" | "md" | "lg";
  corner?: React.ReactNode;
}) {
  const sizeClass =
    size === "lg" ? "text-3xl sm:text-4xl" : size === "sm" ? "text-lg" : "text-2xl";
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-[var(--radius-lg)] p-4 text-center",
        ratio === "video" ? "aspect-video" : "aspect-square",
        tone(t),
        className,
      )}
    >
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <span
        className={cn(
          "font-display font-bold leading-[1.15] tracking-tight [text-wrap:balance]",
          sizeClass,
        )}
      >
        {label}
      </span>
      {corner ? <div className="absolute end-3 top-3">{corner}</div> : null}
    </div>
  );
}
