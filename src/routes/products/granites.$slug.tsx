import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { granitesBySlug, granites, type Granite } from "@/data/granites";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import absoluteBlack from "@/assets/Absolute-Black-Granite.png";
import blackGalaxy from "@/assets/Black-Galaxy-Granite.png";
import ashBlack from "@/assets/Ash-Black-Granite.png";
import blackForest from "@/assets/Black-Forest-Granite.png";
import coralBlack from "@/assets/Cloral-Black-Granite.png";
import titaniumBlack from "@/assets/Titanium-Black-Granite.jpg";
import riverBlack from "@/assets/River-Black-Granite.png";
import blackPearl from "@/assets/Black-Pearl-Granite.jpg";
import crystalBlue from "@/assets/crystal blue granite.jpg";
import lavenderBlue from "@/assets/lavender blue granite.jpg";
import sapphireBlue from "@/assets/sapphire blue granite.jpg";
import vizagBlue from "@/assets/vizag blue granite.jpg";
import tanBrown from "@/assets/Tan-Brown-Granite.jpg";
import coffeeBrown from "@/assets/Coffee-Brown-Granite.jpg";
import rainforestBrown from "@/assets/Rainforest-brown-Granite.jpg";
import desertBrown from "@/assets/Desert-Brown-Granite.jpg";
import magmaGold from "@/assets/Magma-Gold-Granite.jpg";
import newKashmirGold from "@/assets/New-kashmir-gold-Granite.png";
import newImperialGold from "@/assets/New-Imperial-Gold-Granite.png";
import shivakashiGold from "@/assets/Shivakashi-gold-Granite.png";
import arizonaGold from "@/assets/Arizona-Gold-Granite.jpg";
import colonialGold from "@/assets/Colonial-Gold-Granite.png";
import goldenStorm from "@/assets/Golden-Strom-Granite.jpg";
import jupranaGold from "@/assets/Juprana-Gold-Granite.png";
import alaskaGold from "@/assets/Alaska-Gold-Granite.jpg";
import hassanGreen from "@/assets/Hassan-Green-Granite.jpg";
import kupamGreen from "@/assets/Kupam-Green-Granite.png";
import seaweedGreen from "@/assets/Seawed-Green-Granite.jpg";
import rainforestGreen from "@/assets/Rainforest-Green-Granite.png";
import nGrey from "@/assets/N-Grey-Granite.jpg";
import steelGrey from "@/assets/Steel-Grey-Granite.jpg";
import astoriaPink from "@/assets/Astoria-Pink-Granite.jpg";
import chimaPink from "@/assets/Chima-Pink-Granite.jpg";
import pinkPanther from "@/assets/Pink-Panther-Granite.png";
import rosyPink from "@/assets/Rosy-Pink-Granite.jpg";
import tigerSkinPink from "@/assets/Tiger-Skin-Pink-Granite.jpg";
import newImperialRed from "@/assets/New-Imp-Red-Granite.png";
import jhansiRed from "@/assets/Jhansi-Red-Granite.png";
import lakhaRed from "@/assets/Lakha-Red-Granite.jpg";
import redMulticolored from "@/assets/Red-Multi-Color-Granite.png";
import brunoRed from "@/assets/Bruno-Red-Granite.png";
import rubyRed from "@/assets/Ruby-Red-Granite.png";
import colonialWhite from "@/assets/colonial-White-Granite.png";
import alaskaWhite from "@/assets/Alaska-White-Granite.jpg";
import forestWhite from "@/assets/Forest-White-Granite.png";
import pWhiteGranite from "@/assets/P-White-Granite.jpg";
import riverWhite from "@/assets/River-White-Granite.png";
import visconWhite from "@/assets/Viscon-White-Granite.png";
import newKashmirWhite from "@/assets/New-Kashmir-white-Granite.png";
import crystalYellow from "@/assets/Crystal-yellow-Granite.jpg";

const projectImageModules = import.meta.glob("/src/assets/Projects/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const variantImages: Record<string, string> = {
  "Absolute Black Granite": absoluteBlack,
  "Black Galaxy Granite": blackGalaxy,
  "Ash Black Granite": ashBlack,
  "Black Forest Granite": blackForest,
  "Coral Black Granite": coralBlack,
  "Titanium Black Granite": titaniumBlack,
  "River Black Granite": riverBlack,
  "Black Pearl Granite": blackPearl,
  "Crystal Blue Granite": crystalBlue,
  "Lavender Blue Granite": lavenderBlue,
  "Sapphire Blue Granite": sapphireBlue,
  "Vizag Blue Granite": vizagBlue,
  "Tan Brown Granite": tanBrown,
  "Coffee Brown Granite": coffeeBrown,
  "Rainforest Brown Granite": rainforestBrown,
  "Desert Brown Granite": desertBrown,
  "Magma Gold Granite": magmaGold,
  "New Kashmir Gold Granite": newKashmirGold,
  "New Imperial Gold Granite": newImperialGold,
  "Shivakashi Gold Granite": shivakashiGold,
  "Arizona Gold Granite": arizonaGold,
  "Colonial Gold Granite": colonialGold,
  "Golden Storm Granite": goldenStorm,
  "Juprana Gold Granite": jupranaGold,
  "Alaska Gold Granite": alaskaGold,
  "Hassan Green Granite": hassanGreen,
  "Kupam Green Granite": kupamGreen,
  "Seaweed Green Granite": seaweedGreen,
  "Rainforest Green Granite": rainforestGreen,
  "N Grey Granite": nGrey,
  "Steel Grey Granite": steelGrey,
  "Astoria Pink Granite": astoriaPink,
  "Chima Pink Granite": chimaPink,
  "Pink Panther Granite": pinkPanther,
  "Rosy Pink Granite": rosyPink,
  "Tiger Skin Pink Granite": tigerSkinPink,
  "New Imperial Red Granite": newImperialRed,
  "Jhansi Red Granite": jhansiRed,
  "Lakha Red Granite": lakhaRed,
  "Red Multicolored Granite": redMulticolored,
  "Bruno Red Granite": brunoRed,
  "Ruby Red Granite": rubyRed,
  "Colonial White Granite": colonialWhite,
  "Alaska White Granite": alaskaWhite,
  "Forest White Granite": forestWhite,
  "P White Granite": pWhiteGranite,
  "River White Granite": riverWhite,
  "Viscon White Granite": visconWhite,
  "New Kashmir White Granite": newKashmirWhite,
  "Crystal Yellow Granite": crystalYellow,
};

