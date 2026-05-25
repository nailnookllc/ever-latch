import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Icon({ children, className = "" }) {
  return <span aria-hidden="true" className={`icon ${className}`}>{children}</span>;
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
    <div className="carousel-card">
      <div className="carousel-image-wrap">
        <img src={activePhoto.src} alt={activePhoto.alt} className="carousel-image" />
        <div className="carousel-caption">
          <p className="carousel-title">{activePhoto.title}</p>
          <p className="carousel-text">{activePhoto.caption}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)} aria-label="Previous photo">←</button>
        <div className="dots">
          {photos.map((photo, index) => (
            <button key={photo.src} onClick={() => setActiveIndex(index)} className={index === activeIndex ? "dot active" : "dot"} aria-label={`Show photo ${index + 1}`} />
          ))}
        </div>
        <button onClick={() => setActiveIndex((activeIndex + 1) % photos.length)} aria-label="Next photo">→</button>
      </div>
    </div>
  );
}

export default function App() {
  const services = [
    { name: "Bracelets", text: "Classic permanent jewelry, custom-fit and welded seamlessly." },
    { name: "Anklets", text: "A timeless add-on for vacations, summer days, and everyday wear." },
    { name: "Necklaces", text: "Delicate chains layered your way with a clean, effortless finish." },
    { name: "Charms + Connectors", text: "Personalize your piece with a charm, birthstone, or statement connector." },
  ];

  // To use your own carousel photos later, replace these image links with your uploaded image URLs.
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
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <div className="brand">EVER LATCH</div>
          <nav>
            <a href="#services">Services</a>
            <a href="#events">Pop-Ups</a>
            <a href="#about">About</a>
            <a href="#book">Book</a>
          </nav>
          <a className="header-btn" href="#book">Book Now</a>
        </div>
      </header>

      <section className="hero">
        <div className="glow" />
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img className="logo" src="/ever-latch-logo.jpg" alt="Ever Latch logo" />
            <p className="eyebrow"><Icon>✦</Icon> Permanent Jewelry in Santa Barbara</p>
            <h1>Timeless, seamless, yours.</h1>
            <p className="hero-copy">Custom-fit permanent bracelets, anklets, necklaces, and charms welded with intention for everyday wear, special moments, and private events.</p>
            <div className="button-row">
              <a href="#book"><Button>Book Your Appointment</Button></a>
              <a href="#events"><Button variant="outline">View Pop-Up Options</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <PhotoCarousel photos={carouselPhotos} />
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <div>
            <p className="label">Services</p>
            <h2>Choose your piece</h2>
          </div>
          <p>Each piece is custom sized, styled with you, and welded closed for a clasp-free finish.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="card" key={service.name}>
              <Icon className="heart">♡</Icon>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-grid">
        <div className="dark-card">
          <p className="label light">The Experience</p>
          <h2>A jewelry moment made personal.</h2>
          <p>Pick your chain, add a charm or connector, get custom sized, and leave with a delicate piece that feels effortless, intentional, and completely yours.</p>
        </div>
        <div className="card location-card">
          <Icon className="big">⌖</Icon>
          <h3>Santa Barbara</h3>
          <p>Available by appointment with pop-ups and private events throughout the area.</p>
        </div>
      </section>

      <section id="events" className="section">
        <div className="event-box">
          <div>
            <Icon className="big">◷</Icon>
            <p className="label">Pop-Ups + Private Events</p>
            <h2>Bring Ever Latch to your event.</h2>
          </div>
          <div>
            <p>Perfect for bridal parties, birthdays, wineries, boutiques, girls’ nights, sorority events, and brand activations.</p>
            <p>We bring the jewelry bar, welding setup, and styling support. You bring the guests, the vibe, and the reason to celebrate.</p>
            <a href="#book"><Button>Inquire About an Event</Button></a>
          </div>
        </div>
      </section>

      <section id="about" className="section about-grid">
        <div className="soft-card">
          <p className="label">About</p>
          <h2>Jewelry that latches onto a memory.</h2>
        </div>
        <p className="about-copy">Ever Latch was created as an elevated permanent jewelry experience — feminine, modern, and meaningful without feeling overdone. Every piece is designed to be simple enough for daily wear and special enough to mark a moment.</p>
      </section>

      <section id="book" className="section book-section">
        <div className="book-box">
          <p className="label light">Ready to latch?</p>
          <h2>Book your jewelry appointment.</h2>
          <p>Add your booking link here so clients can reserve bracelets, anklets, necklaces, charms, or event appointments.</p>
          <div className="button-row center">
            <a href="https://example.com" target="_blank" rel="noreferrer"><Button variant="outline">Book Now</Button></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Button variant="outline">@ Follow on Instagram</Button></a>
          </div>
        </div>
      </section>

      <footer>
        <p>© Ever Latch Permanent Jewelry</p>
        <p>Timeless • Seamless • Yours</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
