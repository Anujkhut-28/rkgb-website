import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import factory from "@/assets/factory.jpg";
import infraOne from "@/assets/Infra structure/is1.jpg";
import infraTwo from "@/assets/Infra structure/is2.jpg";
import infraThree from "@/assets/Infra structure/is3.jpg";
import infraFour from "@/assets/Infra structure/is4.jpg";
import infraFive from "@/assets/Infra structure/is5.jpg";
import infraSix from "@/assets/Infra structure/is6.jpg";
import amit from "@/assets/Peoples/Amit.jpeg";
import sunil from "@/assets/Peoples/Sunil.jpeg";
import rakesh from "@/assets/Peoples/Rakesh.jpeg";
import { Award, ShieldCheck, Truck, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RKGB — Manufacturing Heritage in Natural Stone" },
      { name: "description", content: "Two decades of craftsmanship — RKGB's quarries, factories, certifications, and the people behind the world's most polished slabs." },
      { property: "og:title", content: "About RKGB" },
      { property: "og:description", content: "Two decades of craftsmanship in natural stone." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const people = [
    { n: "Sunil Chordia", img: sunil },
    { n: "Rakesh Khut", img: rakesh },
    { n: "Amit Shukla", img: amit },
  ];

  const infrastructure = [
    { src: infraThree, alt: "Stone processing line", className: "row-span-2" },
    { src: infraOne, alt: "Factory machinery", className: "" },
    { src: infraFive, alt: "Granite slab handling", className: "col-span-2" },
    { src: infraTwo, alt: "Infrastructure detail", className: "" },
    { src: infraSix, alt: "Production facility", className: "" },
    { src: infraFour, alt: "Stone finishing area", className: "col-span-2 md:col-span-1" },
  ];

  return (
    <div className="bg-background">
      {/* Hero — editorial split */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-6 max-w-5xl font-serif text-4xl text-ink md:text-5xl lg:text-6xl text-balance">
            From a single quarry to the world&apos;s most ambitious facades.
          </h1>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <img src={factory} alt="Manufacturing facility" loading="lazy" width={1600} height={1024} className="aspect-[16/10] w-full object-cover shadow-luxury" />
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 10 years of expertise in the natural stone industry, Radha Krishna Granite & Buildcon has earned a strong reputation in premium granite quarrying and global supply. Backed by our own quarry in Udaipur, Rajasthan — a renowned hub for high-quality Indian stone — we maintain complete control over quality, color consistency, and durability from extraction to delivery. We proudly export to the Middle East, serving luxury villas, high-rise cladding, and major infrastructure projects with durable, heat-resistant, and high-gloss granite solutions. From raw granite blocks to custom-cut slabs, our precision craftsmanship, strict quality standards, and reliable logistics ensure every project reflects timeless elegance and lasting strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-beige py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Twenty-five years in stone.</h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { y: "1998", t: "Founded", d: "First quarry leased in Rajasthan." },
              { y: "2006", t: "Export Begins", d: "First container ships to the Gulf." },
              { y: "2014", t: "Mega Factory", d: "Integrated 500,000 sq.ft. processing plant." },
              { y: "2024", t: "Global Studio", d: "Design partnerships across four continents." },
            ].map((s, i) => (
              <li key={s.y} className="relative">
                <div className="font-serif text-5xl text-gold">{s.y}</div>
                <div className="luxury-divider my-4" />
                <div className="font-serif text-xl text-ink">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {i < 3 && <span className="absolute right-0 top-6 hidden text-3xl text-border lg:block">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow>Manufacturing</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
                Five stages, one obsession.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Every block follows a disciplined path from quarry face to crated export — with
                inspection gates at every transition.
              </p>
            </div>
            <ol className="space-y-8">
              {[
                ["Quarrying", "Block selection by senior geologists, with mineralogy tested on site."],
                ["Sawing", "Multi-wire gangsaws cut to architectural tolerance — ±1.5 mm."],
                ["Resining & Healing", "Surface stabilisation that protects structural integrity."],
                ["Polishing", "Sixteen-head lines that bring out the stone's optical depth."],
                ["Inspection & Packing", "Three-stage QC, edge-protected wooden crates, ocean-grade export."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-b border-border pb-8">
                  <span className="font-serif text-3xl text-gold w-12 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Standards</p>
              <h2 className="mt-6 max-w-xl font-serif text-4xl md:text-5xl">
                Certified at every level of the supply chain.
              </h2>
            </div>
            <p className="max-w-sm text-background/60">
              We hold and exceed the industry&apos;s most stringent quality, safety, and
              environmental certifications.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: ShieldCheck, t: "ISO 9001:2015", d: "Quality management" },
              { i: Award, t: "CE Marked", d: "European compliance" },
              { i: Building2, t: "BIS Certified", d: "Indian standards" },
              { i: Truck, t: "Export House", d: "Govt. of India" },
            ].map((c) => (
              <div key={c.t} className="border border-background/15 p-8 transition hover:border-gold">
                <c.i className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <div className="mt-6 font-serif text-xl">{c.t}</div>
                <div className="text-xs uppercase tracking-widest text-background/50">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>People</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
            Craft is people. We invest in both.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {people.map((p) => (
              <div key={p.n} className="hover-lift bg-beige p-8 text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-soft">
                  <img
                    src={p.img}
                    alt={p.n}
                    loading="lazy"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <div className="font-serif text-xl text-ink">{p.n}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Infrastructure</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Inside the works.</h2>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
            {infrastructure.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1600}
                height={1024}
                className={`h-full w-full object-cover ${image.className}`}
              />
            ))}
            <div className="hidden bg-ink text-background p-8 md:flex flex-col justify-end">
              <Users className="h-6 w-6 text-gold" strokeWidth={1.2} />
              <div className="mt-4 font-serif text-2xl">600+</div>
              <div className="text-xs uppercase tracking-widest text-background/60">Craftspeople</div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
