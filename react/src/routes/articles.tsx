import { useState } from "react";
import { Container } from "../components/container";
import { Cover } from "../components/cover";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

const TONES = ["green", "gold", "ink", "orange", "darkgreen", "pink"];

export function Articles() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  // Build a fuller list by repeating the dummy set (still original content).
  const items = [...t.articles.items, ...t.featured.side, ...t.articles.items.slice(0, 2)];

  return (
    <Container className="py-10">
      <header className="border-b border-border pb-8">
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{t.articlesPage.title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.articlesPage.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {t.articlesPage.filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                active === i ? "bg-foreground text-background" : "border border-border bg-card text-foreground/70 hover:bg-muted",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((a, i) => (
          <article key={i} className="group flex gap-5 border-b border-border pb-8">
            <Cover label={a.show} tone={TONES[i % TONES.length] ?? "green"} size="sm" className="w-28 shrink-0 sm:w-32" />
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-accent">{a.author}</span> · {a.show} · {a.date}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold hover:bg-muted">
          {t.ui.loadMore}
        </button>
      </div>
    </Container>
  );
}
