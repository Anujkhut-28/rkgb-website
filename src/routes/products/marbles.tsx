import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import greenMarble from "@/assets/green-marble.png";
import fantasyBrown from "@/assets/Fantasy-Brown-Marble.png";
import snowWhite from "@/assets/snow-white-marble.png";
import spiderGreen from "@/assets/spider-green-marble.png";
import fantasyWhite from "@/assets/fantasy-white-marble.png";
import paradiseBlue from "@/assets/paradise-blue-marble.png";
import lightningBlack from "@/assets/lightning-black-marble.png";
import brunoWhite from "@/assets/bruno-white-marble.png";

export const Route = createFileRoute("/products/marbles")({
  head: () => ({
    meta: [
      { title: "Marble Collection - 8 Signature Varieties | RKGB" },
      { name: "description", content: "Explore RKGB marble varieties: Green, Fantasy Brown, Snow White, Spider Green, Fantasy White, Paradise Blue, Lightning Black and Bruno White." },
      { property: "og:title", content: "Marble Collection | RKGB" },
      { property: "og:description", content: "Eight signature marble varieties for premium interiors." },
    ],
  }),
  component: MarblesPage,
});

const marbles = [
  {
    name: "Green Marble",
    image: greenMarble,
    tone: "Deep green with natural mineral movement",
    description:
      "Green Marble brings a rich natural colour into interiors, making counters, walls, floors and table surfaces feel calm and premium. Its mineral movement gives every slab a crafted character while the deep green tone pairs beautifully with brass, cream walls, wood, cane and soft lighting. This marble is ideal for reception counters, bathroom vanities, feature walls and interiors where the stone should become a refined focal point.",
  },
  {
    name: "Fantasy Brown Marble",
    image: fantasyBrown,
    tone: "Brown, cream and grey flowing waves",
    description:
      "Fantasy Brown Marble has soft flowing bands of brown, cream, grey and white that create a warm natural surface. It works especially well on kitchen counters, tabletops, bathroom panels and large wall features because the movement feels elegant without becoming too loud. The stone pairs well with beige interiors, walnut, bronze fittings, white cabinetry and warm lighting.",
  },
  {
    name: "Snow White Marble",
    image: snowWhite,
    tone: "Clean white with gentle natural texture",
    description:
      "Snow White Marble gives spaces a bright, clean and timeless appearance. Its light surface is useful for bathrooms, flooring, counters, wall cladding and hospitality interiors where openness and purity matter. The marble pairs easily with chrome, brass, pale wood, black accents and minimal interiors, giving designers a calm base that still feels naturally luxurious.",
  },
  {
    name: "Spider Green Marble",
    image: spiderGreen,
    tone: "Green base with web-like veining",
    description:
      "Spider Green Marble is known for its lively green background and web-like mineral veins. The stone has a strong decorative personality, making it a good choice for feature walls, vanity tops, tabletops, counters and boutique interiors. Its organic pattern works well with plants, brass, warm wood, cream stone and textured finishes.",
  },
  {
    name: "Fantasy White Marble",
    image: fantasyWhite,
    tone: "Soft white with elegant grey movement",
    description:
      "Fantasy White Marble offers a bright white base with graceful grey movement, giving interiors a polished and sophisticated look. It is suitable for countertops, wall panels, floors, vanities and stair details where a light stone with visible pattern is desired. The surface coordinates beautifully with white cabinetry, black hardware, oak, brass and soft neutral palettes.",
  },
  {
    name: "Paradise Blue Marble",
    image: paradiseBlue,
    tone: "Blue-grey mineral depth with dramatic motion",
    description:
      "Paradise Blue Marble brings rare blue-grey colour and expressive natural movement to luxury interiors. It is best used where the stone can be appreciated as a statement surface, such as feature walls, reception desks, counters, powder rooms and custom furniture. The colour pairs well with chrome, dark wood, white walls, black accents and carefully focused lighting.",
  },
  {
    name: "Lightning Black Marble",
    image: lightningBlack,
    tone: "Black base with sharp white lightning veins",
    description:
      "Lightning Black Marble has a bold black base cut by striking white veins, creating a dramatic architectural surface. It works beautifully for feature walls, fireplaces, counters, tabletops and high-end bathrooms where contrast is the main design move. Pair it with matte black, brushed brass, white plaster, dark wood and simple surrounding finishes for the strongest effect.",
  },
  {
    name: "Bruno White Marble",
    image: brunoWhite,
    tone: "White surface with warm brown-grey movement",
    description:
      "Bruno White Marble combines a light base with warm brown and grey movement, creating a surface that feels refined, warm and versatile. It is a strong fit for counters, bathroom vanities, wall cladding, flooring and decorative panels. The marble pairs well with walnut, bronze, cream interiors, soft white walls and warm lighting.",
  },
];

function MarblesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = marbles[activeIndex];

  return (
    <div>
      <section className="relative overflow-hidden bg-background pt-28 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>The Marble Collection</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="font-serif leading-[1.05] text-ink text-balance">
                Eight marble varieties, selected for expressive interiors.
              </h1>
            </div>
            <p className="max-w-xl text-muted-foreground lg:col-span-4 lg:col-start-9">
              Switch between each marble to view its surface, tone and recommended design use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto border-y border-ink/10 py-3">
            {marbles.map((marble, index) => (
              <button
                key={marble.name}
                onClick={() => setActiveIndex(index)}
                  className={`shrink-0 border px-3 py-2 text-[11px] uppercase tracking-widest transition ${
                  activeIndex === index
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/15 text-muted-foreground hover:border-gold hover:text-ink"
                }`}
              >
                {marble.name.replace(" Marble", "")}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[54%_1fr] lg:items-stretch">
            <div className="overflow-hidden rounded-sm">
              <div key={active.name} className="variant-image-fade aspect-[4/3] h-full max-h-[68vh]">
                <img
                  src={active.image}
                  alt={`${active.name} slab`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex min-h-full flex-col justify-between border border-ink/10 bg-beige/40 p-5 md:p-7">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Selected Marble</div>
                <h2 className="mt-3 font-serif text-ink">{active.name}</h2>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{active.tone}</p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
