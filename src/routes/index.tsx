import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-main.jpg";
import factory from "@/assets/factory.jpg";
import marble from "@/assets/green-marble.png";
import { granites } from "@/data/granites";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { ArrowUpRight, Award, Globe2, Hammer, Leaf, Quote, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RKGB — Premium Granite & Marble Solutions" },
      { name: "description", content: "Crafting excellence in natural stone — explore RKGB's premium granite and marble collections, manufactured and exported worldwide." },
      { property: "og:title", content: "RKGB — Premium Granite & Marble Solutions" },
      { property: "og:description", content: "Crafting excellence in natural stone." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Vision />
      <Mission />
      <ProductsPreview />
      <Testimonials />
      <ContactStrip />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Polished luxury granite surface"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/40 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-44 lg:px-12 lg:pb-48">
        <div className="reveal max-w-3xl">
          <Eyebrow>Est. Radhe Krishna · India</Eyebrow>
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-5xl leading-[1.05] text-ink text-balance md:text-7xl lg:text-8xl">
            Premium Granite &amp; Marble Solutions
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-ink/70">
            Crafting Excellence in Natural Stone — sourced, finished, and exported with the
            precision the world&apos;s most ambitious architecture demands.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="group inline-flex h-12 items-center gap-2 bg-ink px-7 text-sm tracking-wide text-background transition hover:bg-gold">
              Explore Products
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center border border-ink/30 px-7 text-sm tracking-wide text-ink transition hover:border-ink hover:bg-ink hover:text-background">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Floating side card */}
        <div className="reveal reveal-delay-4 absolute right-6 top-1/2 hidden -translate-y-1/2 lg:right-12 lg:block">
          <div className="glass animate-float-prominent w-72 p-6 shadow-luxury">
            <Eyebrow>Slab of the Month</Eyebrow>
            <h3 className="mt-4 font-serif text-2xl">Imperial Gold</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Hand-selected blocks finished to a museum-grade polish.
            </p>
            <Link
              to="/products/granites/$slug"
              params={{ slug: "gold-granite" }}
              className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold"
            >
              View slab <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "10+", l: "Years of mastery" },
    { k: "10+", l: "Export countries" },
    { k: "60+", l: "Stone varieties" },
    { k: "500k", l: "Sq.ft. monthly capacity" },
  ];
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="px-6 py-10 text-center md:py-12">
            <div className="font-serif text-4xl text-ink md:text-5xl">{i.k}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {i.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-beige py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div className="relative">
          <img src={factory} alt="RKGB manufacturing facility" loading="lazy" width={1600} height={1024} className="aspect-[4/5] w-full object-cover shadow-luxury" />
        </div>
        <div>
          <Eyebrow>About RKGB</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
            A house built on stone — and on standards.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Radhe Krishna Granite &amp; BuildCon has shaped the natural stone industry from
            India for over a decades. From quarry to polish, every slab passes through a
            disciplined chain of craftsmanship engineered for global luxury projects.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Manufacturing", "State-of-the-art gangsaws & polish lines"],
              ["Infrastructure", "Integrated quarrying, processing, logistics"],
              ["Quality Assurance", "Multi-stage inspection on every slab"],
              ["Global Reach", "Exporting to 40+ countries"],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-4">
                <div className="font-serif text-lg text-ink">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-ink hover:text-gold">
            Discover the company <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const cards = [
    { icon: Hammer, t: "Premium Craftsmanship", d: "Every slab finished by master craftspeople with quarry-to-polish ownership." },
    { icon: Globe2, t: "Global Growth", d: "Trusted by architects across 40+ countries, from Riyadh to New York." },
    { icon: Award, t: "Relentless Innovation", d: "Continuous investment in machinery, surface finishes, and design R&D." },
    { icon: Leaf, t: "Sustainability", d: "Closed-loop water systems and responsible quarrying at every site." },
  ];
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our Vision</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl max-w-xl text-balance">
              To be the most respected name in natural stone.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Four pillars guide every quarry, every cut, every export — and every relationship
            we build with our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.t} className="hover-lift group border border-border/60 bg-card p-8">
              <c.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
              <h3 className="mt-6 font-serif text-2xl text-ink">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <div className="luxury-divider mt-6 opacity-50 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const items = [
    "Quality commitment in every cubic millimetre",
    "Customer satisfaction as the measure of success",
    "Modern manufacturing meets ancestral craftsmanship",
    "Timely delivery on every continent",
  ];
  return (
    <section className="bg-stone-light py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div>
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl text-ink md:text-6xl text-balance">
            Quietly, the world&apos;s finest spaces are wearing our stone.
          </h2>
        </div>
        <ul className="space-y-6">
          {items.map((t, i) => (
            <li key={t} className="flex items-start gap-6 border-b border-ink/10 pb-6">
              <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="pt-2 text-lg text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <Eyebrow><span className="mx-auto">Collections</span></Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
            Granite &amp; Marble.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <CollectionCard
            to="/products/granites"
            title="Granites"
            sub="10 signature varieties"
            img={granites[7].slab}
            tag="Eternal · Architectural"
          />
          <CollectionCard
            to="/products/marbles"
            title="Marbles"
            sub="Statuario, Carrara &amp; exotics"
            img={marble}
            tag="Soft · Sculptural"
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
          {granites.slice(0, 10).map((g) => (
            <Link
              key={g.slug}
              to="/products/granites/$slug"
              params={{ slug: g.slug }}
              className="group relative aspect-square overflow-hidden"
            >
              <img src={g.slab} alt={g.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-serif text-sm text-background">{g.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/customization"
            className="inline-flex h-12 items-center gap-2 bg-ink px-8 text-sm tracking-wide text-background transition hover:bg-gold hover:text-ink"
          >
            Customize finish &amp; size <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ to, title, sub, img, tag }: { to: string; title: string; sub: string; img: string; tag: string }) {
  return (
    <Link to={to} className="group relative block aspect-[4/5] overflow-hidden">
      <img src={img} alt={title} loading="lazy" width={1600} height={2000} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{tag}</div>
        <h3 className="mt-4 font-serif text-5xl text-background md:text-6xl">{title}</h3>
        <p className="mt-2 text-background/70">{sub}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-background">
          <span className="h-px w-8 bg-background transition group-hover:w-16" />
          Explore collection
        </div>
      </div>
    </Link>
  );
}

function Testimonials() {
  const t = [
    { n: "Aisha Mehra", r: "Principal Architect, Studio Aalto", q: "RKGB delivered to a tolerance and timeline that frankly redefined what we expected from a stone partner.", s: 5 },
    { n: "Marc Lefèvre", r: "Director, Lefèvre Interiors Paris", q: "Their gold granite is the most singular slab in our material library — clients ask for it by name.", s: 5 },
    { n: "Sarah Whitfield", r: "Procurement Head, Halcyon Hotels", q: "Three towers, zero substitutions. Consistency at this scale is rare.", s: 5 },
  ];
  return (
    <section className="bg-beige py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
          The world&apos;s most demanding clients, in their own words.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.map((it) => (
            <figure key={it.n} className="hover-lift glass p-8">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 font-serif text-xl leading-snug text-ink">
                &ldquo;{it.q}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: it.s }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-4">
                <div className="font-serif text-lg text-ink">{it.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return <QuoteCTA />;
}
