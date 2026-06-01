import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RKGB — Request a Quote or Sample" },
      { name: "description", content: "Speak to the RKGB team — request granite or marble samples, technical sheets, or an export quote." },
      { property: "og:title", content: "Contact RKGB" },
      { property: "og:description", content: "Request a quote or sample." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-beige">
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-ink md:text-7xl text-balance">
            Let&apos;s talk stone, project, and possibility.
          </h1>
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-12">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch within 24 hours."); }}
            className="bg-background p-10 shadow-luxury md:p-14"
          >
            <h2 className="font-serif text-3xl text-ink">Send a message</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Field label="Full name" id="name" />
              <Field label="Email" id="email" type="email" />
              <Field label="Phone" id="phone" />
              <Field label="Country" id="country" />
            </div>
            <div className="mt-6">
              <label htmlFor="msg" className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea id="msg" rows={5} className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink focus:border-gold focus:outline-none" />
            </div>
            <button className="mt-10 inline-flex h-12 items-center bg-ink px-8 text-sm tracking-wide text-background hover:bg-gold transition">
              Send Enquiry
            </button>
          </form>
          <div className="space-y-6">
            <DetailCard icon={MapPin} title="Visit the studio">
              Plot 14, Industrial Area, Phase II<br />Jaipur, Rajasthan 302013, India
            </DetailCard>
            <DetailCard icon={Phone} title="Call">
              +91 98765 43210<br />Mon–Sat · 9.30–18.30 IST
            </DetailCard>
            <DetailCard icon={Mail} title="Email">
              info@rkgb.com<br />exports@rkgb.com
            </DetailCard>
            <DetailCard icon={MessageCircle} title="WhatsApp">
              <a href="https://wa.me/919876543210" className="text-gold underline-offset-4 hover:underline">Chat with our team →</a>
            </DetailCard>
          </div>
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden shadow-luxury">
            <iframe
              title="RKGB location"
              src="https://maps.google.com/maps?q=Jaipur,India&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="h-[460px] w-full border-0 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={id} type={type} className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink focus:border-gold focus:outline-none" />
    </div>
  );
}

function DetailCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; children: React.ReactNode }) {
  return (
    <div className="glass p-8">
      <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
      <div className="mt-4 font-serif text-xl text-ink">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}