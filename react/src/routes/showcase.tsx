import { Container } from "../components/container";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { Input } from "../components/input";
import { Card, CardContent } from "../components/card";
import { Cover } from "../components/cover";
import { useI18n } from "../i18n";

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border py-10">
      <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

const SWATCHES: [string, string][] = [
  ["background", "var(--color-background)"],
  ["foreground", "var(--color-foreground)"],
  ["card", "var(--color-card)"],
  ["muted", "var(--color-muted)"],
  ["accent", "var(--color-accent)"],
  ["gold", "var(--color-gold)"],
  ["ink", "var(--color-ink)"],
  ["border", "var(--color-border)"],
];

const BRAND = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function Showcase() {
  const { t } = useI18n();
  const s = t.showcase;

  return (
    <Container className="py-10">
      <header className="border-b border-border pb-8">
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{s.title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{s.subtitle}</p>
      </header>

      {/* Color */}
      <Group title={s.colors}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SWATCHES.map(([name, val]) => (
            <div key={name}>
              <div className="h-20 rounded-[var(--radius)] border border-border" style={{ background: val }} />
              <p className="mt-2 text-xs font-semibold">{name}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex overflow-hidden rounded-[var(--radius)] border border-border">
          {BRAND.map((n) => (
            <div key={n} className="h-12 flex-1" style={{ background: `var(--color-brand-${n})` }} title={`brand-${n}`} />
          ))}
        </div>
      </Group>

      {/* Type scale */}
      <Group title={s.type}>
        <div className="space-y-3">
          <p className="font-display text-5xl font-black tracking-tight">صدى · Sada</p>
          <p className="font-serif text-4xl">خط ثُمانية — العنوان الكبير</p>
          <p className="font-display text-3xl font-bold">عنوان قسم · Section heading</p>
          <p className="text-xl font-semibold">عنوان فرعي · Subheading</p>
          <p className="text-base text-muted-foreground">
            نص أساسي بخط IBM Plex Sans Arabic — body copy in the UI face used across the platform.
          </p>
          <p className="text-sm text-muted-foreground">Caption · بيان صغير</p>
        </div>
      </Group>

      {/* Fonts */}
      <Group title={s.fonts}>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["IBM Plex Sans Arabic", "font-sans", "الواجهة والنص"],
            ["Thmanyah Sans", "font-display", "العناوين"],
            ["Thmanyah Serif", "font-serif", "العرض التحريري"],
          ].map(([name, cls, role]) => (
            <Card key={name}>
              <CardContent className="pt-6">
                <p className={`text-3xl ${cls} font-bold`}>أبجد هوّز</p>
                <p className={`mt-1 text-2xl ${cls}`}>Aa Bb Cc 123</p>
                <p className="mt-3 text-sm font-semibold">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Group>

      {/* Buttons */}
      <Group title={s.buttons}>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">{t.nav.cta}</Button>
          <Button variant="accent">{t.nav.cta}</Button>
          <Button variant="gold">✦ {t.nav.subscribe}</Button>
          <Button variant="ink">{t.nav.cta}</Button>
          <Button variant="outline">{t.nav.login}</Button>
          <Button variant="ghost">{t.nav.search}</Button>
          <Button variant="link">{t.articles.more}</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Group>

      {/* Badges */}
      <Group title={s.badges}>
        <div className="flex flex-wrap gap-3">
          <Badge variant="neutral">neutral</Badge>
          <Badge variant="accent">accent</Badge>
          <Badge variant="soft">soft</Badge>
          <Badge variant="gold">gold</Badge>
          <Badge variant="ink">ink</Badge>
          <Badge variant="success">success</Badge>
          <Badge variant="outline">outline</Badge>
        </div>
      </Group>

      {/* Inputs */}
      <Group title={s.inputs}>
        <div className="grid max-w-md gap-3">
          <Input placeholder={t.nav.search + "…"} />
          <Input placeholder="email@sada.com" />
          <div className="flex gap-2">
            <Input placeholder={t.nav.search} />
            <Button variant="accent">{t.nav.search}</Button>
          </div>
        </div>
      </Group>

      {/* Cards / covers */}
      <Group title={s.cards}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["gold", "green", "ink", "orange", "darkgreen", "pink", "lime", "cream"].map((tn) => (
            <Cover key={tn} label={tn} tone={tn} size="sm" />
          ))}
        </div>
      </Group>
    </Container>
  );
}
