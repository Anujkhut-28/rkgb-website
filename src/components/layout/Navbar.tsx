import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { granites } from "@/data/granites";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="RKGB logo" className="h-12 w-12 rounded-full object-contain" />
          <div className="leading-none">
            <div className="font-serif text-xl text-ink tracking-wide">RKGB</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Granite &amp; BuildCon
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About Us</NavItem>
          <li className="group relative">
            <Link
              to="/products"
              className="text-sm font-medium tracking-wide text-ink/80 transition hover:text-gold"
            >
              Products ⮟
            </Link>
            {/* Mega menu */}
            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[640px] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="rounded-md border border-ink/10 bg-background/95 p-8 shadow-luxury backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <Link
                      to="/products/granites"
                      className="mb-4 inline-flex items-center gap-1 font-serif text-lg text-ink hover:text-gold"
                    >
                      Granites <ChevronRight className="h-4 w-4" />
                    </Link>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {granites.map((g) => (
                        <li key={g.slug}>
                          <Link
                            to="/products/granites/$slug"
                            params={{ slug: g.slug }}
                            className="group/item flex items-center gap-2 text-sm text-muted-foreground transition hover:text-ink"
                          >
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ background: g.accentHex }}
                            />
                            {g.name.replace(" Granite", "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/products/marbles"
                      className="mb-4 inline-flex items-center gap-1 font-serif text-lg text-ink hover:text-gold"
                    >
                      Marbles <ChevronRight className="h-4 w-4" />
                    </Link>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Eight expressive marble varieties, from Snow White to Lightning Black.
                    </p>
                    <Link
                      to="/customization"
                      className="mt-6 inline-flex items-center gap-1 font-serif text-lg text-ink hover:text-gold"
                    >
                      Customization <ChevronRight className="h-4 w-4" />
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Surface finishes and slab sizes for project planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <NavItem to="/contact">Contact</NavItem>
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex h-11 items-center bg-ink px-6 text-sm font-medium tracking-wide text-background transition hover:bg-gold"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-ink"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 h-dvh overflow-y-auto overscroll-contain bg-background lg:hidden">
          <div className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-ink/10 bg-background px-6">
            <span className="flex items-center gap-3">
              <img src={logo} alt="RKGB logo" className="h-11 w-11 rounded-full object-contain" />
              <span className="font-serif text-xl text-ink">RKGB</span>
            </span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-8">
            <ul className="space-y-6">
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileProductsOpen((s) => !s)}
                  className="flex items-center gap-2 font-serif text-3xl"
                >
                  Products <ChevronRight className={`h-5 w-5 transition ${mobileProductsOpen ? "rotate-90" : ""}`} />
                </button>
                {mobileProductsOpen && (
                  <ul className="mt-3 ml-2 space-y-2 border-l border-border pl-4">
                    <li>
                      <Link to="/products/granites" onClick={() => setMobileOpen(false)} className="text-base text-ink">
                        All Granites
                      </Link>
                    </li>
                    {granites.map((g) => (
                      <li key={g.slug}>
                        <Link
                          to="/products/granites/$slug"
                          params={{ slug: g.slug }}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-muted-foreground"
                        >
                          {g.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/products/marbles" onClick={() => setMobileOpen(false)} className="text-base text-ink">
                        Marbles
                      </Link>
                    </li>
                    <li>
                      <Link to="/customization" onClick={() => setMobileOpen(false)} className="text-base text-ink">
                        Customization
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="font-serif text-3xl">
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-10 inline-flex h-12 items-center bg-ink px-8 text-sm text-background"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-gold" }}
        className="text-sm font-medium tracking-wide text-ink/80 transition hover:text-gold"
      >
        {children}
      </Link>
    </li>
  );
}
