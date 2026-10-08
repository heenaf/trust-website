import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  MapPin, Phone, Mail, Heart, Users, Utensils, Home, HandHeart, Sprout, X, Copy, Check, Menu,
  Shield, Smile, Sun, Leaf,
} from "lucide-react";
import heroQueue from "@/assets/meal-drive-queue.jpeg";
import storyServing from "@/assets/meal-drive-serving.jpeg";
import postOfficeDrive from "@/assets/meal-drive-post-office.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshaya Dhanam Trust — Daily Meals & Care for Elderly in Pattukkottai" },
      { name: "description", content: "Akshaya Dhanam Trust provides daily food and dignified care to poor, abandoned elderly people in Pattukkottai, Tamil Nadu. Donate via UPI." },
      { property: "og:title", content: "Akshaya Dhanam Trust | அட்சயதானம் அறக்கட்டளை" },
      { property: "og:description", content: "Serving with compassion. Sharing food. Building hope in Pattukkottai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const UPI_ID = "atchaya4168qr@fbl";
const UPI_URI = `upi://pay?pa=${UPI_ID}&pn=ATCHAYATHANAM%20TRUST&cu=INR`;
const NAV = [
  ["Home", "home"], ["About Us", "about"], ["Our Initiative", "initiative"],
  ["Vision", "vision"], ["Get Involved", "involved"], ["Contact", "contact"],
] as const;

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition hover:-translate-y-0.5 hover:bg-maroon-deep";
const btnGold = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold px-6 py-3 font-semibold text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground";

function Index() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const donate = () => setOpen(true);

  return (
    <div className="bg-background text-foreground">
      {/* Announcement */}
      <div className="bg-maroon-deep text-primary-foreground/90 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <span className="flex min-w-0 items-center gap-1.5"><MapPin className="h-4 w-4 shrink-0 text-gold" /><span className="truncate">Pattukkottai, Thanjavur District, Tamil Nadu</span></span>
          <a href="tel:+919944237828" className="flex shrink-0 items-center gap-1.5 hover:text-gold"><Phone className="h-4 w-4 text-gold" />+91 9944237828</a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-gold"><HandHeart className="h-6 w-6" /></span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-xl font-bold text-primary">Akshaya Dhanam Trust</span>
              <span className="block truncate text-xs text-muted-foreground">அட்சயதானம் அறக்கட்டளை</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map(([l, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium text-foreground/80 transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button onClick={donate} className={`${btnPrimary} px-4 py-2 text-sm`}><Heart className="h-4 w-4" />Donate Now</button>
            <button className="p-2 lg:hidden" aria-label="Menu" onClick={() => setMenu(!menu)}><Menu /></button>
          </div>
        </div>
        {menu && (
          <nav className="flex flex-col border-t border-border px-4 py-2 lg:hidden">
            {NAV.map(([l, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="py-2 font-medium hover:text-primary">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden">
        <img src={heroQueue} alt="Volunteers serving hot meals to elders and neighbours on a Pattukkottai street" width={1280} height={796} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:py-40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">அன்னதானம் · Annadhanam</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-7xl">
            Serving with Compassion. Sharing Food. <span className="text-gold">Building Hope.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Providing daily food and dignified care to poor, abandoned elderly people in Pattukkottai.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={donate} className={btnPrimary}><Utensils className="h-5 w-5" />Support Daily Meals</button>
            <a href="#about" className={btnGold}>Our Story</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Users, "5 → 50+", "Friends grown into Active Members & Volunteers"],
            [Utensils, "Daily", "Nutritious Meals Delivered"],
            [MapPin, "Pattukkottai", "& Surrounding Areas"],
            [Home, "1 Dream", "A Safe Old-Age Home"],
          ].map(([Icon, big, small], i) => {
            const I = Icon as typeof Users;
            return (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-warm)] transition hover:-translate-y-1">
                <I className="h-7 w-7 text-gold transition group-hover:scale-110" />
                <div className="mt-3 font-display text-3xl font-bold text-primary">{big as string}</div>
                <p className="text-sm text-muted-foreground">{small as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Story */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div className="relative">
          <img src={storyServing} alt="Trust volunteers ladling meals from steel pots for elderly people in Pattukkottai" loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-warm)]" />
          <div className="absolute -bottom-6 right-0 max-w-[16rem] rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl sm:right-8">
            <div className="font-display text-4xl font-bold text-gold">5 → 50</div>
            <p className="text-sm">School friends who became a community</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Us</p>
          <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">From Five Friends to a Community</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            It began with five school friends from Pattukkottai who could not look away from the elderly in our town —
            people left alone, hungry and forgotten. We started by sharing a simple meal and a few minutes of conversation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Today, that small act has grown into a network of more than 50 members and volunteers who deliver daily meals,
            check in on our elders, and stand beside them with care.
          </p>
          <blockquote className="mt-8 border-l-4 border-gold bg-accent/50 p-6 font-display text-2xl italic leading-snug text-primary">
            “Helping someone does not always mean giving money—it starts with care, time, and dignity.”
          </blockquote>
        </div>
      </section>

      {/* Initiative */}
      <section id="initiative" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Initiative</p>
            <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">How We Serve</h2>
          </div>
          <img src={postOfficeDrive} alt="Trust volunteers distributing meals and drinking water outside the India Post office in Pattukkottai" loading="lazy" width={1600} height={900} className="mt-12 w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [Utensils, "Daily Nutritious Meals", "Serving elderly who are poor, abandoned, or without family support — a warm, healthy meal every day."],
              [Heart, "Emotional & Moral Support", "Spending time, offering companionship, and bringing peace to those who feel alone."],
              [Sprout, "Community Volunteering", "Field activities, sharing skills, and engaging local youth in the spirit of service."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Heart;
              return (
                <div key={t as string} className="group rounded-3xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[var(--shadow-warm)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-gold transition group-hover:bg-gold group-hover:text-primary"><I className="h-7 w-7" /></span>
                  <h3 className="mt-6 text-2xl font-bold text-primary">{t as string}</h3>
                  <p className="mt-3 text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Vision & Dream</p>
          <h2 className="mx-auto mt-2 max-w-3xl text-4xl font-bold sm:text-6xl">A Safe Old-Age Home for Those Who Have No One</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Our long-term goal is to establish a dedicated home where every elder lives with food, shelter and dignity — surrounded by people who care.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[[Utensils, "Food"], [Home, "Shelter"], [HandHeart, "Care"], [Shield, "Dignity"], [Smile, "Companionship"], [Sun, "Peace"]].map(([Icon, l]) => {
              const I = Icon as typeof Heart;
              return (
                <div key={l as string} className="rounded-2xl border border-gold/30 bg-maroon-deep/40 p-6 transition hover:-translate-y-1 hover:border-gold hover:bg-maroon-deep">
                  <I className="mx-auto h-8 w-8 text-gold" />
                  <div className="mt-3 font-display text-xl font-semibold">{l as string}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get involved / donate */}
      <section id="involved" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Get Involved</p>
          <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">Your kindness feeds an elder today</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every rupee goes toward daily meals and care. You can also give your time — join us as a volunteer in Pattukkottai.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={donate} className={btnPrimary}><Heart className="h-5 w-5" />Donate Now</button>
            <a href="tel:+919944237828" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"><Phone className="h-5 w-5" />Volunteer With Us</a>
          </div>
        </div>
        <DonationCard />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-maroon-deep text-primary-foreground/85">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-center font-display text-2xl italic text-gold sm:text-3xl">
            Together, let us share food. Together, let us share care. Together, let us build hope.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl font-bold text-primary-foreground">Akshaya Dhanam Trust</div>
              <div className="text-sm">அட்சயதானம் அறக்கட்டளை</div>
              <p className="mt-3 text-sm">Legal name: ATCHAYATHANAM TRUST. Serving poor and abandoned elderly with daily meals and dignified care.</p>
            </div>
            <div>
              <div className="font-semibold text-gold">Address</div>
              <p className="mt-2 flex gap-2 text-sm"><MapPin className="h-4 w-4 shrink-0 text-gold" />No. 25, Sunnambukara Street, Pattukkottai Town, Thanjavur District, Tamil Nadu</p>
            </div>
            <div>
              <div className="font-semibold text-gold">Contact</div>
              <a href="tel:+919944237828" className="mt-2 flex items-center gap-2 text-sm hover:text-gold"><Phone className="h-4 w-4 text-gold" />+91 9944237828</a>
              <a href="mailto:atchayadhaanamtrust@gmail.com" className="mt-2 flex items-center gap-2 text-sm hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" /><span className="truncate">atchayadhaanamtrust@gmail.com</span></a>
              <p className="mt-2 flex items-center gap-2 text-sm"><Leaf className="h-4 w-4 text-gold" />UPI: {UPI_ID}</p>
            </div>
          </div>
          <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs">© {new Date().getFullYear()} Akshaya Dhanam Trust. All rights reserved.</div>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-secondary p-2 text-primary hover:bg-accent"><X className="h-4 w-4" /></button>
            <DonationCard />
          </div>
        </div>
      )}
    </div>
  );
}

function DonationCard() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-gold bg-card p-6 shadow-[var(--shadow-warm)] sm:p-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Scan & Donate via UPI</p>
        <h3 className="mt-1 text-3xl font-bold text-primary">Support Daily Meals</h3>
      </div>
      <div className="mx-auto mt-6 w-fit rounded-2xl border border-border bg-cream p-4">
        <QRCodeSVG value={UPI_URI} size={180} fgColor="#6B1D1D" bgColor="transparent" />
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">GPay · PhonePe · Paytm · BHIM</p>
      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-3 rounded-xl bg-secondary px-4 py-3">
          <div className="min-w-0"><dt className="text-xs text-muted-foreground">UPI ID</dt><dd className="truncate font-semibold text-primary">{UPI_ID}</dd></div>
          <button onClick={copy} className="flex shrink-0 items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-maroon-deep">
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-secondary px-4 py-3"><dt className="text-xs text-muted-foreground">Bank</dt><dd className="font-semibold">Federal Bank</dd></div>
          <div className="rounded-xl bg-secondary px-4 py-3"><dt className="text-xs text-muted-foreground">Account Holder</dt><dd className="font-semibold">ATCHAYATHANAM TRUST</dd></div>
        </div>
        <div className="rounded-xl bg-secondary px-4 py-3 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Registered address:</span> No. 25, Sunnambukara Street, Pattukkottai Town, Thanjavur District, Tamil Nadu
        </div>
      </dl>
    </div>
  );
}
