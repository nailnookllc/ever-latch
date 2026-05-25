import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Icon({ children, className = "" }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </span>
  );
}

function SparkleIcon({ className = "" }) {
  return <Icon className={className}>✦</Icon>;
}

function ChainIcon({ className = "" }) {
  return <Icon className={className}>∞</Icon>;
}

function HeartIcon({ className = "" }) {
  return <Icon className={className}>♡</Icon>;
}

function PinIcon({ className = "" }) {
  return <Icon className={className}>⌖</Icon>;
}

function CalendarIcon({ className = "" }) {
  return <Icon className={className}>◷</Icon>;
}

function InstagramTextIcon({ className = "" }) {
  return <Icon className={className}>@</Icon>;
}

function PhotoCarousel({ photos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  const activePhoto = photos[activeIndex];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#151308]/10 bg-white/45 p-3 shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#fbf8f5]">
        <img
          src={activePhoto.src}
          alt={activePhoto.alt}
          className="h-full w-full object-cover transition duration-700"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151308]/70 to-transparent p-5 text-[#f7f1ec]">
          <p className="font-serif text-2xl">{activePhoto.title}</p>
          <p className="mt-1 text-sm text-[#f7f1ec]/80">{activePhoto.caption}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 px-1">
        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)}
          className="rounded-full border border-[#151308]/15 px-4 py-2 text-sm hover:bg-white/70"
          aria-label="Previous photo"
        >
          ←
        </button>

        <div className="flex gap-2">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-[#151308]" : "bg-[#151308]/25"}`}
              aria-label={`Show photo ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
          className="rounded-full border border-[#151308]/15 px-4 py-2 text-sm hover:bg-white/70"
          aria-label="Next photo"
        >
          →
        </button>
      </div>
    </div>
  );
}

export const everLatchWebsiteTestCases = [
  {
    name: "renders primary brand name",
    expectedText: "EVER LATCH",
  },
  {
    name: "renders permanent jewelry service categories",
    expectedServices: ["Bracelets", "Anklets", "Necklaces", "Charms + Connectors"],
  },
  {
    name: "does not rely on lucide-react CDN icons",
    expectedExternalIconImports: false,
  },
  {
    name: "renders homepage photo carousel",
    expectedComponent: "PhotoCarousel",
  },
];

export default function EverLatchWebsite() {
  const services = [
    { name: "Bracelets", text: "Classic permanent jewelry, custom-fit and welded seamlessly." },
    { name: "Anklets", text: "A timeless add-on for vacations, summer days, and everyday wear." },
    { name: "Necklaces", text: "Delicate chains layered your way with a clean, effortless finish." },
    { name: "Charms + Connectors", text: "Personalize your piece with a charm, birthstone, or statement connector." },
  ];

  const carouselPhotos = [
    {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      alt: "Close-up of delicate gold jewelry",
      title: "Custom-fit pieces",
      caption: "Replace this with your own permanent jewelry photo.",
    },
    {
      src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
      alt: "Gold jewelry detail",
      title: "Bracelets, anklets + charms",
      caption: "Use this spot for your chain, charm, or welding photos.",
    },
    {
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      alt: "Layered jewelry styling",
      title: "A jewelry experience",
      caption: "Perfect for pop-ups, events, and appointment photos.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1ec] text-[#151308]">
      <header className="sticky top-0 z-50 border-b border-[#151308]/10 bg-[#f7f1ec]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="font-serif text-2xl tracking-[0.28em]">EVER LATCH</div>
          <nav className="hidden items-center gap-8 text-sm tracking-[0.18em] md:flex">
            <a href="#services">Services</a>
            <a href="#events">Pop-Ups</a>
            <a href="#about">About</a>
            <a href="#book">Book</a>
          </nav>
          <Button className="rounded-full bg-[#151308] px-6 text-[#f7f1ec] hover:bg-[#151308]/90">Book Now</Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[#151308]/70">
              <SparkleIcon className="h-4 w-4 text-lg leading-none" /> Permanent Jewelry in Santa Barbara
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-wide md:text-7xl">
              Timeless, seamless, yours.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#151308]/75">
              Custom-fit permanent bracelets, anklets, necklaces, and charms welded with intention for everyday wear, special moments, and private events.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-[#151308] px-8 py-6 text-[#f7f1ec] hover:bg-[#151308]/90">
                Book Your Appointment
              </Button>
              <Button variant="outline" className="rounded-full border-[#151308]/30 bg-transparent px-8 py-6 hover:bg-white/50">
                View Pop-Up Options
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <PhotoCarousel photos={carouselPhotos} />
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#151308]/60">Services</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Choose your piece</h2>
            </div>
            <p className="max-w-md text-[#151308]/70">Each piece is custom sized, styled with you, and welded closed for a clasp-free finish.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="rounded-3xl border-[#151308]/10 bg-white/45 shadow-sm">
                <CardContent className="p-6">
                  <HeartIcon className="mb-6 h-5 w-5 text-2xl leading-none" />
                  <h3 className="font-serif text-2xl">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#151308]/65">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#151308] p-8 text-[#f7f1ec] md:col-span-2">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f7f1ec]/60">The Experience</p>
            <h2 className="mt-4 font-serif text-4xl">A jewelry moment made personal.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#f7f1ec]/75">
              Pick your chain, add a charm or connector, get custom sized, and leave with a delicate piece that feels effortless, intentional, and completely yours.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#151308]/10 bg-white/45 p-8">
            <PinIcon className="mb-5 h-6 w-6 text-3xl leading-none" />
            <h3 className="font-serif text-3xl">Santa Barbara</h3>
            <p className="mt-4 leading-7 text-[#151308]/65">Available by appointment with pop-ups and private events throughout the area.</p>
          </div>
        </div>
      </section>

      <section id="events" className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#151308]/10 bg-white/45 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <CalendarIcon className="mb-5 h-8 w-8 text-4xl leading-none" />
              <p className="text-sm uppercase tracking-[0.28em] text-[#151308]/60">Pop-Ups + Private Events</p>
              <h2 className="mt-4 font-serif text-4xl">Bring Ever Latch to your event.</h2>
            </div>
            <div className="space-y-4 text-[#151308]/70">
              <p>Perfect for bridal parties, birthdays, wineries, boutiques, girls’ nights, sorority events, and brand activations.</p>
              <p>We bring the jewelry bar, welding setup, and styling support. You bring the guests, the vibe, and the reason to celebrate.</p>
              <Button className="mt-3 rounded-full bg-[#151308] px-8 py-6 text-[#f7f1ec] hover:bg-[#151308]/90">Inquire About an Event</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] border border-[#151308]/10 bg-[#fbf8f5] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#151308]/60">About</p>
            <h2 className="mt-4 font-serif text-4xl">Jewelry that latches onto a memory.</h2>
          </div>
          <p className="text-lg leading-9 text-[#151308]/70">
            Ever Latch was created as an elevated permanent jewelry experience — feminine, modern, and meaningful without feeling overdone. Every piece is designed to be simple enough for daily wear and special enough to mark a moment.
          </p>
        </div>
      </section>

      <section id="book" className="px-5 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#151308] p-10 text-center text-[#f7f1ec] md:p-14">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f7f1ec]/60">Ready to latch?</p>
          <h2 className="mt-4 font-serif text-5xl">Book your jewelry appointment.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#f7f1ec]/75">
            Add your booking link here so clients can reserve bracelets, anklets, necklaces, charms, or event appointments.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="rounded-full bg-[#f7f1ec] px-8 py-6 text-[#151308] hover:bg-white">Book Now</Button>
            <Button variant="outline" className="rounded-full border-[#f7f1ec]/30 bg-transparent px-8 py-6 text-[#f7f1ec] hover:bg-[#f7f1ec]/10">
              <InstagramTextIcon className="mr-2 h-4 w-4 text-lg leading-none" /> Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#151308]/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-[#151308]/60 md:flex-row">
          <p>© Ever Latch Permanent Jewelry</p>
          <p>Timeless • Seamless • Yours</p>
        </div>
      </footer>
    </div>
  );
}