const variantProjectFiles: Record<string, string> = {
  "Absolute Black Granite": "absolute black-project.png",
  "Black Galaxy Granite": "black galaxy-project.png",
  "Ash Black Granite": "ash black-project.png",
  "Black Forest Granite": "black forest-project.png",
  "Coral Black Granite": "coral black-project.png",
  "Titanium Black Granite": "titanium black - project.png",
  "River Black Granite": "river black - project.png",
  "Black Pearl Granite": "pearl black-project.png",
  "Crystal Blue Granite": "crystal blue-project.png",
  "Lavender Blue Granite": "lavender blue-project.png",
  "Sapphire Blue Granite": "sapphire blue-project.png",
  "Vizag Blue Granite": "vizaj blue-project.png",
  "Tan Brown Granite": "fantasy brown-project.png",
  "Coffee Brown Granite": "coffee brown-project.png",
  "Rainforest Brown Granite": "rainforest brown -project.png",
  "Desert Brown Granite": "desert brown-project.png",
  "Magma Gold Granite": "magma gold-project.jpeg",
  "New Kashmir Gold Granite": "new kashmir gold-project.jpeg",
  "New Imperial Gold Granite": "new imperial gold-project.png",
  "Shivakashi Gold Granite": "shivkashi gold-project.png",
  "Arizona Gold Granite": "arizona gold-project.png",
  "Colonial Gold Granite": "colonial gold-project.png",
  "Golden Storm Granite": "golden storm-project.png",
  "Juprana Gold Granite": "juprana gold-project.png",
  "Alaska Gold Granite": "alaska gold-project.png",
  "Hassan Green Granite": "hassan green-project.jpeg",
  "Kupam Green Granite": "kupam green-project.jpeg",
  "Seaweed Green Granite": "seawed green-project.jpeg",
  "Rainforest Green Granite": "rainforest green-project.jpeg",
  "N Grey Granite": "n grey-project.jpeg",
  "Steel Grey Granite": "steel grey-project.jpeg",
  "Astoria Pink Granite": "astoria pink-project.jpeg",
  "Chima Pink Granite": "chima pink-project.jpeg",
  "Pink Panther Granite": "pink panther-project.jpeg",
  "Rosy Pink Granite": "rosy pink-project.jpeg",
  "Tiger Skin Pink Granite": "tiger skin pink-project.jpeg",
  "New Imperial Red Granite": "new imp red-project.png",
  "Jhansi Red Granite": "jhansi red-project.png",
  "Lakha Red Granite": "lakha red-project.png",
  "Red Multicolored Granite": "red multicolor-project.png",
  "Bruno Red Granite": "bruno red-project.png",
  "Ruby Red Granite": "ruby red-project.png",
  "Colonial White Granite": "colonial white-project.jpeg",
  "Alaska White Granite": "alaska white-project.jpeg",
  "Forest White Granite": "forest white-project.jpeg",
  "P White Granite": "p white-project.jpeg",
  "River White Granite": "river white-project.jpeg",
  "Viscon White Granite": "viscon white-project.jpeg",
  "New Kashmir White Granite": "new kashmir white-project.png",
  "Crystal Yellow Granite": "crystal yellow-project.jpeg",
};

const getVariantProjectImage = (variantName: string) => {
  const fileName = variantProjectFiles[variantName];
  return fileName ? projectImageModules[`/src/assets/Projects/${fileName}`] : undefined;
};

const blueGraniteTypes = [
  {
    name: "Crystal Blue Granite",
    description: [
      "Crystal Blue Granite has a bright mineral sparkle across a cool blue base.",
      "Its crystalline flecks catch light beautifully in polished finishes.",
      "The stone works well for counters, wall panels, vanities, and feature areas.",
      "It gives interiors a clean, refined look without feeling too dark.",
      "For projects needing shine and freshness, Crystal Blue is a strong choice.",
    ],
  },
  {
    name: "Lavender Blue Granite",
    description: [
      "Lavender Blue Granite blends soft blue tones with a gentle lavender cast.",
      "The surface feels calm, premium, and slightly warmer than deep blue stones.",
      "It is especially suitable for bedrooms, bathrooms, reception areas, and lounges.",
      "Its muted colour pairs well with brass, white walls, grey cabinetry, and pale wood.",
      "This variety is ideal when the project needs colour with quiet elegance.",
    ],
  },
  {
    name: "Sapphire Blue Granite",
    description: [
      "Sapphire Blue Granite carries a deeper jewel-like blue with striking movement.",
      "The rich tone creates a bold focal point in luxury interiors and commercial spaces.",
      "It performs beautifully as a bar top, staircase detail, feature wall, or island counter.",
      "Polishing enhances the depth and gives the stone a dramatic reflective quality.",
      "Choose Sapphire Blue when the design needs a confident, high-impact statement.",
    ],
  },
  {
    name: "Vizag Blue Granite",
    description: [
      "Vizag Blue Granite is known for its coastal blue-grey depth and durable structure.",
      "It is a practical stone for both interior surfaces and exterior architectural work.",
      "The pattern is balanced, making it easier to use across larger project areas.",
      "It suits flooring, cladding, steps, kitchen tops, and outdoor installations.",
      "Vizag Blue is a dependable option for projects that need beauty and strength together.",
    ],
  },
];

