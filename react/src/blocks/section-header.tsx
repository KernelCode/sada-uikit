import { ArrowLeft } from "lucide-react";
import { useI18n } from "../i18n";

/** Editorial section header: an icon + title on one side, a "More" link on the other. */
export function SectionHeader({
  title,
  more,
  icon,
}: {
  title: string;
  more?: string;
  icon?: React.ReactNode;
}) {
  const { dir } = useI18n();
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight sm:text-[28px]">
        {icon ? <span className="text-accent">{icon}</span> : null}
        {title}
      </h2>
      {more ? (
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-opacity hover:opacity-70"
        >
          {more}
          <ArrowLeft className={dir === "rtl" ? "h-4 w-4" : "h-4 w-4 rotate-180"} />
        </a>
      ) : null}
    </div>
  );
}
