import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso font-display text-lg text-cream">
            K
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Kivu Coffee Cup</span>
            <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Gitesi · Karongi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+250791854314"
            className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Book a table
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="rounded-md border border-border px-3 py-2 text-sm md:hidden"
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-5 py-3 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+250791854314" className="block py-2 text-sm font-semibold text-accent">
            Call 0791 854 314
          </a>
        </nav>
      ) : null}
    </header>
  );
}