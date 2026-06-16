import { Headphones, Mail, PlayCircle, Video } from "lucide-react";
import { Container } from "../components/container";
import { Cover } from "../components/cover";
import { Badge } from "../components/badge";
import { SectionHeader } from "../blocks/section-header";
import { useI18n } from "../i18n";
import { tone } from "../lib/tones";

function Byline({ author, show, date }: { author: string; show: string; date: string }) {
  const { t } = useI18n();
  return (
    <p className="mt-3 text-xs text-muted-foreground">
      <span className="font-semibold text-accent">{author}</span> {t.ui.in}{" "}
      <span className="font-semibold text-foreground">{show}</span> {t.ui.from}{" "}
      <span className="font-semibold text-foreground">{t.brand}</span> · {date}
    </p>
  );
}

export function Landing() {
  const { t } = useI18n();

  return (
    <Container className="py-8 sm:py-10">
      {/* ── Promo hero banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[var(--radius-xl)] bg-ink p-8 text-ink-foreground sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(120% 120% at 85% 0%, #1f5c44 0%, transparent 55%), radial-gradient(80% 80% at 0% 100%, #4a2208 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <Badge variant="accent" className="mb-4">{t.hero.badge}</Badge>
            <h1 className="font-display text-3xl font-black leading-[1.15] tracking-tight sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-4 max-w-md text-sm text-ink-foreground/70 sm:text-base">{t.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold ring-1 ring-white/20 transition-colors hover:bg-white/20">
                <span aria-hidden>▶</span> {t.hero.google}
              </button>
              <button className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold ring-1 ring-white/20 transition-colors hover:bg-white/20">
                <span aria-hidden></span> {t.hero.apple}
              </button>
            </div>
          </div>
          <div className="grid w-full max-w-[280px] shrink-0 grid-cols-3 gap-2 sm:gap-3">
            {["gold", "green", "orange", "cream", "ink", "sand", "darkgreen", "pink", "lime"].map((tn, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl ${tone(tn)} ring-1 ring-white/10`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured: lead + two side stories ─────────────────────────── */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Lead */}
        <article className="group flex flex-col gap-4 sm:flex-row-reverse">
          <Cover
            label={t.featured.lead.show}
            tone="green"
            className="w-full shrink-0 sm:w-48"
          />
          <div className="min-w-0">
            <Badge variant="soft" className="mb-2">{t.featured.lead.kicker}</Badge>
            <h3 className="font-display text-2xl font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
              {t.featured.lead.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.featured.lead.excerpt}</p>
            <Byline {...t.featured.lead} />
          </div>
        </article>

        {/* Two stacked side stories */}
        <div className="flex flex-col divide-y divide-border">
          {t.featured.side.map((s, i) => (
            <article key={i} className="group flex gap-4 py-4 first:pt-0">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                <Byline author={s.author} show={s.show} date={s.date} />
              </div>
              <Cover label={s.show} tone={s.tone} size="sm" className="w-24 shrink-0 sm:w-28" />
            </article>
          ))}
        </div>
      </section>

      {/* ── New episodes ───────────────────────────────────────────────── */}
      <section className="mt-14">
        <SectionHeader title={t.episodes.heading} more={t.episodes.more} icon={<Headphones className="h-6 w-6" />} />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* cover grid */}
          <div className="grid grid-cols-3 gap-3">
            {t.episodes.items.map((e, i) => (
              <button key={i} className="group text-start">
                <Cover label={e.title} tone={e.tone} size="sm" />
                <p className="mt-1.5 truncate text-xs text-muted-foreground">{e.host}</p>
              </button>
            ))}
          </div>
          {/* two feature rows */}
          <div className="flex flex-col divide-y divide-border">
            {[t.episodes.feature, t.episodes.feature2].map((f, i) => (
              <article key={i} className="group flex gap-4 py-4 first:pt-0">
                <Cover
                  label={f.show}
                  tone={i === 0 ? "darkgreen" : "redink"}
                  size="sm"
                  className="w-28 shrink-0 sm:w-32"
                  corner={
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-black/30 text-white">
                      <PlayCircle className="h-5 w-5" />
                    </span>
                  }
                />
                <div className="min-w-0">
                  <Badge variant="soft" className="mb-1.5">{f.kicker}</Badge>
                  <h3 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
                    {f.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{f.excerpt}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t.ui.in} <span className="font-semibold text-foreground">{f.show}</span> · {f.date} · {f.duration}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured newsletters ──────────────────────────────────────── */}
      <section className="mt-14">
        <SectionHeader title={t.newsletters.heading} icon={<Mail className="h-6 w-6" />} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {t.newsletters.items.map((n, i) => (
            <button key={i} className="group text-center">
              <Cover label={n.name} tone={n.tone} />
              <p className="mt-2 truncate text-xs text-muted-foreground">{n.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ── New documentaries ─────────────────────────────────────────── */}
      <section className="mt-14">
        <SectionHeader title={t.documentaries.heading} more={t.documentaries.more} icon={<Video className="h-6 w-6" />} />
        <div className="grid gap-6 sm:grid-cols-3">
          {t.documentaries.items.map((d, i) => (
            <article key={i} className="group">
              <Cover
                label={d.show}
                tone={d.tone}
                ratio="video"
                corner={<Badge variant="ink" className="bg-black/60 text-white">{d.badge}</Badge>}
              />
              <h3 className="mt-3 font-display text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
                {d.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {t.ui.in} <span className="font-semibold text-foreground">{d.show}</span> {t.ui.from}{" "}
                <span className="font-semibold text-foreground">{t.brand}</span> · {d.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── New articles ──────────────────────────────────────────────── */}
      <section className="mt-14">
        <SectionHeader title={t.articles.heading} more={t.articles.more} icon={<span className="font-display text-2xl font-black">۞</span>} />
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {t.articles.items.map((a, i) => (
            <article key={i} className="group flex gap-4 border-b border-border pb-6">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <Byline {...a} />
              </div>
              <div className="h-20 w-24 shrink-0 rounded-[var(--radius)] bg-muted" />
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold transition-colors hover:bg-muted">
            {t.articles.more}
          </button>
        </div>
      </section>
    </Container>
  );
}
