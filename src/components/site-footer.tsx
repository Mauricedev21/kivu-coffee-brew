import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-2xl">Kivu Coffee Cup</h2>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            Fresh roasted coffee, wood-fired pizza and lakeside comfort food in Gitesi, Karongi
            District, Rwanda.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Visit</h3>
          <address className="mt-3 space-y-1 text-sm text-cream/70 not-italic">
            <p>W9H3+M23, Gitesi</p>
            <p>Karongi, Western Province</p>
            <p>
              <a className="hover:text-gold" href="tel:+250791854314">
                0791 854 314
              </a>
            </p>
          </address>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Hours</h3>
          <ul className="mt-3 space-y-1 text-sm text-cream/70">
            <li>Monday – Sunday</li>
            <li>7:00 am – 10:00 pm</li>
            <li>Dine-in · Drive-through</li>
            <li>No-contact delivery</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Explore</h3>
          <ul className="mt-3 space-y-1 text-sm text-cream/70">
            <li>
              <Link to="/menu" className="hover:text-gold">
                Menu &amp; prices
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-gold">
                Guest reviews
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                Our story
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 px-5 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Kivu Coffee Cup · RF 5,000–10,000 per person
      </div>
    </footer>
  );
}