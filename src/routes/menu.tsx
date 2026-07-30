import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import menuImg from "../assets/coffee.png";
import { useScrollReveal } from "../hooks/use-scroll-reveal";
import { MENU, RESTAURANT } from "../data/restaurant";

function MenuSection({ children, className = "" }: { children: ReactNode; className?: string }) {
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

const title = "Menu & Prices — Kivu Coffee Cup, Karongi";
const description =
  "Full Kivu Coffee Cup menu: African coffee, cappuccino, beef and chicken burgers, chicken pizza, fish and chips, sambusa and fresh cake. Prices in RWF.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Kivu Coffee Cup Menu",
          hasMenuSection: MENU.map((s) => ({
            "@type": "MenuSection",
            name: s.section,
            hasMenuItem: s.items.map((i) => ({
              "@type": "MenuItem",
              name: i.name,
              description: i.desc,
              offers: {
                "@type": "Offer",
                price: i.price.replace(/[^0-9]/g, ""),
                priceCurrency: "RWF",
              },
            })),
          })),
        }),
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={menuImg}
          alt="Assorted dishes from the Kivu Coffee Cup kitchen"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow text-gold">Menu</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Everything on the board
          </h1>
          <p className="mt-4 max-w-xl text-cream/80">
            {RESTAURANT.priceRange} per person. Served all day, {RESTAURANT.hours}.
          </p>
        </div>
      </section>

      <MenuSection className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <div className="space-y-14">
          {MENU.map((section) => (
            <div key={section.section}>
              <h2 className="font-display text-2xl font-semibold">{section.section}</h2>
              <div className="mt-2 h-px w-16 bg-[image:var(--gradient-gold)]" />
              <ul className="mt-6 space-y-5">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-4">
                    <span className="flex-1">
                      <span className="block font-medium">{item.name}</span>
                      <span className="block text-sm text-muted-foreground">{item.desc}</span>
                    </span>
                    <span className="font-display font-semibold whitespace-nowrap text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 rounded-2xl bg-secondary/70 p-6 text-sm text-muted-foreground">
          Prices are indicative and may change with market rates. Call{" "}
          <a className="font-semibold text-accent" href={RESTAURANT.phoneHref}>
            {RESTAURANT.phone}
          </a>{" "}
          to pre-order, reserve a table or arrange delivery.
        </p>
      </MenuSection>
    </>
  );
}
