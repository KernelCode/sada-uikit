import { ArrowRight, Check } from "lucide-react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Container } from "../components/container";
import { useI18n } from "../i18n";

/**
 * The base "canvas" page. This is intentionally plain — it exists so the app
 * runs and explains itself. REPLACE it with a full, original landing page.
 */
export function Landing() {
  const { t } = useI18n();
  const c = t.canvas;
  return (
    <main>
      <Container className="py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
          {c.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            {c.build} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
          <Button size="lg" variant="outline" className="font-mono text-sm">
            {c.secondary}
          </Button>
        </div>

        <Card className="mt-12 max-w-2xl">
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {c.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
