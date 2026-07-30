import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Stars } from "../components/stars";
import { useScrollReveal } from "../hooks/use-scroll-reveal";
import { RESTAURANT, REVIEWS } from "../data/restaurant";

function ReviewSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

const title = "Guest Reviews — Kivu Coffee Cup, Karongi";
const description =
  "Read what guests say about Kivu Coffee Cup in Gitesi, Karongi: 4.5 stars from 53 reviews praising the coffee, sizzling steak, friendly staff and hygiene.";

const breakdown = [
  { stars: 5, pct: 68 },
  { stars: 4, pct: 17 },
  { stars: 3, pct: 7 },
  { stars: 2, pct: 4 },
  { stars: 1, pct: 4 },
];

const tags = ["friendly staff", "sambusa", "chicken curry", "hygiene", "birthday cake", "latte"];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <p className="eyebrow">Reviews</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">What our guests say</h1>

      <ReviewSection className="surface-card mt-10 grid gap-8 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="text-center sm:text-left">
          <div className="font-display text-6xl font-semibold">{RESTAURANT.rating}</div>
          <Stars rating={RESTAURANT.rating} className="mt-2" />
          <p className="mt-1 text-sm text-muted-foreground">{RESTAURANT.reviewCount} reviews</p>
        </div>
        <div className="space-y-2">
          {breakdown.map((b) => (
            <div key={b.stars} className="flex items-center gap-3 text-sm">
              <span className="w-3 text-muted-foreground">{b.stars}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <span
                  className="block h-full rounded-full bg-[image:var(--gradient-gold)]"
                  style={{ width: `${b.pct}%` }}
                />
              </span>
              <span className="w-10 text-right text-muted-foreground">{b.pct}%</span>
            </div>
          ))}
        </div>
      </ReviewSection>

      <ReviewSection className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </ReviewSection>

      <ReviewSection className="mt-12 space-y-6">
        {REVIEWS.map((r) => (
          <article key={r.author} className="surface-card p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-semibold">{r.author}</h2>
                <p className="text-xs text-muted-foreground">{r.meta}</p>
              </div>
              <div className="text-right">
                <Stars rating={r.rating} />
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </ReviewSection>

      <ReviewSection className="mt-12 rounded-3xl bg-espresso p-8 text-cream">
        <h2 className="font-display text-2xl font-semibold">Visited us recently?</h2>
        <p className="mt-2 text-sm text-cream/75">
          Tell us how we did — feedback goes straight to the kitchen and the bar.
        </p>
        <a
          href={RESTAURANT.phoneHref}
          className="mt-6 inline-flex rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-accent-foreground"
        >
          Call {RESTAURANT.phone}
        </a>
      </ReviewSection>
    </div>
  );
}
