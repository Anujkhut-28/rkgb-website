import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { granites } from "@/data/granites";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-background/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="RKGB logo" className="h-12 w-12 rounded-full object-contain" />
            <div>
              <div className="font-serif text-xl text-background">RKGB</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-background/50">
                Radhe Krishna
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/60">
            Crafting excellence in natural stone — premium granite and marble manufactured
            and exported worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon><Facebook className="h-4 w-4" /></SocialIcon>
            <SocialIcon><Linkedin className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-background">Quick Links</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/products/marbles" className="hover:text-gold">Marbles</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-background">Granite Range</h4>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {granites.slice(0, 8).map((g) => (
              <li key={g.slug}>
                <Link
                  to="/products/granites/$slug"
                  params={{ slug: g.slug }}
                  className="hover:text-gold"
                >
                  {g.name.replace(" Granite", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-background">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>Industrial Area, Rajasthan, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span>info@rkgb.com</span>
            </li>
          </ul>

          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            <label className="text-xs uppercase tracking-widest text-background/50">
              Newsletter
            </label>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-10 flex-1 border border-background/20 bg-transparent px-3 text-sm text-background placeholder:text-background/40 focus:border-gold focus:outline-none"
              />
              <button className="h-10 bg-gold px-4 text-xs font-medium uppercase tracking-wider text-ink hover:bg-background hover:text-ink transition">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-background/40 md:flex-row lg:px-12">
          <p>© {new Date().getFullYear()} Radhe Krishna Granite &amp; BuildCon. All rights reserved.</p>
          <p>Crafted with precision in India.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="grid h-9 w-9 place-items-center border border-background/20 transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
