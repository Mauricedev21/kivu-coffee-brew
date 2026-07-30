import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { RESTAURANT } from "../data/restaurant";
import logoSrc from "../assets/logo.png";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logoSrc}
            alt="Kivu Coffee Cup"
            width={120}
            height={44}
            className="h-11 w-auto"
          />
          <span className="font-display text-lg font-semibold leading-tight tracking-tight">
            Kivu Coffee Cup
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
          <div ref={contactRef} className="relative">
            <button
              type="button"
              onClick={() => setContactOpen((v) => !v)}
              onBlur={(e) => {
                if (!contactRef.current?.contains(e.relatedTarget)) {
                  setContactOpen(false);
                }
              }}
              className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              Contact us
            </button>
            {contactOpen ? (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/10 bg-card/95 p-5 shadow-[var(--shadow-lift)] backdrop-blur-lg animate-in">
                <h3 className="font-display text-base font-semibold">Get in touch</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <span className="block font-medium">Call us</span>
                      <a href={RESTAURANT.phoneHref} className="text-accent hover:underline">
                        {RESTAURANT.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <span className="block font-medium">Address</span>
                      <span className="text-muted-foreground">{RESTAURANT.address}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="block font-medium">Hours</span>
                      <span className="text-muted-foreground">{RESTAURANT.hours}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href={RESTAURANT.phoneHref}
                    className="flex-1 rounded-lg bg-espresso px-4 py-2 text-center text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                  >
                    Call now
                  </a>
                  <Link
                    to="/about"
                    onClick={() => setContactOpen(false)}
                    className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    More info
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v);
            setContactOpen(false);
          }}
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
          <div className="mt-3 border-t border-border pt-3">
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Contact
            </p>
            <a
              href={RESTAURANT.phoneHref}
              className="mt-2 block py-1 text-sm font-semibold text-accent"
            >
              Call {RESTAURANT.phone}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{RESTAURANT.address}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{RESTAURANT.hours}</p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