const blackGraniteTypes = [
  {
    name: "Absolute Black Granite",
    description: [
      "Absolute Black Granite is known for its deep, uniform black tone and clean architectural finish.",
      "Its plain surface makes it ideal for modern kitchens, monuments, flooring, and premium wall cladding.",
      "The stone creates strong contrast with light cabinetry, brass fittings, white walls, and timber details.",
      "Polished finishes look sharp and reflective, while honed finishes feel softer and more contemporary.",
      "It is a dependable choice when the project needs a bold, timeless, and low-maintenance black stone.",
    ],
  },
  {
    name: "Black Galaxy Granite",
    description: [
      "Black Galaxy Granite features a dark black base scattered with golden and copper mineral flecks.",
      "The surface has a starry appearance that brings richness and movement without heavy veining.",
      "It is widely used for kitchen countertops, vanity tops, bar counters, flooring, and statement panels.",
      "The golden specks pair beautifully with warm lighting, brass accents, cream walls, and dark wood.",
      "Choose Black Galaxy for projects that need a luxurious black stone with visible sparkle and depth.",
    ],
  },
  {
    name: "Ash Black Granite",
    description: [
      "Ash Black Granite carries a softer charcoal-black tone with subtle grey mineral texture.",
      "It gives a calm, refined look where pure black may feel too strong or formal.",
      "The stone works well in flooring, wall cladding, countertops, stairs, and exterior surfaces.",
      "Its balanced colour is easy to pair with concrete, steel, oak, white paint, and matte fixtures.",
      "Ash Black is a practical option for contemporary projects that need dark colour with restraint.",
    ],
  },
  {
    name: "Black Forest Granite",
    description: [
      "Black Forest Granite has dramatic white and grey veining across a rich black background.",
      "Its flowing pattern creates a natural feature-stone effect for interiors that need visual impact.",
      "It is excellent for bookmatched walls, kitchen islands, reception desks, fireplaces, and luxury bathrooms.",
      "The contrast of dark base and light veins gives every slab a distinctive, expressive character.",
      "Black Forest is best suited for designs where the granite should become the main focal point.",
    ],
  },
  {
    name: "Coral Black Granite",
    description: [
      "Coral Black Granite combines a dark base with lively mineral movement and warm undertones.",
      "The pattern feels natural and textured, giving surfaces more depth than a plain black stone.",
      "It performs well in countertops, flooring, wall panels, stairs, and selected outdoor applications.",
      "Its warmer character pairs nicely with beige, bronze, wood, cream stone, and soft lighting.",
      "Coral Black is a strong choice for projects that need black granite with a more organic feel.",
    ],
  },
  {
    name: "Titanium Black Granite",
    description: [
      "Titanium Black Granite is bold and energetic, with sweeping grey, white, and gold-toned movement.",
      "The stone brings a premium statement look to large surfaces and designer interiors.",
      "It is commonly used for waterfall islands, feature walls, tabletops, counters, and hospitality spaces.",
      "Its dramatic pattern works best when surrounding materials are simple and carefully balanced.",
      "Titanium Black is ideal when the design calls for a strong, high-end, and memorable surface.",
    ],
  },
  {
    name: "River Black Granite",
    description: [
      "River Black Granite has flowing mineral lines that move across the surface like soft currents.",
      "The stone gives a natural sense of motion while keeping a dark, elegant overall appearance.",
      "It suits wall cladding, counters, flooring, steps, lobby areas, and decorative stone features.",
      "Its pattern pairs well with neutral palettes, brushed metal, warm timber, and indirect lighting.",
      "River Black is a refined option for projects that need movement without looking too busy.",
    ],
  },
  {
    name: "Black Pearl Granite",
    description: [
      "Black Pearl Granite has a dark grey-black base with pearl-like mineral crystals across the surface.",
      "It offers more texture and shimmer than Absolute Black while remaining subtle and versatile.",
      "The stone is suitable for kitchens, floors, bathroom counters, exterior cladding, and commercial interiors.",
      "Its soft metallic flecks work well with stainless steel, chrome, grey cabinetry, and white walls.",
      "Black Pearl is a dependable everyday luxury stone with strength, depth, and easy coordination.",
    ],
  },
];

const brownGraniteTypes = [
  {
    name: "Tan Brown Granite",
    description: [
      "Tan Brown Granite has a deep brown-black base with warm tan and copper mineral clusters.",
      "The stone feels rich and grounded, making it a popular choice for kitchens, floors, and staircases.",
      "Its darker base hides daily wear well while the tan flecks add warmth and visual depth.",
      "It pairs beautifully with cream cabinetry, wooden furniture, brass details, and warm lighting.",
      "Tan Brown is ideal for projects that need a durable brown granite with classic luxury appeal.",
    ],
  },
  {
    name: "Coffee Brown Granite",
    description: [
      "Coffee Brown Granite carries a smooth espresso tone with subtle mineral texture across the surface.",
      "Its colour gives interiors a warm, premium, and comfortable feeling without becoming too ornate.",
      "The stone works well for countertops, vanity tops, flooring, tabletops, and wall cladding.",
      "It coordinates easily with beige, ivory, walnut, bronze, black metal, and soft neutral palettes.",
      "Coffee Brown is a dependable option when the design needs quiet warmth and everyday practicality.",
    ],
  },
  {
    name: "Rainforest Brown Granite",
    description: [
      "Rainforest Brown Granite is known for branching vein patterns that resemble natural forest lines.",
      "The surface has expressive movement, making every slab feel unique and highly decorative.",
      "It is best used for feature walls, tabletops, reception counters, bathroom panels, and statement flooring.",
      "The earthy brown background pairs well with plants, cream stone, wood, brass, and textured walls.",
      "Rainforest Brown is perfect when the project needs a natural, artistic, and organic stone character.",
    ],
  },
  {
    name: "Desert Brown Granite",
    description: [
      "Desert Brown Granite has warm sandy-brown tones with soft movement inspired by dry landscape colours.",
      "Its balanced shade makes spaces feel open, welcoming, and naturally elegant.",
      "The stone is suitable for flooring, cladding, countertops, exterior paving, stairs, and commercial projects.",
      "It pairs nicely with white walls, beige interiors, teak wood, bronze fittings, and warm lighting.",
      "Desert Brown is a strong choice for projects that need durability with a calm earthy palette.",
    ],
  },
];

