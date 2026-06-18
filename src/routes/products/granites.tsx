import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { granites } from "@/data/granites";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products/granites")({
  head: () => ({
    meta: [
      { title: "Granite Collection 10 Signature Varieties | RKGB" },
      { name: "description", content: "Ten signature granite varieties Black, White, Red, Blue, Green, Grey, Brown, Gold, Pink and Yellow. Quarried and finished by RKGB." },
      { property: "og:title", content: "Granite Collection | RKGB" },
      { property: "og:description", content: "Ten signature granites, hand-graded for export." },
    ],
  }),
  component: GranitesCatalog,
});

function GranitesCatalog() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname.startsWith("/products/granites/")) {
    return <Outlet />;
  }

  const hero = granites[0];
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige/50 via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <Eyebrow>Collection 01 Granites</Eyebrow>
          <div className="mt-8 grid gap-12 md:grid-cols-12">
            <h1 className="md:col-span-7 font-serif text-5xl text-ink md:text-7xl text-balance leading-[0.95]">
              Ten signature granites,<br/>graded for the world.
            </h1>
            <div className="md:col-span-4 md:col-start-9 self-end">
              <p className="text-muted-foreground">From the gabbroic shields of Udaipur every block in this collection is matched, finished, and inspected slab-by-slab.</p>
              <div className="mt-6 flex gap-6 text-sm">
                <div><div className="font-serif text-3xl text-gold">10</div><div className="text-xs uppercase tracking-widest text-muted-foreground">Varieties</div></div>
                <div><div className="font-serif text-3xl text-gold">12%</div><div className="text-xs uppercase tracking-widest text-muted-foreground">Top grade</div></div>
                <div><div className="font-serif text-3xl text-gold">10+</div><div className="text-xs uppercase tracking-widest text-muted-foreground">Countries</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={hero.project} alt="Featured granite project" loading="lazy" width={1920} height={820} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full max-w-md flex-col justify-end p-10 text-background">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Featured project</div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">An island of obsidian quiet.</h3>
              <p className="mt-3 text-sm text-background/70">Black Granite, mirror polished, bookmatched for a private residence in Geneva.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>The Index</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Browse the collection.</h2>
            </div>
            <div className="hidden text-sm text-muted-foreground md:block">Scroll 10 stones</div>
          </div>

          <div className="mt-10 space-y-5 border-t border-ink/10 md:mt-16 md:space-y-px">
            {granites.map((g, i) => (
              <Link
                key={g.slug}
                to="/products/granites/$slug"
                params={{ slug: g.slug }}
                className="group block border-b border-ink/10 py-5 transition hover:bg-beige/50 md:grid md:grid-cols-12 md:items-center md:gap-6 md:py-6"
              >
                <div className="mb-3 font-serif text-xl text-muted-foreground md:col-span-1 md:mb-0">{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-3">
                  <div className="aspect-[16/11] overflow-hidden md:aspect-[4/3]">
                    <img src={g.slab} alt={g.name} loading="lazy" width={640} height={480} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                </div>
                <div className="mt-4 md:col-span-4 md:mt-0">
                  <div className="font-serif text-3xl text-ink md:text-3xl">{g.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-gold">{g.tagline}</div>
                </div>
                <div className="mt-4 flex justify-end md:col-span-1 md:mt-0">
                  <ArrowUpRight className="h-5 w-5 text-ink transition group-hover:rotate-45 group-hover:text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
