import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Footer } from "../blocks/footer";
import { Wordmark } from "../blocks/wordmark";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

export function Layout() {
  const { t, lang, setLang } = useI18n();
  const [dark, setDark] = useState(() =>
    typeof localStorage !== "undefined" ? localStorage.getItem("base-theme") === "dark" : false,
  );
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("base-theme", dark ? "dark" : "light");
  }, [dark]);

  const links: [string, string][] = [
    ["/", t.nav.home],
    ["/articles", t.nav.articles],
    ["/podcasts", t.nav.radio],
    ["/components", t.nav.documentaries],
  ];

  const navItem = (to: string, label: string) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/"}
      onClick={() => setMenu(false)}
      className={({ isActive }) =>
        cn(
          "rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
          isActive
            ? "bg-foreground text-background"
            : "text-foreground/70 hover:text-foreground",
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-3">
          {/* right (RTL) cluster: actions */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden text-foreground/70 sm:inline-flex">
              {t.nav.login}
            </Button>
            <Button size="sm" variant="gold" className="gap-1.5">
              <span aria-hidden>✦</span>
              {t.nav.subscribe}
            </Button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 hover:bg-muted"
              aria-label={t.nav.search}
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
          </div>

          {/* center nav */}
          <nav className="hidden items-center gap-1 lg:flex">{links.map(([to, l]) => navItem(to, l))}</nav>

          {/* left (RTL) cluster: brand + toggles */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-border p-0.5 text-xs font-semibold md:flex">
              <button
                onClick={() => setLang("ar")}
                className={cn("rounded-full px-2.5 py-1", lang === "ar" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                ع
              </button>
              <button
                onClick={() => setLang("en")}
                className={cn("rounded-full px-2 py-1", lang === "en" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <NavLink to="/" className="text-2xl">
              <Wordmark />
            </NavLink>
            <button
              onClick={() => setMenu((m) => !m)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border lg:hidden"
              aria-label="Menu"
            >
              {menu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </Container>

        {menu ? (
          <div className="border-t border-border bg-background lg:hidden">
            <Container className="flex flex-col gap-1 py-3">
              {links.map(([to, l]) => navItem(to, l))}
              <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
                <Button size="sm" variant="outline" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
                  {lang === "ar" ? "English" : "العربية"}
                </Button>
                <Button size="sm" variant="ghost">{t.nav.login}</Button>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
