import { Link } from "@tanstack/react-router";

export function QuoteCTA({ accent = "var(--gold)" }: { accent?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-background">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: `radial-gradient(circle at 20% 30%, ${accent}, transparent 60%)` }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Begin the conversation</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl">Bring your project in stone.</h2>
        <p className="mx-auto mt-6 max-w-xl text-background/70">
          Request samples, technical sheets, or a custom export quote. Our specialists respond within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="h-12 inline-flex items-center bg-gold px-8 text-sm font-medium tracking-wide text-ink hover:bg-background transition">
            Request a Quote
          </Link>
          <a href="https://wa.me/918169793994" className="h-12 inline-flex items-center border border-background/30 px-8 text-sm tracking-wide text-background hover:border-gold hover:text-gold transition">
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}