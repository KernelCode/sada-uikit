import { Container } from "../components/container";
import { useI18n } from "../i18n";

/** A placeholder for an unbuilt page. Replace each with a full, on-brand screen. */
export function PageStub({ label }: { label: string }) {
  const { t } = useI18n();
  return (
    <main>
      <Container className="py-28">
        <div className="mx-auto grid max-w-xl place-items-center rounded-[var(--radius-lg)] border border-dashed border-border p-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <p className="mt-3 text-lg text-foreground">{t.canvas.todo}</p>
        </div>
      </Container>
    </main>
  );
}
