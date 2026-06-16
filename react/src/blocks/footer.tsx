import { Container } from "../components/container";
import { useI18n } from "../i18n";
import { Wordmark } from "./wordmark";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const cols: { title: string; links: string[] }[] = [
    { title: f.explore, links: f.exploreLinks },
    { title: f.company, links: f.companyLinks },
    { title: f.legal, links: f.legalLinks },
  ];
  return (
    <footer className="mt-20 border-t border-border bg-ink text-ink-foreground">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              {f.tagline}
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-ink-foreground/50">
          {f.rights}
        </p>
      </Container>
    </footer>
  );
}