const goldGraniteTypes = [
  {
    name: "Magma Gold Granite",
    description: [
      "Magma Gold Granite has energetic gold, black, and copper movement that feels bold and volcanic.",
      "Its dramatic pattern works beautifully for statement islands, feature walls, reception counters, and luxury interiors.",
      "The warm tones create a powerful focal point when paired with simple cabinetry and controlled lighting.",
      "Polished finishes enhance the depth and make the colours feel richer across large surfaces.",
      "Magma Gold is ideal for projects that need a premium golden granite with strong visual impact.",
    ],
  },
  {
    name: "New Kashmir Gold Granite",
    description: [
      "New Kashmir Gold Granite carries a soft golden-beige base with fine mineral speckling.",
      "The stone feels warm, elegant, and versatile, making it easy to use in homes and commercial spaces.",
      "It is suitable for countertops, flooring, vanity tops, wall cladding, stairs, and tabletops.",
      "Its calm tone pairs well with wood, cream walls, bronze fittings, and neutral interior palettes.",
      "New Kashmir Gold is a dependable choice when the design needs warmth without heavy patterning.",
    ],
  },
  {
    name: "New Imperial Gold Granite",
    description: [
      "New Imperial Gold Granite has rich golden tones with brown, grey, and cream mineral movement.",
      "It gives surfaces a regal and traditional character while still feeling strong and practical.",
      "The stone is widely used for flooring, countertops, staircases, cladding, and large interior areas.",
      "Its warm colour works especially well with classic decor, carved wood, brass, and cream stone.",
      "New Imperial Gold is ideal for projects that need a luxurious golden granite with broad usability.",
    ],
  },
  {
    name: "Shivakashi Gold Granite",
    description: [
      "Shivakashi Gold Granite has soft golden, pink, cream, and grey waves with a graceful natural flow.",
      "The stone brings a warm and decorative look without becoming too dark or heavy.",
      "It is excellent for floors, countertops, wall panels, staircases, vanity tops, and hotel interiors.",
      "Its flowing pattern pairs well with light wood, white walls, brushed brass, and soft fabrics.",
      "Shivakashi Gold is perfect for spaces that need gentle movement and a refined golden tone.",
    ],
  },
  {
    name: "Arizona Gold Granite",
    description: [
      "Arizona Gold Granite has desert-inspired gold, beige, and brown shades with natural mineral texture.",
      "It creates a warm and welcoming surface that works well in both residential and commercial projects.",
      "The stone is suitable for flooring, countertops, exterior cladding, stairs, and hospitality spaces.",
      "Its earthy palette pairs well with terracotta, timber, bronze, cream paint, and warm lighting.",
      "Arizona Gold is a strong choice for projects that need a sun-washed golden granite character.",
    ],
  },
  {
    name: "Colonial Gold Granite",
    description: [
      "Colonial Gold Granite features a creamy gold base with grey, brown, and burgundy mineral accents.",
      "The stone feels elegant and balanced, offering detail without overwhelming the design.",
      "It performs beautifully on kitchen counters, bathroom vanities, floors, walls, and tabletops.",
      "The colour palette pairs nicely with white cabinets, walnut, bronze hardware, and light stone backsplashes.",
      "Colonial Gold is a versatile luxury option for interiors that need warmth and sophistication.",
    ],
  },
  {
    name: "Golden Storm Granite",
    description: [
      "Golden Storm Granite has sweeping gold, brown, cream, and dark mineral movement across the slab.",
      "Its lively pattern creates a dramatic natural-stone effect for large decorative surfaces.",
      "The stone is ideal for feature walls, kitchen islands, bar counters, reception desks, and flooring.",
      "It looks best when paired with quieter surrounding materials that allow the pattern to stand out.",
      "Golden Storm is suited for projects that need movement, warmth, and a memorable luxury surface.",
    ],
  },
  {
    name: "Juprana Gold Granite",
    description: [
      "Juprana Gold Granite carries flowing bands of gold, peach, grey, and brown in a soft layered pattern.",
      "The stone has a graceful, traditional look that remains practical for everyday architectural use.",
      "It is commonly used for flooring, countertops, wall cladding, staircases, and decorative panels.",
      "Its warm layered tones pair well with classic woodwork, cream interiors, bronze, and natural textures.",
      "Juprana Gold is a reliable choice for projects that need an expressive but balanced golden granite.",
    ],
  },
  {
    name: "Alaska Gold Granite",
    description: [
      "Alaska Gold Granite has a bright golden-white base with bold grey, black, and amber mineral movement.",
      "The stone feels modern, lively, and luxurious, especially in polished large-format applications.",
      "It is excellent for kitchen islands, countertops, feature walls, vanity tops, and premium flooring.",
      "Its contrast works well with white cabinetry, black accents, brushed metal, and warm lighting.",
      "Alaska Gold is ideal when the project needs a fresh golden stone with a strong contemporary presence.",
    ],
  },
];

const greenGraniteTypes = [
  {
    name: "Hassan Green Granite",
    description: [
      "Hassan Green Granite has a rich green base with natural mineral texture and balanced movement.",
      "Its colour gives interiors and exteriors a calm, grounded, and premium stone character.",
      "The stone is suitable for flooring, countertops, wall cladding, stairs, and outdoor architectural work.",
      "It pairs well with cream stone, brass, wood, white walls, and warm neutral design palettes.",
      "Hassan Green is a strong choice for projects that need dependable green granite with elegant depth.",
    ],
  },
  {
    name: "Kupam Green Granite",
    description: [
      "Kupam Green Granite features soft green tones with grey and darker mineral speckling.",
      "The surface feels subtle and practical, making it easy to use across large project areas.",
      "It works well for floors, counters, cladding, steps, commercial spaces, and exterior applications.",
      "Its balanced colour coordinates with steel, concrete, pale wood, cream walls, and matte finishes.",
      "Kupam Green is ideal when the design needs green granite that feels calm, durable, and versatile.",
    ],
  },
  {
    name: "Seaweed Green Granite",
    description: [
      "Seaweed Green Granite has flowing green and dark mineral movement inspired by organic natural forms.",
      "Its pattern creates a decorative surface while still keeping a refined stone appearance.",
      "The granite is excellent for feature walls, vanity tops, counters, tabletops, and boutique interiors.",
      "It pairs beautifully with brass, cane, timber, soft white, cream stone, and indirect lighting.",
      "Seaweed Green is perfect for projects that need a natural green statement with graceful movement.",
    ],
  },
  {
    name: "Rainforest Green Granite",
    description: [
      "Rainforest Green Granite is known for branching vein patterns across a deep green background.",
      "The stone feels artistic and botanical, making every installation look distinctive and natural.",
      "It is best used for feature walls, reception counters, bathroom panels, tabletops, and statement flooring.",
      "Its forest-like pattern pairs well with plants, warm wood, brass, cream walls, and textured interiors.",
      "Rainforest Green is ideal for designs that need a bold organic surface with luxury appeal.",
    ],
  },
];

