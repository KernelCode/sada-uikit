import { useI18n } from "../i18n";
import { PageStub } from "./stub";

export function Showcase() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.pages.components} />;
}
