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

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="brand-intro fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(191,143,77,0.18),transparent_34%),linear-gradient(135deg,rgba(32,28,24,0.08),transparent_46%,rgba(191,143,77,0.1))]" />
      <div className="brand-intro-mark relative flex items-center gap-5 rounded-full border border-gold/25 bg-background/80 px-6 py-5 shadow-luxury backdrop-blur-md md:gap-6 md:px-8 md:py-6">
        <img src={logo} alt="" className="h-18 w-18 rounded-full object-contain shadow-gold md:h-24 md:w-24" />
        <div className="leading-none">
          <div className="brand-intro-title font-serif text-[3.75rem] text-ink md:text-[6rem]">RKGB</div>
          <div className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground md:text-xs">
            Granite &amp; BuildCon
          </div>
        </div>
      </div>
    </div>
  );
}