const greyGraniteTypes = [
  {
    name: "N Grey Granite",
    description: [
      "N Grey Granite has a clean neutral grey tone with fine mineral texture across the surface.",
      "Its balanced colour makes it highly practical for modern flooring, cladding, countertops, and stairs.",
      "The stone gives projects a calm architectural look without strong veining or visual heaviness.",
      "It pairs well with concrete, black metal, white walls, pale wood, and minimalist interiors.",
      "N Grey is a strong choice for projects that need durable grey granite with a neat contemporary finish.",
    ],
  },
  {
    name: "Steel Grey Granite",
    description: [
      "Steel Grey Granite has a deeper grey base with subtle silver and charcoal mineral movement.",
      "The surface feels strong, modern, and industrial while still keeping a premium natural-stone character.",
      "It is suitable for kitchen tops, flooring, exterior cladding, steps, commercial spaces, and public areas.",
      "Its darker tone pairs beautifully with stainless steel, black frames, oak, concrete, and cool lighting.",
      "Steel Grey is ideal when the design needs a tough, refined, and versatile grey granite.",
    ],
  },
];

const pinkGraniteTypes = [
  {
    name: "Astoria Pink Granite",
    description: [
      "Astoria Pink Granite has a soft pink-beige base with gentle grey and cream mineral movement.",
      "The stone feels warm, elegant, and easy to use across residential and commercial interiors.",
      "It is suitable for countertops, floors, vanity tops, wall cladding, stairs, and tabletops.",
      "Its refined colour pairs well with white cabinetry, rose gold, pale wood, brass, and cream walls.",
      "Astoria Pink is ideal when the project needs a graceful pink granite with subtle luxury.",
    ],
  },
  {
    name: "Chima Pink Granite",
    description: [
      "Chima Pink Granite carries a stronger pink tone with natural black and grey mineral speckling.",
      "Its balanced pattern gives surfaces warmth and personality without becoming too decorative.",
      "The stone works well for flooring, kitchen counters, staircases, exterior cladding, and public areas.",
      "It pairs nicely with white walls, dark metal, teak wood, cream stone, and warm lighting.",
      "Chima Pink is a practical choice for projects that need durable pink granite with visible character.",
    ],
  },
  {
    name: "Pink Panther Granite",
    description: [
      "Pink Panther Granite has lively pink tones with bold mineral texture and confident visual presence.",
      "The stone creates a memorable surface for feature areas, counters, vanity tops, and boutique interiors.",
      "Its playful colour works best when balanced with simple surrounding materials and clean detailing.",
      "It pairs well with white, black accents, brushed brass, pale timber, and soft neutral backgrounds.",
      "Pink Panther is perfect for projects that need a distinctive pink granite with personality.",
    ],
  },
  {
    name: "Rosy Pink Granite",
    description: [
      "Rosy Pink Granite has a warm blush-pink base with consistent mineral grains across the surface.",
      "The stone feels welcoming and classic, making it suitable for both interiors and exterior projects.",
      "It is commonly used for flooring, wall cladding, countertops, stairs, monuments, and landscape details.",
      "Its rosy tone pairs beautifully with cream, beige, wood, bronze, and garden-facing spaces.",
      "Rosy Pink is a dependable option when the design needs soft colour and long-lasting strength.",
    ],
  },
  {
    name: "Tiger Skin Pink Granite",
    description: [
      "Tiger Skin Pink Granite has expressive pink, grey, and dark mineral movement with a natural striped effect.",
      "The surface brings energy and texture to spaces that need a more decorative granite character.",
      "It works well for statement walls, counters, flooring accents, tabletops, and custom stone features.",
      "Its pattern pairs best with simple finishes that allow the stone movement to remain the highlight.",
      "Tiger Skin Pink is ideal for projects that need bold natural patterning in a warm pink palette.",
    ],
  },
];

const redGraniteTypes = [
  {
    name: "New Imperial Red Granite",
    description: [
      "New Imperial Red Granite has a rich red base with dark mineral crystals and strong architectural presence.",
      "The stone feels bold, classic, and durable, making it suitable for both interior and exterior projects.",
      "It is widely used for flooring, monuments, countertops, wall cladding, stairs, and public spaces.",
      "Its warm red tone pairs well with cream stone, dark wood, brass, black metal, and heritage interiors.",
      "New Imperial Red is ideal when the project needs a confident red granite with timeless appeal.",
    ],
  },
  {
    name: "Jhansi Red Granite",
    description: [
      "Jhansi Red Granite carries a deep red colour with fine dark speckling and a strong natural texture.",
      "It is known for its durability and is commonly used in high-traffic and exterior applications.",
      "The stone works well for paving, steps, flooring, monuments, cladding, and civic architectural work.",
      "Its saturated tone pairs nicely with sandstone, cream walls, bronze, timber, and traditional detailing.",
      "Jhansi Red is a practical choice for projects that need strength, colour, and long-term performance.",
    ],
  },
  {
    name: "Lakha Red Granite",
    description: [
      "Lakha Red Granite has a vibrant red tone with dark mineral grains and a lively surface character.",
      "The stone brings warmth and visibility to spaces where the granite should feel expressive.",
      "It is suitable for flooring, countertops, temples, monuments, stairs, wall panels, and outdoor work.",
      "Its bright red colour pairs well with white, cream, brass, black accents, and carved stone details.",
      "Lakha Red is ideal for projects that need a strong traditional red granite with bold colour.",
    ],
  },
  {
    name: "Red Multicolored Granite",
    description: [
      "Red Multicolored Granite blends red, brown, black, grey, and warm mineral tones in one surface.",
      "Its mixed pattern creates a natural decorative look with more movement than plain red varieties.",
      "The stone works well for floors, counters, cladding, staircases, tabletops, and commercial interiors.",
      "It pairs best with neutral surrounding materials that allow the colour variation to stand out.",
      "Red Multicolored is a good choice for projects that need warmth, durability, and visual texture.",
    ],
  },
  {
    name: "Bruno Red Granite",
    description: [
      "Bruno Red Granite has a deep reddish-brown tone with rich mineral texture and earthy warmth.",
      "The stone feels grounded and premium, offering a softer alternative to brighter red granites.",
      "It is suitable for countertops, floors, wall cladding, staircases, reception counters, and exterior surfaces.",
      "Its brown-red colour pairs beautifully with wood, bronze, cream walls, leather, and warm lighting.",
      "Bruno Red is ideal for projects that need red granite with a refined, mature, and natural look.",
    ],
  },
  {
    name: "Ruby Red Granite",
    description: [
      "Ruby Red Granite has a jewel-like red tone with dark mineral flecks and a polished luxury feel.",
      "Its colour creates an elegant statement while retaining the strength expected from natural granite.",
      "The stone performs well in feature walls, counters, vanity tops, flooring, monuments, and decorative panels.",
      "It pairs well with brass, cream stone, black accents, rosewood, and carefully focused lighting.",
      "Ruby Red is perfect when the design needs a rich red granite with a premium, memorable finish.",
    ],
  },
];

