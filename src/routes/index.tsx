import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import heroImg from "../assets/home.jpg";
import foodImg from "../assets/menu.png";
import interiorImg from "../assets/interior.png";
import { Stars } from "../components/stars";
import { useScrollReveal } from "../hooks/use-scroll-reveal";
import { HIGHLIGHTS, MENU, RESTAURANT, REVIEWS } from "../data/restaurant";

const title = "Kivu Coffee Cup — Coffee, Pizza & Grills in Karongi, Rwanda";
const description =
  "Kivu Coffee Cup in Gitesi, Karongi serves fresh-roasted African coffee, wood-fired pizza, burgers and cake. Rated 4.5 from 53 reviews. Open daily 7am–10pm.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </section>
  );
}

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Cappuccino with latte art on a wooden table overlooking Lake Kivu at sunset"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-5 pt-40 pb-16 sm:pt-56 sm:pb-24">
          <p className="eyebrow text-gold">Gitesi · Karongi · Lake Kivu</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-cream sm:text-6xl">
            Roasted by the lake, served with everything you love
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg">
            Coffee house, restaurant and bakery in one. Sizzling steaks, wood-fired pizza and the
            best cappuccino in Karongi — from RF 5,000 per person.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              View the menu
            </Link>
            <a
              href={RESTAURANT.phoneHref}
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Call {RESTAURANT.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/80">
            <span className="flex items-center gap-2">
              <Stars rating={RESTAURANT.rating} />
              <strong className="text-cream">{RESTAURANT.rating}</strong> ({RESTAURANT.reviewCount}{" "}
              reviews)
            </span>
            <span>Open today until 10 pm</span>
            <span>{RESTAURANT.priceRange} per person</span>
          </div>
        </div>
      </section>

      <Section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <article key={h.title} className="surface-card p-6">
              <h2 className="font-display text-lg font-semibold">{h.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <img
            src={foodImg}
            alt="Beef burger with fries, sambusa, meatballs and chicken pizza served at Kivu Coffee Cup"
            width={1408}
            height={1008}
            loading="lazy"
            className="rounded-3xl shadow-[var(--shadow-lift)]"
          />
          <div>
            <p className="eyebrow">Guest favourites</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Dishes people come back for
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything is cooked to order — from the sizzling steak plate to hand-cut fries and
              crisp sambusa. Pair it with a cup from our own Lake Kivu roast.
            </p>
            <ul className="mt-8 space-y-4">
              {MENU[1].items.concat(MENU[2].items[0]).map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 border-b border-border pb-3"
                >
                  <span>
                    <span className="block font-medium">{item.name}</span>
                    <span className="block text-sm text-muted-foreground">{item.desc}</span>
                  </span>
                  <span className="font-display font-semibold whitespace-nowrap text-accent">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-8 inline-flex rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream"
            >
              See the full menu
            </Link>
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {RESTAURANT.rating} stars from {RESTAURANT.reviewCount} guests
            </h2>
          </div>
          <Link to="/reviews" className="text-sm font-semibold text-accent hover:underline">
            Read all reviews →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.author} className="surface-card flex flex-col p-6">
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold">{r.author}</span>
                <span className="block text-xs text-muted-foreground">
                  {r.meta} · {r.when}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Find us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              A warm table in Gitesi
            </h2>
            <p className="mt-4 text-cream/75">
              We are on the main road in Gitesi, Karongi District, minutes from the Lake Kivu shore.
              Walk in, drive through, or order delivery.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-cream/50">Address</dt>
                <dd className="text-cream">{RESTAURANT.address}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Hours</dt>
                <dd className="text-cream">{RESTAURANT.hours}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Phone</dt>
                <dd>
                  <a className="text-gold hover:underline" href={RESTAURANT.phoneHref}>
                    {RESTAURANT.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <img
            src={interiorImg}
            alt="Guests enjoying coffee inside the warm wooden interior of Kivu Coffee Cup"
            width={1408}
            height={1008}
            loading="lazy"
            className="rounded-3xl"
          />
        </div>
      </Section>
    </>
  );
}
