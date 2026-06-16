import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

/** The SADA wordmark — an original logotype set in the Thmanyah display face. */
export function Wordmark({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <span className={cn("inline-flex items-center gap-2 font-display font-black tracking-tight", className)}>
      <span aria-hidden className="text-accent">٫</span>
      {t.brand}
    </span>
  );
}