const whiteGraniteTypes = [
  {
    name: "Colonial White Granite",
    description: [
      "Colonial White Granite has a soft white and cream base with grey and burgundy mineral accents.",
      "The stone feels elegant, warm, and versatile, making it a favourite for premium interiors.",
      "It works beautifully for kitchen countertops, vanity tops, flooring, wall cladding, and tabletops.",
      "Its refined colour pairs well with white cabinetry, walnut, brass, black accents, and light stone backsplashes.",
      "Colonial White is ideal when the project needs a bright granite with subtle natural character.",
    ],
  },
  {
    name: "Alaska White Granite",
    description: [
      "Alaska White Granite has a crisp white base with bold grey, black, and warm mineral movement.",
      "The stone feels modern and dramatic while still keeping a bright, open appearance.",
      "It is excellent for waterfall islands, countertops, feature walls, vanity tops, and premium floors.",
      "Its contrast pairs well with white kitchens, black frames, brushed metal, oak, and warm lighting.",
      "Alaska White is perfect for designs that need a fresh white granite with strong visual energy.",
    ],
  },
  {
    name: "Forest White Granite",
    description: [
      "Forest White Granite has a pale background with branching grey and dark mineral movement.",
      "Its pattern gives the surface an organic look while keeping the overall palette light and elegant.",
      "The stone is suitable for feature walls, countertops, bathroom panels, flooring, and custom furniture.",
      "It pairs beautifully with plants, wood, brass, cream walls, black accents, and textured interiors.",
      "Forest White is ideal for projects that need a natural white stone with graceful movement.",
    ],
  },
  {
    name: "P White Granite",
    description: [
      "P White Granite has a clean light base with fine mineral grains and a simple practical appearance.",
      "Its understated look makes it easy to use across large floors, counters, walls, and commercial areas.",
      "The stone gives spaces brightness while offering the strength and durability of natural granite.",
      "It pairs well with steel, white walls, pale wood, grey cabinetry, and minimal design palettes.",
      "P White is a dependable option when the project needs a neat white granite with broad usability.",
    ],
  },
  {
    name: "River White Granite",
    description: [
      "River White Granite has a white-grey base with flowing veins that move softly across the slab.",
      "The surface feels calm, graceful, and natural, making it suitable for refined interior projects.",
      "It performs well on countertops, islands, vanity tops, feature walls, floors, and backsplashes.",
      "Its flowing pattern pairs nicely with white cabinetry, light wood, chrome, brass, and soft grey palettes.",
      "River White is ideal for designs that need a bright granite with gentle movement and elegance.",
    ],
  },
  {
    name: "Viscon White Granite",
    description: [
      "Viscon White Granite has dramatic waves of white, grey, black, and soft beige mineral movement.",
      "The stone creates a luxurious statement surface while remaining neutral enough for modern interiors.",
      "It is excellent for kitchen islands, countertops, feature walls, flooring, reception counters, and bathrooms.",
      "Its movement pairs best with clean surrounding finishes that allow the slab pattern to stand out.",
      "Viscon White is perfect when the project needs a white granite with strong visual flow.",
    ],
  },
  {
    name: "New Kashmir White Granite",
    description: [
      "New Kashmir White Granite has a soft white-beige base with fine grey and brown mineral speckling.",
      "The stone feels warm, simple, and elegant, making it easy to coordinate in many design styles.",
      "It works well for countertops, floors, vanity tops, cladding, staircases, and commercial interiors.",
      "Its gentle colour pairs beautifully with wood, cream walls, bronze, white cabinets, and warm lighting.",
      "New Kashmir White is a strong choice for projects that need a calm white granite with warmth.",
    ],
  },
];

const yellowGraniteTypes = [
  {
    name: "Crystal Yellow Granite",
    description: [
      "Crystal Yellow Granite has a bright yellow-gold tone with crystalline mineral sparkle across the surface.",
      "The stone brings warmth and light into kitchens, counters, wall panels, floors, and hospitality spaces.",
      "Its cheerful colour works well where the design needs a sunny natural-stone identity without feeling heavy.",
      "Polished finishes enhance the crystal effect, while honed finishes create a softer architectural surface.",
      "Crystal Yellow pairs beautifully with white walls, warm wood, bronze fittings, black accents, and cream interiors.",
    ],
  },
];

type GraniteVariant = {
  name: string;
  description: string[];
};

const graniteVariantGroups: Record<string, { eyebrow: string; title: string; variants: GraniteVariant[] }> = {
  "blue-granite": {
    eyebrow: "Blue Granite Types",
    title: "Four signature blue granite selections.",
    variants: blueGraniteTypes,
  },
  "black-granite": {
    eyebrow: "Black Granite Types",
    title: "Eight signature black granite selections.",
    variants: blackGraniteTypes,
  },
  "brown-granite": {
    eyebrow: "Brown Granite Types",
    title: "Four signature brown granite selections.",
    variants: brownGraniteTypes,
  },
  "gold-granite": {
    eyebrow: "Gold Granite Types",
    title: "Nine signature gold granite selections.",
    variants: goldGraniteTypes,
  },
  "green-granite": {
    eyebrow: "Green Granite Types",
    title: "Four signature green granite selections.",
    variants: greenGraniteTypes,
  },
  "grey-granite": {
    eyebrow: "Grey Granite Types",
    title: "Two signature grey granite selections.",
    variants: greyGraniteTypes,
  },
  "pink-granite": {
    eyebrow: "Pink Granite Types",
    title: "Five signature pink granite selections.",
    variants: pinkGraniteTypes,
  },
  "red-granite": {
    eyebrow: "Red Granite Types",
    title: "Six signature red granite selections.",
    variants: redGraniteTypes,
  },
  "white-granite": {
    eyebrow: "White Granite Types",
    title: "Seven signature white granite selections.",
    variants: whiteGraniteTypes,
  },
  "yellow-granite": {
    eyebrow: "Yellow Granite Types",
    title: "One signature yellow granite selection.",
    variants: yellowGraniteTypes,
  },
};

