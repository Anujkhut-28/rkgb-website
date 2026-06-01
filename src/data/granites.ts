import black from "@/assets/Black-Galaxy-Granite.png";
import white from "@/assets/colonial-White-Granite.png";
import red from "@/assets/New-Imp-Red-Granite.png";
import blue from "@/assets/crystal blue granite.jpg";
import green from "@/assets/Hassan-Green-Granite.jpg";
import grey from "@/assets/N-Grey-Granite.jpg";
import brown from "@/assets/Tan-Brown-Granite.jpg";
import gold from "@/assets/New-Imperial-Gold-Granite.png";
import pink from "@/assets/Astoria-Pink-Granite.jpg";
import yellow from "@/assets/Crystal-yellow-Granite.jpg";

import pBlack from "@/assets/Projects/black galaxy-project.png";
import pWhite from "@/assets/Projects/colonial white-project.jpeg";
import pRed from "@/assets/Projects/new imp red-project.png";
import pBlue from "@/assets/Projects/crystal blue-project.png";
import pGreen from "@/assets/Projects/hassan green-project.jpeg";
import pGrey from "@/assets/Projects/n grey-project.jpeg";
import pBrown from "@/assets/Projects/coffee brown-project.png";
import pGold from "@/assets/Projects/new imperial gold-project.png";
import pPink from "@/assets/Projects/astoria pink-project.jpeg";

export interface Granite {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  slab: string;
  project: string;
  accentHex: string;
  layout: "unified";
  origin: string;
  formation: string;
  story: string[];
  specs: { label: string; value: string }[];
  finishes: string[];
  applications: string[];
  sizes: string[];
  pairings: string[];
  signature: string;
  inspiration: string;
}

const baseSpecs = [
  { label: "Density", value: "2.70 g/cm3" },
  { label: "Water absorption", value: "0.16%" },
  { label: "Mohs hardness", value: "6.0" },
  { label: "Finish", value: "Polished" },
];

