import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { granites } from "@/data/granites";
import marble from "@/assets/green-marble.png";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products Granite & Marble Collections | RKGB" },
      { name: "description", content: "Explore RKGB's collections of premium granite and marble." },
      { property: "og:title", content: "Products | RKGB" },
      { property: "og:description", content: "Premium granite and marble collections." },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Products</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl text-ink md:text-7xl text-balance">Two collections. One standard.</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">Every slab in our catalogue is hand-selected, polished, and inspected to the same uncompromising standard.</p>
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-5 lg:px-12">
          <Link to="/products/granites" className="group relative col-span-5 aspect-[16/9] overflow-hidden md:col-span-3 md:aspect-auto md:row-span-2">
            <img src={granites[7].slab} alt="Granite" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Collection 01</div>
              <h2 className="mt-4 font-serif text-6xl text-background md:text-8xl">Granites</h2>
              <p className="mt-4 max-w-md text-background/70">Ten signature varieties from absolute black to warm yellow classics.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-background">Explore <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" /></span>
            </div>
          </Link>
          <Link to="/products/marbles" className="group relative col-span-5 aspect-[4/3] overflow-hidden md:col-span-2">
            <img src={marble} alt="Marble" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Collection 02</div>
              <h2 className="mt-3 font-serif text-4xl text-background">Marbles</h2>
            </div>
          </Link>
          <div className="col-span-5 grid grid-cols-2 gap-6 md:col-span-2">
            <div className="bg-ink p-8 text-background"><div className="font-serif text-4xl text-gold">60+</div><div className="mt-1 text-xs uppercase tracking-widest text-background/60">Stone varieties</div></div>
            <div className="bg-ink p-8 text-background"><div className="font-serif text-4xl text-gold">10+</div><div className="mt-1 text-xs uppercase tracking-widest text-background/60">Export countries</div></div>
          </div>
        </div>
      </section>
      <section className="bg-beige py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Granite Varieties</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">The full palette.</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {granites.map((g) => (
              <Link key={g.slug} to="/products/granites/$slug" params={{ slug: g.slug }} className="group block">
                <div className="relative aspect-square overflow-hidden">
                  <img src={g.slab} alt={g.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-3 font-serif text-lg text-ink">{g.name}</div>
                <div className="text-xs text-muted-foreground">{g.tagline}</div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/customization"
              className="inline-flex h-12 items-center gap-2 bg-ink px-8 text-sm tracking-wide text-background transition hover:bg-gold hover:text-ink"
            >
              Customize finish &amp; size <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