export const Route = createFileRoute("/products/granites/$slug")({
  head: ({ params }) => {
    const g = granitesBySlug[params.slug];
    if (!g) return { meta: [{ title: "Granite â€” RKGB" }] };
    return {
      meta: [
        { title: `${g.name} â€” ${g.tagline} | RKGB` },
        { name: "description", content: `${g.name}: ${g.shortDesc} Quarried in ${g.origin}.` },
        { property: "og:title", content: `${g.name} | RKGB` },
        { property: "og:description", content: g.shortDesc },
        { property: "og:image", content: g.project },
      ],
    };
  },
  loader: ({ params }) => {
    const g = granitesBySlug[params.slug];
    if (!g) throw notFound();
    return { granite: g };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <h1 className="font-serif text-4xl text-ink">Stone not found</h1>
      <Link to="/products/granites" className="mt-6 inline-block text-gold underline">Back to collection</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: GraniteDetail,
});

function GraniteDetail() {
  const { granite: g } = Route.useLoaderData() as { granite: Granite };
  const idx = granites.findIndex((x) => x.slug === g.slug);
  const prev = granites[(idx - 1 + granites.length) % granites.length];
  const next = granites[(idx + 1) % granites.length];
  const variantGroup = graniteVariantGroups[g.slug];
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [projectTouchStart, setProjectTouchStart] = useState<number | null>(null);
  const activeVariant = variantGroup?.variants[activeVariantIndex] ?? variantGroup?.variants[0];
  const projectSlides = variantGroup?.variants
    .map((variant) => ({
      name: variant.name,
      image: getVariantProjectImage(variant.name),
    }))
    .filter((slide): slide is { name: string; image: string } => Boolean(slide.image)) ?? [];
  const activeProject = projectSlides[activeProjectIndex] ?? projectSlides[0];

  useEffect(() => {
    setActiveVariantIndex(0);
    setActiveProjectIndex(0);
  }, [g.slug]);

  useEffect(() => {
    if (projectSlides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveProjectIndex((index) => (index + 1) % projectSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [g.slug, projectSlides.length]);

  useEffect(() => {
    if (activeProjectIndex >= projectSlides.length) {
      setActiveProjectIndex(0);
    }
  }, [activeProjectIndex, projectSlides.length]);

  const showPreviousProject = () => {
    setActiveProjectIndex((index) => (index - 1 + projectSlides.length) % projectSlides.length);
  };

  const showNextProject = () => {
    setActiveProjectIndex((index) => (index + 1) % projectSlides.length);
  };

  const handleProjectSwipe = (touchEnd: number) => {
    if (projectTouchStart === null || projectSlides.length <= 1) return;

    const distance = projectTouchStart - touchEnd;
    if (Math.abs(distance) > 45) {
      if (distance > 0) showNextProject();
      else showPreviousProject();
    }

    setProjectTouchStart(null);
  };

  return (
    <div className="bg-background">
      {/* â”€â”€ Breadcrumb â”€â”€ */}
      <div className="border-b border-ink/10 pt-24">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/products" className="hover:text-gold">Products</Link>
            <span>/</span>
            <Link to="/products/granites" className="hover:text-gold">Granites</Link>
            <span>/</span>
            <span className="text-ink">{g.name}</span>
          </div>
        </div>
      </div>

      {/* â”€â”€ Hero â”€â”€ */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center lg:gap-16">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                {g.tagline}
              </div>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                {g.name}
              </h1>
              <p className="mt-6 max-w-lg font-serif text-lg italic text-muted-foreground md:text-xl">
                {g.signature}
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                {g.shortDesc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-ink"
                  style={{ background: `${g.accentHex}1f`, border: `1px solid ${g.accentHex}40` }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: g.accentHex }} />
                  {g.origin}
                </span>
                <span className="inline-flex items-center rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {g.specs[0]?.value ?? "Granite"}
                </span>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <div className="aspect-[4/3] sm:aspect-[16/11]">
                  <img src={g.project} alt={`${g.name} in a project setting`} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {variantGroup && activeVariant ? (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Eyebrow>{variantGroup.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-3xl font-serif text-ink">
              {variantGroup.title}
            </h2>

            <div className="mt-6 flex gap-2 overflow-x-auto border-y border-ink/10 py-3">
              {variantGroup.variants.map((type, index) => (
                <button
                  key={type.name}
                  onClick={() => setActiveVariantIndex(index)}
                  className={`shrink-0 border px-3 py-2 text-[11px] uppercase tracking-widest transition ${
                    activeVariant.name === type.name
                      ? "border-gold bg-gold text-ink"
                      : "border-ink/15 text-muted-foreground hover:border-gold hover:text-ink"
                  }`}
                >
                  {type.name.replace(" Granite", "")}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[54%_1fr] lg:items-stretch">
              <div className="overflow-hidden rounded-sm">
                <div key={activeVariant.name} className="variant-image-fade aspect-[4/3] h-full max-h-[68vh]">
                  <img
                    src={variantImages[activeVariant.name] ?? g.slab}
                    alt={`${activeVariant.name} slab`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex min-h-full flex-col justify-between border border-ink/10 bg-beige/40 p-5 md:p-7">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">Selected Granite</div>
                  <h3 className="mt-3 font-serif text-ink">{activeVariant.name}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                    {activeVariant.description.join(" ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {activeProject ? (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <Eyebrow>{g.name} Projects</Eyebrow>
                <h2 className="mt-3 max-w-3xl font-serif text-ink">
                  Project views for {g.name.toLowerCase()} variants.
                </h2>
              </div>
              {projectSlides.length > 1 ? (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPreviousProject}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-background text-ink transition hover:border-gold hover:text-gold"
                    aria-label={`Previous ${g.name} project`}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextProject}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-background text-ink transition hover:border-gold hover:text-gold"
                    aria-label={`Next ${g.name} project`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              ) : null}
            </div>

            <div className="mx-auto mt-6 max-w-2xl">
              <h3 className="project-variant-title mb-3 text-center text-ink">{activeProject.name}</h3>
              <div
                className="relative overflow-hidden rounded-sm bg-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]"
                onTouchStart={(event) => setProjectTouchStart(event.touches[0].clientX)}
                onTouchEnd={(event) => handleProjectSwipe(event.changedTouches[0].clientX)}
              >
                <div key={activeProject.name} className="variant-image-fade aspect-[16/11] w-full">
                  <img
                    src={activeProject.image}
                    alt={`${activeProject.name} project`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {projectSlides.length > 1 ? (
                <div className="mt-5 flex items-center justify-center gap-2">
                  {projectSlides.map((slide, index) => (
                    <button
                      key={slide.name}
                      type="button"
                      onClick={() => setActiveProjectIndex(index)}
                      className={`h-2.5 rounded-full transition ${
                        activeProjectIndex === index ? "w-9 bg-gold" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                      }`}
                      aria-label={`Show ${slide.name} project`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* â”€â”€ Quick specs strip â”€â”€ */}
      {/* â”€â”€ Narrative â”€â”€ */}
      <section className="hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {g.slug === "blue-granite" ? (
            <>
              <Eyebrow>Blue Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Four signature blue granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {blueGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "black-granite" ? (
            <>
              <Eyebrow>Black Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Eight signature black granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {blackGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "brown-granite" ? (
            <>
              <Eyebrow>Brown Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Four signature brown granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {brownGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "gold-granite" ? (
            <>
              <Eyebrow>Gold Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Nine signature gold granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {goldGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "green-granite" ? (
            <>
              <Eyebrow>Green Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Four signature green granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {greenGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "grey-granite" ? (
            <>
              <Eyebrow>Grey Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Two signature grey granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {greyGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "pink-granite" ? (
            <>
              <Eyebrow>Pink Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Five signature pink granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {pinkGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "red-granite" ? (
            <>
              <Eyebrow>Red Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Six signature red granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {redGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "white-granite" ? (
            <>
              <Eyebrow>White Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                Seven signature white granite selections.
              </h2>
              <div className="mt-12 space-y-14">
                {whiteGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : g.slug === "yellow-granite" ? (
            <>
              <Eyebrow>Yellow Granite Types</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl text-ink md:text-5xl">
                One signature yellow granite selection.
              </h2>
              <div className="mt-12 space-y-14">
                {yellowGraniteTypes.map((type) => (
                  <article key={type.name} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[48%_1fr] lg:items-start xl:grid-cols-[50%_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">{type.name}</h3>
                      <div className="mt-4 overflow-hidden rounded-sm">
                        <div className="aspect-[4/3]">
                          <img src={variantImages[type.name] ?? g.slab} alt={`${type.name} slab`} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9 lg:pt-14">
                      {type.description.join(" ")}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : (
          <div className="grid gap-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-4">
              <Eyebrow>The Stone</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">A study in {g.tagline.toLowerCase()}.</h2>
              <div className="mt-8 overflow-hidden rounded-sm">
                <div className="aspect-[4/3]">
                  <img src={g.slab} alt={`${g.name} slab close-up`} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Quarry</div>
                  <div className="mt-1 font-serif text-lg text-ink">{g.origin}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Geology</div>
                  <div className="mt-1 text-muted-foreground leading-relaxed">{g.formation}</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="font-serif text-2xl leading-snug text-ink text-balance md:text-3xl">
                {g.story[0]}
              </p>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                {g.story.slice(1, 8).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* â”€â”€ Project image â”€â”€ */}
      <section className="hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-sm">
            <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
              <img src={g.project} alt={`${g.name} in a project setting`} className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            In situ Â· {g.signature}
          </p>
        </div>
      </section>

      {/* â”€â”€ Technical sheet â”€â”€ */}
      <section className="hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>Technical Sheet</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">Specifications.</h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Engineered to international standards. Full technical PDF and physical samples available on request.
              </p>
            </div>
            <div className="md:col-span-7">
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {g.specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                    <dd className="font-serif text-lg text-ink md:text-xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Finishes / Sizes / Pairings â”€â”€ */}
      <section className="hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-12">
          <Detail title="Finishes">
            <div className="flex flex-wrap gap-2">
              {g.finishes.map((f) => (
                <span key={f} className="border border-ink/15 px-3 py-1.5 text-xs uppercase tracking-widest text-ink">{f}</span>
              ))}
            </div>
          </Detail>
          <Detail title="Standard Sizes">
            <ul className="space-y-2 text-sm text-ink">
              {g.sizes.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-gold" />{s}
                </li>
              ))}
            </ul>
          </Detail>
          <Detail title="Pairs With">
            <p className="text-sm leading-relaxed text-muted-foreground">{g.pairings.join(" Â· ")}</p>
            <p className="mt-6 font-serif italic text-ink">"{g.inspiration}"</p>
          </Detail>
        </div>
      </section>

      {/* â”€â”€ Applications â”€â”€ */}
      <section className="hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Applications</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">Where it lives.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {g.applications.map((a, i) => (
              <div key={a} className="group bg-background">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={i % 2 === 0 ? g.project : g.slab}
                    alt={a}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border border-t-0 border-ink/10 px-5 py-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">0{i + 1}</div>
                  <div className="mt-1 font-serif text-lg text-ink">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Prev / Next â”€â”€ */}
      <section className="border-y border-ink/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-12">
          <Link to="/products/granites/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-3 md:gap-4">
            <ArrowLeft className="h-5 w-5 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-gold" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Previous</div>
              <div className="font-serif text-base text-ink group-hover:text-gold md:text-lg">{prev.name}</div>
            </div>
          </Link>
          <Link to="/products/granites" className="hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold md:inline-flex">
            All Stones <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/products/granites/$slug" params={{ slug: next.slug }} className="group flex items-center gap-3 md:gap-4">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Next</div>
              <div className="font-serif text-base text-ink group-hover:text-gold md:text-lg">{next.name}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
          </Link>
        </div>
      </section>

      <QuoteCTA accent={g.accentHex} />
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold">{title}</div>
      <div className="mt-5 border-t border-ink/10 pt-5">{children}</div>
    </div>
  );
}
