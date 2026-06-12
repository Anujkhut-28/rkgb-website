import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import polished from "@/assets/surface finish/polished.png";
import flamed from "@/assets/surface finish/flamed.png";
import leathered from "@/assets/surface finish/leathered.png";
import lapatro from "@/assets/surface finish/lapatro.png";

export const Route = createFileRoute("/customization")({
  head: () => ({
    meta: [
      { title: "Granite Customization - Finishes & Sizes | RKGB" },
      {
        name: "description",
        content:
          "Visualize RKGB granite customization options with polished, flamed, leathered and lapatro finishes across standard slab sizes.",
      },
      { property: "og:title", content: "Granite Customization | RKGB" },
      { property: "og:description", content: "Choose surface finishes and slab sizes for your granite project." },
    ],
  }),
  component: CustomizationPage,
});

const finishes = [
  {
    name: "Polished",
    image: polished,
    description: "High-gloss reflective surface that deepens colour and brings out mineral clarity.",
  },
  {
    name: "Flamed",
    image: flamed,
    description: "Textured, heat-treated surface with strong grip for outdoor and high-traffic areas.",
  },
  {
    name: "Leathered",
    image: leathered,
    description: "Soft tactile texture with a low-sheen finish that feels premium and natural.",
  },
  {
    name: "Lapatro",
    image: lapatro,
    description: "Semi-polished finish with gentle sheen, balanced texture and refined stone movement.",
  },
];

const sizes = [
  { label: "260 x 160", width: 260, height: 160 },
  { label: "240 x 70", width: 240, height: 70 },
  { label: "180 x 65", width: 180, height: 65 },
  { label: "60 x 60", width: 60, height: 60 },
  { label: "30 x 60", width: 30, height: 60 },
  { label: "30 x 30", width: 30, height: 30 },
];

function CustomizationPage() {
  const [activeFinishIndex, setActiveFinishIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const activeFinish = finishes[activeFinishIndex];
  const activeSize = sizes[activeSizeIndex];
  const previewWidth = activeSize.width <= 60 ? activeSize.width * 4 : activeSize.width * 1.25;
  const showSizeBadge = activeSize.width >= 60 && activeSize.height >= 60;

  return (
    <div className="overflow-x-hidden bg-background">
      <section className="pt-32 pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <Eyebrow>Customization</Eyebrow>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-8">
              <h1 className="max-w-4xl font-serif leading-[1.02] text-ink text-balance">
                Visualize granite finishes and slab sizes.
              </h1>
            </div>
            <p className="max-w-xl text-muted-foreground lg:col-span-4">
              Select a surface finish and standard size to preview how the slab proportion feels before choosing material.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-12">
          <div className="mt-5 min-w-0 border border-ink/10 bg-beige/40 p-4 sm:p-5 md:mt-7 md:p-7 lg:mt-8">
            <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-4">
              {finishes.map((finish, index) => (
                <button
                  key={finish.name}
                  onClick={() => setActiveFinishIndex(index)}
                  className={`min-w-0 flex-1 basis-[calc(50%-0.25rem)] border px-3 py-2 text-xs uppercase tracking-widest transition sm:flex-none sm:basis-auto sm:px-4 ${
                    activeFinishIndex === index
                      ? "border-gold bg-gold text-ink"
                      : "border-ink/15 text-muted-foreground hover:border-gold hover:text-ink"
                  }`}
                >
                  {finish.name}
                </button>
              ))}
            </div>

            <div className="mx-auto mt-6 w-full max-w-[92%] overflow-hidden">
              <div key={activeFinish.name} className="variant-image-fade aspect-[16/10]">
                <img
                  src={activeFinish.image}
                  alt={`${activeFinish.name} surface finish`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Selected Finish</div>
              <h2 className="mt-3 font-serif text-ink">{activeFinish.name}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                {activeFinish.description}
              </p>
            </div>
          </div>

          <div className="mt-5 min-w-0 border border-ink/10 bg-background p-4 shadow-soft sm:p-5 md:mt-7 md:p-7 lg:mt-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Slab Size</div>
            <h2 className="mt-3 font-serif text-ink">{activeSize.label}</h2>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {sizes.map((size, index) => (
                <button
                  key={size.label}
                  onClick={() => setActiveSizeIndex(index)}
                  className={`min-w-0 border px-2 py-3 text-sm transition sm:px-3 ${
                    activeSizeIndex === index
                      ? "border-ink bg-ink text-background"
                      : "border-ink/15 text-muted-foreground hover:border-gold hover:text-ink"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid min-h-[260px] w-full place-items-center overflow-hidden bg-beige/35 p-3 sm:min-h-[330px] sm:p-6">
              <div
                key={`${activeFinish.name}-${activeSize.label}`}
                className="variant-image-fade relative mx-auto grid max-h-[280px] max-w-full place-items-center overflow-hidden border border-ink/20 shadow-luxury"
                style={{
                  width: `min(${previewWidth}px, 100%)`,
                  aspectRatio: `${activeSize.width} / ${activeSize.height}`,
                }}
              >
                <img
                  src={activeFinish.image}
                  alt={`${activeFinish.name} slab preview ${activeSize.label}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-ink/20" />
                {showSizeBadge ? (
                  <div className="relative rounded-full bg-background/90 px-4 py-2 text-xs uppercase tracking-widest text-ink shadow-soft">
                    {activeSize.label}
                  </div>
                ) : null}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The preview scales slab and tile formats for easier viewing while keeping each selected shape proportional.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 bg-ink px-6 text-sm tracking-wide text-background transition hover:bg-gold hover:text-ink sm:w-auto"
            >
              Discuss customization <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
