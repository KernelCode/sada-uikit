import { useI18n } from "../i18n";
import { PageStub } from "./stub";

export function Pricing() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.pages.pricing} />;
}
