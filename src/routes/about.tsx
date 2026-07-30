import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import interiorImg from "../assets/interior.png";
import { useScrollReveal } from "../hooks/use-scroll-reveal";
import { RESTAURANT } from "../data/restaurant";

function AboutSection({ children, className = "" }: { children: ReactNode; className?: string }) {
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

const title = "About & Contact — Kivu Coffee Cup, Gitesi Karongi";
const description =
  "Our story, opening hours, location and contact details. Kivu Coffee Cup is a coffee house, restaurant and bakery on the main road in Gitesi, Karongi, Rwanda.";

const faqs = [
  {
    q: "Where is Kivu Coffee Cup located?",
    a: "We are at W9H3+M23, Gitesi, in Karongi District, Western Province, Rwanda — a short drive from the Lake Kivu shore.",
  },
  {
    q: "What are the opening hours?",
    a: "We open every day from 7:00 am and close at 10:00 pm.",
  },
  {
    q: "Do you offer delivery or drive-through?",
    a: "Yes. We offer dine-in, a drive-through window and no-contact delivery around Karongi town.",
  },
  {
    q: "How much does a meal cost?",
    a: "Most guests spend between RF 5,000 and RF 10,000 per person, including a drink.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutSection className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our story</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            A coffee house built around Lake Kivu
          </h1>
          <p className="mt-5 text-muted-foreground">
            Kivu Coffee Cup started as a small counter serving Rwandan coffee to travellers passing
            through Karongi. Today it is a full restaurant and bakery: our roaster runs in the
            morning, the wood-fired oven from noon, and the cake fridge is refilled daily from the
            bakery next door.
          </p>
          <p className="mt-4 text-muted-foreground">
            We cook to order, source produce from local growers, and keep our kitchen open late so
            nobody in Gitesi goes home hungry.
          </p>
        </div>
        <img
          src={interiorImg}
          alt="The interior of Kivu Coffee Cup with wooden tables and warm pendant lighting"
          width={1408}
          height={1008}
          loading="lazy"
          className="rounded-3xl shadow-[var(--shadow-lift)]"
        />
      </AboutSection>

      <AboutSection className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold">Visit or contact us</h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Address</dt>
                <dd className="text-base font-medium">{RESTAURANT.address}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Hours</dt>
                <dd className="text-base font-medium">{RESTAURANT.hours}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="text-base font-medium">
                  <a className="text-accent hover:underline" href={RESTAURANT.phoneHref}>
                    {RESTAURANT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Service options</dt>
                <dd className="text-base font-medium">
                  Dine-in · Drive-through · No-contact delivery
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">Frequently asked</h2>
            <div className="mt-8 space-y-5">
              {faqs.map((f) => (
                <div key={f.q} className="surface-card p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AboutSection>
    </>
  );
}