export const granites: Granite[] = [
  {
    slug: "black-granite", name: "Black Granite", tagline: "Bold. Absolute. Eternal.",
    shortDesc: "Deep abyss tones with silvery mica that command any architectural space.",
    slab: black, project: pBlack, accentHex: "#0c0c10", layout: "unified",
    origin: "Karimnagar, Telangana",
    formation: "Precambrian gabbroic intrusion, 2.5 billion years old",
    story: ["Black Granite is a dense, refined surface with a deep black base and subtle mineral sparkle.", "It works beautifully in kitchens, monuments, luxury flooring, facades, and feature walls.", "Polished finishes create a mirror-like effect, while honed and leathered finishes feel softer and more architectural.", "The stone pairs well with brass, smoked wood, white walls, glass, and minimalist interiors.", "It is a strong choice for projects that need permanence, contrast, and a premium black stone identity."],
    specs: [{ label: "Density", value: "3.02 g/cm3" }, { label: "Water absorption", value: "0.08%" }, { label: "Compressive strength", value: "240 MPa" }, { label: "Mohs hardness", value: "6.5" }],
    finishes: ["Mirror Polished", "Honed", "Leathered", "Flamed"],
    applications: ["Monumental facades", "Kitchen islands", "Memorials", "Luxury flooring"],
    sizes: ["Gangsaw 320x195 cm", "Cutter 240x120 cm", "Tiles 60x60 cm"],
    pairings: ["Brushed brass", "Smoked walnut", "Travertine ivory"],
    signature: "The mirror that holds the room.",
    inspiration: "Quiet modern architecture with strong monolithic surfaces.",
  },
  {
    slug: "white-granite", name: "White Granite", tagline: "Pure. Luminous. Sculptural.",
    shortDesc: "A canvas of soft grain that opens space with quiet, gallery-grade light.",
    slab: white, project: pWhite, accentHex: "#cfc7b8", layout: "unified",
    origin: "Chamrajnagar, Karnataka",
    formation: "Leucocratic granite, quartz-feldspar rich, Archean basement",
    story: ["White Granite has a bright stone base with fine mineral texture that keeps the surface natural and elegant.", "It is ideal for countertops, bathroom suites, lobby floors, backsplashes, and wall cladding.", "The light colour helps rooms feel open while the granite structure keeps the material practical.", "It pairs well with pale wood, bronze, black metal, linen textures, and clean contemporary palettes.", "This stone suits projects that need brightness, durability, and a calm premium finish."],
    specs: baseSpecs,
    finishes: ["Polished", "Satin", "Brushed", "Sandblasted"],
    applications: ["Gallery flooring", "Hospitality lobbies", "Bath suites", "Vanity tops"],
    sizes: ["Gangsaw 300x190 cm", "Slab 280x170 cm", "Tiles 80x80 cm"],
    pairings: ["Pale oak", "Antique bronze", "Linen plaster"],
    signature: "Daylight made permanent.",
    inspiration: "Minimal interiors shaped around light and restraint.",
  },
  {
    slug: "red-granite", name: "Red Granite", tagline: "Warm. Regal. Iconic.",
    shortDesc: "A heritage stone whose crimson depth has crowned palaces for centuries.",
    slab: red, project: pRed, accentHex: "#7a1d1d", layout: "unified",
    origin: "Ilkal, Karnataka and Jhansi, Madhya Pradesh",
    formation: "Potassium-feldspar porphyritic granite",
    story: ["Red Granite has a warm, confident colour with dark mineral grains and strong architectural character.", "It is used in monuments, civic spaces, flooring, stairs, cladding, counters, and traditional interiors.", "The stone brings ceremony and visibility while remaining durable for demanding installations.", "It pairs well with cream stone, rosewood, brass, sandstone, and heritage design details.", "Red Granite is suited for projects that need colour, strength, and a sense of permanence."],
    specs: baseSpecs,
    finishes: ["Polished", "Flamed", "Bush-hammered", "Antiqued"],
    applications: ["Civic monuments", "Heritage restoration", "Statement walls", "Plinths"],
    sizes: ["Gangsaw 310x190 cm", "Cutter 240x120 cm", "Cobbles 10x10 cm"],
    pairings: ["Patinated copper", "Indian rosewood", "Cream limestone"],
    signature: "The colour of dynasties.",
    inspiration: "Historic Indian stone architecture with warmth and authority.",
  },
  {
    slug: "blue-granite", name: "Blue Granite", tagline: "Cool. Iridescent. Architectural.",
    shortDesc: "Cobalt depth with optical shimmer engineered for monumental facades.",
    slab: blue, project: pBlue, accentHex: "#1c3f7a", layout: "unified",
    origin: "Vizag, Andhra Pradesh",
    formation: "Labradorite-rich anorthosite with schiller-effect feldspar",
    story: ["Blue Granite has a deep cool base with mineral movement that can shimmer under changing light.", "It is a statement stone for bars, feature walls, staircases, pool surrounds, and hospitality counters.", "The colour feels rare and architectural, especially in polished finishes.", "It pairs well with chrome, charcoal oak, glass, black metal, and pale stone.", "Blue Granite is ideal for projects that need a memorable premium surface."],
    specs: baseSpecs,
    finishes: ["High-polish", "Honed", "Flamed", "Water-jet"],
    applications: ["Curtain-wall cladding", "Bar tops", "Feature staircases", "Pool surrounds"],
    sizes: ["Gangsaw 320x200 cm", "Slab 280x170 cm", "Custom strip"],
    pairings: ["Polished chrome", "Charcoal oak", "Frosted glass"],
    signature: "Aurora trapped in stone.",
    inspiration: "Cool jewel-toned interiors with strong architectural lines.",
  },
  {
    slug: "green-granite", name: "Green Granite", tagline: "Verdant. Mineral. Storied.",
    shortDesc: "Forest-deep emerald with calligraphic black veining and sculptural presence.",
    slab: green, project: pGreen, accentHex: "#214d35", layout: "unified",
    origin: "Markapur, Andhra Pradesh",
    formation: "Hornblende-biotite gneiss with chlorite enrichment",
    story: ["Green Granite brings a deep natural tone into interiors and exterior architectural surfaces.", "Its mineral movement creates a calm, organic character suited to premium spaces.", "The stone works well for counters, spa interiors, libraries, walls, floors, and decorative panels.", "It pairs beautifully with brass, cane, cream travertine, wood, and soft lighting.", "Green Granite is ideal when the design needs natural luxury and visual depth."],
    specs: baseSpecs,
    finishes: ["Polished", "Honed", "Leathered", "River-washed"],
    applications: ["Boutique retail", "Spa interiors", "Library tables", "Bookmatched walls"],
    sizes: ["Gangsaw 300x190 cm", "Bookmatch pairs", "Slim 12 mm"],
    pairings: ["Aged brass", "Cane weave", "Cream travertine"],
    signature: "A forest, sliced thin.",
    inspiration: "Organic interiors where stone becomes the quiet centrepiece.",
  },
  {
    slug: "grey-granite", name: "Grey Granite", tagline: "Quiet. Modern. Refined.",
    shortDesc: "Cool argent tones that bring discipline and clarity to contemporary builds.",
    slab: grey, project: pGrey, accentHex: "#6a7079", layout: "unified",
    origin: "Hosur, Tamil Nadu",
    formation: "Biotite granite with uniform medium grain",
    story: ["Grey Granite is a clean architectural surface with a neutral tone and even mineral grain.", "It is useful across floors, plazas, cladding, counters, stairs, courtyards, and public areas.", "The colour gives projects clarity without competing with surrounding materials.", "It pairs well with concrete, black steel, aluminium, pale timber, and minimalist finishes.", "Grey Granite is suited for spaces that need durability, restraint, and modern discipline."],
    specs: baseSpecs,
    finishes: ["Polished", "Honed", "Flamed", "Sandblasted"],
    applications: ["Office towers", "Airports", "Plazas", "External paving"],
    sizes: ["Gangsaw 320x195 cm", "Paving 60x40 cm", "Kerbstone"],
    pairings: ["Anodised aluminium", "Black steel", "Concrete"],
    signature: "Engineered calm.",
    inspiration: "Contemporary architecture shaped by clarity and restraint.",
  },
  {
    slug: "brown-granite", name: "Brown Granite", tagline: "Earthen. Warm. Grounding.",
    shortDesc: "Espresso warmth woven with gold filaments - natural, tactile, and timeless.",
    slab: brown, project: pBrown, accentHex: "#5a3621", layout: "unified",
    origin: "Kishangarh, Rajasthan",
    formation: "Iron-rich granitoid with feldspar phenocrysts",
    story: ["Brown Granite gives spaces warmth, depth, and a grounded natural-stone character.", "It works well for kitchens, fireplaces, libraries, bars, floors, and outdoor steps.", "The surface is forgiving in daily use and pairs naturally with warm interior palettes.", "It coordinates with smoked oak, leather, brass, cream walls, and soft lighting.", "Brown Granite is ideal for projects that should feel welcoming, durable, and established."],
    specs: baseSpecs,
    finishes: ["Leathered", "Polished", "Brushed", "Antiqued"],
    applications: ["Residential kitchens", "Fireplace surrounds", "Library floors", "Wine cellars"],
    sizes: ["Gangsaw 300x190 cm", "Cutter 240x120 cm", "Hearth blocks"],
    pairings: ["Smoked oak", "Cognac leather", "Brushed brass"],
    signature: "Earth, refined into surface.",
    inspiration: "Warm interiors where patina and comfort matter.",
  },
  {
    slug: "gold-granite", name: "Gold Granite", tagline: "Opulent. Radiant. Ceremonial.",
    shortDesc: "Sun-amber base with mineral inclusions that catch and hold every light.",
    slab: gold, project: pGold, accentHex: "#b88030", layout: "unified",
    origin: "Madurai, Tamil Nadu",
    formation: "Migmatitic granite with partial-melt banding",
    story: ["Gold Granite brings a warm ceremonial tone to interiors that need richness and presence.", "Its mineral movement catches light beautifully across counters, walls, floors, and reception spaces.", "The stone feels luxurious while retaining the durability of granite.", "It pairs well with bronze, onyx, velvet greens, cream walls, and dark joinery.", "Gold Granite is ideal for hotels, residences, lobbies, and projects designed around arrival."],
    specs: baseSpecs,
    finishes: ["High-polish", "Honed", "Brushed", "Bookmatched"],
    applications: ["Hotel lobbies", "Royal residences", "Banquet halls", "Reception desks"],
    sizes: ["Gangsaw 320x195 cm", "Bookmatch pairs", "Slab 280x170 cm"],
    pairings: ["Champagne bronze", "Onyx", "Velvet sage"],
    signature: "A held breath of sunlight.",
    inspiration: "Ceremonial interiors where warmth becomes theatre.",
  },
  {
    slug: "pink-granite", name: "Pink Granite", tagline: "Soft. Elegant. Romantic.",
    shortDesc: "Blush tonality with charcoal flecks - gentle drama for elevated interiors.",
    slab: pink, project: pPink, accentHex: "#d4a8a0", layout: "unified",
    origin: "Jalore, Rajasthan",
    formation: "Pink K-feldspar granite, coarse phenocrystic",
    story: ["Pink Granite has a warm blush tone with mineral texture that feels soft and architectural.", "It is used in boutique hotels, powder rooms, counters, garden walls, plinths, and feature stairs.", "The colour gives projects a distinctive identity while remaining natural and durable.", "It pairs well with rose gold, bleached ash, sage, cream walls, and soft textiles.", "Pink Granite is ideal for designs that need warmth, personality, and a refined colour story."],
    specs: baseSpecs,
    finishes: ["Satin", "Polished", "Honed", "Tumbled"],
    applications: ["Boutique hotels", "Powder rooms", "Garden walls", "Sculptural plinths"],
    sizes: ["Gangsaw 300x190 cm", "Slab 270x170 cm", "Tiles 40x40 cm"],
    pairings: ["Rose gold", "Bleached ash", "Sage velvet"],
    signature: "The blush of soft light.",
    inspiration: "Colour-led architecture with warmth and restraint.",
  },
  {
    slug: "yellow-granite", name: "Yellow Granite", tagline: "Bright. Warm. Distinctive.",
    shortDesc: "Golden-yellow mineral warmth for spaces that need brightness and natural character.",
    slab: yellow, project: yellow, accentHex: "#c99a2e", layout: "unified",
    origin: "Jaisalmer, Rajasthan",
    formation: "Quartz-feldspar granite with warm iron-rich mineral tone",
    story: ["Yellow Granite brings a warm golden tone into architectural surfaces, giving rooms a bright and welcoming character.", "Its mineral base carries soft yellow, cream, and amber movement for counters, floors, cladding, and decorative surfaces.", "The stone is useful where designers want warmth without the heavier look of brown or deep gold granite.", "Polished finishes enhance the yellow tone, while honed finishes create a softer matte look.", "Yellow Granite pairs beautifully with white walls, wood, bronze fittings, black accents, and warm neutral interiors."],
    specs: baseSpecs,
    finishes: ["Polished", "Honed", "Leathered", "Flamed"],
    applications: ["Kitchen counters", "Feature walls", "Flooring", "Vanity tops"],
    sizes: ["Gangsaw 320x200 cm", "Slab 280x170 cm", "Custom"],
    pairings: ["Warm wood", "Bronze", "White plaster"],
    signature: "Sunlight held in stone.",
    inspiration: "Desert modern interiors with warmth shaped into architecture.",
  },
];

export const granitesBySlug = Object.fromEntries(granites.map((g) => [g.slug, g]));
