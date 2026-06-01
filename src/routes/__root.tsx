import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import logo from "@/assets/logo.png";
import blackGranite from "@/assets/Black-Galaxy-Granite.png";
import blueGranite from "@/assets/crystal blue granite.jpg";
import brownGranite from "@/assets/Tan-Brown-Granite.jpg";
import forestGranite from "@/assets/Black-Forest-Granite.png";
import goldGranite from "@/assets/New-Imperial-Gold-Granite.png";
import greenGranite from "@/assets/Hassan-Green-Granite.jpg";
import redGranite from "@/assets/Ruby-Red-Granite.png";
import whiteGranite from "@/assets/colonial-White-Granite.png";
import fantasyBrownMarble from "@/assets/Fantasy-Brown-Marble.png";
import fantasyWhiteMarble from "@/assets/fantasy-white-marble.png";
import greenMarble from "@/assets/green-marble.png";
import lightningBlackMarble from "@/assets/lightning-black-marble.png";
import paradiseBlueMarble from "@/assets/paradise-blue-marble.png";
import snowWhiteMarble from "@/assets/snow-white-marble.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RKGB — Premium Granite & Marble Solutions" },
      { name: "description", content: "Radhe Krishna Granite & BuildCon — manufacturer and exporter of premium granite and marble. Crafting excellence in natural stone." },
      { name: "author", content: "RKGB" },
      { property: "og:title", content: "RKGB — Premium Granite & Marble Solutions" },
      { property: "og:description", content: "Radhe Krishna Granite & BuildCon — manufacturer and exporter of premium granite and marble. Crafting excellence in natural stone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "RKGB — Premium Granite & Marble Solutions" },
      { name: "twitter:description", content: "Radhe Krishna Granite & BuildCon — manufacturer and exporter of premium granite and marble. Crafting excellence in natural stone." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d616d665-7a2f-4a66-af22-93919c644607/id-preview-896529fe--a580b2ef-8e83-4a9f-a2d9-74a4e136ff0c.lovable.app-1778992407508.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d616d665-7a2f-4a66-af22-93919c644607/id-preview-896529fe--a580b2ef-8e83-4a9f-a2d9-74a4e136ff0c.lovable.app-1778992407508.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BrandIntro />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

function BrandIntro() {
  const [visible, setVisible] = useState(true);
  const [stones, setStones] = useState<BrandStone[]>([]);

  useEffect(() => {
    setStones(getRandomBrandStones());
    const timeout = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="brand-intro fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stones.map((stone, index) => (
          <img
            key={`${stone.alt}-${index}`}
            src={stone.src}
            alt=""
            aria-hidden="true"
            className={`brand-intro-stone brand-intro-stone-${index + 1} absolute rounded-xl border border-background/70 object-cover shadow-luxury ${stone.className}`}
          />
        ))}
      </div>
      <div className="brand-intro-mark flex items-center gap-4">
        <img src={logo} alt="" className="h-16 w-16 rounded-full object-contain shadow-gold md:h-20 md:w-20" />
        <div className="leading-none">
          <div className="brand-intro-title font-serif text-[2.75rem] text-ink md:text-[4rem]">RKGB</div>
          <div className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground md:text-xs">
            Granite &amp; BuildCon
          </div>
        </div>
      </div>
    </div>
  );
}

type BrandStone = {
  src: string;
  alt: string;
  className: string;
};

const brandStoneImages = [
  { src: blackGranite, alt: "Black granite texture" },
  { src: blueGranite, alt: "Blue granite texture" },
  { src: brownGranite, alt: "Brown granite texture" },
  { src: forestGranite, alt: "Forest granite texture" },
  { src: goldGranite, alt: "Gold granite texture" },
  { src: greenGranite, alt: "Green granite texture" },
  { src: redGranite, alt: "Red granite texture" },
  { src: whiteGranite, alt: "White granite texture" },
  { src: fantasyBrownMarble, alt: "Fantasy brown marble texture" },
  { src: fantasyWhiteMarble, alt: "Fantasy white marble texture" },
  { src: greenMarble, alt: "Green marble texture" },
  { src: lightningBlackMarble, alt: "Lightning black marble texture" },
  { src: paradiseBlueMarble, alt: "Paradise blue marble texture" },
  { src: snowWhiteMarble, alt: "Snow white marble texture" },
];

const brandStonePositions = [
  "left-[5%] top-[12%] h-20 w-24 rotate-[-11deg] md:left-[8%] md:top-[16%] md:h-32 md:w-40",
  "left-[30%] top-[8%] h-16 w-24 rotate-[8deg] md:left-[27%] md:top-[10%] md:h-24 md:w-36",
  "right-[28%] top-[9%] h-16 w-24 rotate-[-7deg] md:right-[29%] md:top-[11%] md:h-24 md:w-36",
  "right-[5%] top-[14%] h-20 w-24 rotate-[10deg] md:right-[8%] md:top-[17%] md:h-32 md:w-40",
  "left-[6%] top-[42%] h-24 w-20 rotate-[6deg] md:left-[12%] md:top-[43%] md:h-40 md:w-32",
  "right-[6%] top-[42%] h-24 w-20 rotate-[-8deg] md:right-[12%] md:top-[42%] md:h-40 md:w-32",
  "left-[9%] bottom-[12%] h-20 w-28 rotate-[-6deg] md:left-[14%] md:bottom-[14%] md:h-28 md:w-44",
  "left-[36%] bottom-[8%] h-16 w-24 rotate-[9deg] md:left-[34%] md:bottom-[10%] md:h-24 md:w-36",
  "right-[34%] bottom-[8%] h-16 w-24 rotate-[-9deg] md:right-[34%] md:bottom-[10%] md:h-24 md:w-36",
  "right-[8%] bottom-[12%] h-20 w-28 rotate-[7deg] md:right-[14%] md:bottom-[14%] md:h-28 md:w-44",
];

function getRandomBrandStones() {
  const shuffled = [...brandStoneImages].sort(() => Math.random() - 0.5);

  return brandStonePositions.map((className, index) => ({
    ...shuffled[index % shuffled.length],
    className,
  }));
}
