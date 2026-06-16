import { useI18n } from "../i18n";
import { PageStub } from "./stub";

export function Dashboard() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.pages.dashboard} />;
}
