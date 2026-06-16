import { PlayCircle } from "lucide-react";
import { Container } from "../components/container";
import { Cover } from "../components/cover";
import { Badge } from "../components/badge";
import { useI18n } from "../i18n";

export function Podcasts() {
  const { t } = useI18n();
  const counts = [42, 18, 67, 90, 31, 55];

  return (
    <Container className="py-10">
      <header className="border-b border-border pb-8">
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{t.podcastsPage.title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.podcastsPage.subtitle}</p>
      </header>

      {/* Feature show */}
      <section className="mt-8 grid gap-6 rounded-[var(--radius-xl)] bg-ink p-6 text-ink-foreground sm:p-8 lg:grid-cols-[280px_1fr] lg:items-center">
        <Cover label={t.episodes.feature.show} tone="green" size="lg" />
        <div>
          <Badge variant="accent" className="mb-3">{t.episodes.feature.kicker}</Badge>
          <h2 className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            {t.episodes.feature.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-foreground/70">{t.episodes.feature.excerpt}</p>
          <div className="mt-5 flex items-center gap-3">
            <button className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground hover:brightness-105">
              <PlayCircle className="h-5 w-5" /> {t.podcastsPage.listen}
            </button>
            <span className="text-xs text-ink-foreground/60">{t.episodes.feature.date} · {t.episodes.feature.duration}</span>
          </div>
        </div>
      </section>

      {/* Show grid */}
      <section className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
        {t.episodes.items.map((e, i) => (
          <article key={i} className="group">
            <div className="relative">
              <Cover label={e.title} tone={e.tone} />
              <span className="absolute bottom-3 end-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <PlayCircle className="h-6 w-6" />
              </span>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold tracking-tight transition-colors group-hover:text-accent">
              {e.title}
            </h3>
            <p className="text-sm text-muted-foreground">{e.host}</p>
            <p className="mt-1 text-xs text-muted-foreground">{counts[i % counts.length]} {t.podcastsPage.episodes}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
