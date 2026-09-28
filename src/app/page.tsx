"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Play,
  X,
} from "lucide-react";

const dishes = [
  {
    number: "01",
    name: "The good eggs",
    detail: "Brown butter, sourdough, a little bit of magic",
    price: "14",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    alt: "Soft eggs and toast on a ceramic plate",
    className: "dish-photo-eggs",
  },
  {
    number: "02",
    name: "Pasta, properly",
    detail: "Hand-rolled, parmesan snow, the last bite is yours",
    price: "22",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    alt: "Fresh pasta with herbs and parmesan",
    className: "dish-photo-pasta",
  },
  {
    number: "03",
    name: "A sweet ending",
    detail: "Today's fruit, crème fraîche, no sharing required",
    price: "12",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    alt: "A delicate seasonal dessert topped with berries",
    className: "dish-photo-dessert",
  },
];

const filmUrl =
  "https://videos.pexels.com/video-files/31631562/13476222_3840_2160_25fps.mp4";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!filmOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFilmOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [filmOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement-bar">
        <span>GOOD FOOD. GOOD MOOD. NO OCCASION NEEDED.</span>
        <span className="announcement-right">OPEN ALL WEEK · 9 AM—LATE</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maison Aurél home">
          maison<span>aurél</span><i>.</i>
        </a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#story" onClick={closeMenu}>Our little story</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-booking" href="#visit" onClick={closeMenu}>
            Book a table <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> YOUR NEW OLD FAVOURITE</p>
          <h1>A little more<br />pleasure,<br /><em>please.</em></h1>
          <p className="hero-description">
            The sort of place where lunch turns into dinner, and nobody minds one bit.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#visit">
              Come on in <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#menu">See what&apos;s cooking <ArrowDown size={15} /></a>
          </div>
          <div className="hero-footnote"><span>48°51&apos; N&nbsp; 2°21&apos; E</span><span>PARIS, FRANCE</span></div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90"
              alt="Candlelit restaurant table set for a long dinner"
              fetchPriority="high"
            />
          </div>
          <div className="hero-stamp" aria-label="Made with feeling, served with love">
            <span>MADE WITH FEELING</span><b>✳</b><span>SERVED WITH LOVE</span>
          </div>
          <div className="hero-image-caption"><span>AN EVENING AT MAISON AURÉL</span><span>01 / 03</span></div>
          <div className="hero-side-note">A TABLE FOR EVERY KIND OF DAY</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>STAY A LITTLE LONGER <i>✳</i> EAT SOMETHING LOVELY <i>✳</i></span>
          ))}
        </div>
      </div>

      <section className="menu-section section-pad" id="menu">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> A FEW HOUSE FAVOURITES</p>
            <h2>Made to be<br /><em>remembered.</em></h2>
          </div>
          <div className="menu-intro">
            <p>Little plates, big feelings. Our menu follows the seasons, trusts the market, and always leaves room for dessert.</p>
            <a className="text-link" href="#visit">Explore the whole menu <ArrowRight size={15} /></a>
          </div>
        </div>

        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className={`dish-item ${dish.className}`} key={dish.number} data-reveal style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}>
              <div className="dish-image-wrap">
                <img src={dish.image} alt={dish.alt} loading="lazy" />
                <span className="dish-number">{dish.number}</span>
                <span className="dish-price">€{dish.price}</span>
              </div>
              <div className="dish-caption">
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-footnote"><span>ALWAYS SEASONAL, NEVER SERIOUS</span><span>MENU CHANGES WITH THE MARKET ↗</span></div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image-wrap" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
            alt="Friends sharing a relaxed dinner around a restaurant table"
            loading="lazy"
          />
          <span className="story-image-label">A GOOD TABLE MAKES ROOM FOR EVERYONE</span>
        </div>
        <div className="story-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> PULL UP A CHAIR</p>
          <h2>Food tastes<br />better when<br /><em>it feels like<br />somewhere.</em></h2>
          <p className="story-paragraph">We opened Maison Aurél with one small idea: make the kind of place you wish was around the corner. Market-fresh cooking, a properly poured glass, and a table that&apos;s yours for as long as you like.</p>
          <a className="text-link story-link" href="#visit">A little more about us <ArrowRight size={15} /></a>
          <span className="story-signature">à bientôt, <i>A.</i></span>
        </div>
      </section>

      <section className="film-section" aria-label="A glimpse inside Maison Aurél">
        <div className="film-heading" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> A LITTLE LOOK AROUND</p>
          <h2>Good things<br />happen <em>here.</em></h2>
        </div>
        <button className="film-preview" type="button" onClick={() => setFilmOpen(true)} aria-label="Play a film from Maison Aurél">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt=""
            loading="lazy"
          />
          <span className="film-play"><Play size={20} fill="currentColor" /></span>
          <span className="film-label"><span>MAISON AURÉL, AFTER HOURS</span><span>00:38&nbsp; ↗</span></span>
          <span className="film-grain" />
        </button>
        <div className="film-aside"><span>THE LIGHT GETS SOFTER.</span><span>THE WINE GETS BETTER.</span><span>YOU GET THE IDEA.</span></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-main" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR TABLE IS WAITING</p>
          <h2>See you<br /><em>around?</em></h2>
          <a className="button button-coral" href="mailto:bonjour@maisonaurel.fr?subject=Table%20for%20two">
            Save me a seat <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="visit-details" data-reveal>
          <div className="visit-detail">
            <span className="detail-icon"><MapPin size={18} strokeWidth={1.6} /></span>
            <div><h3>Come find us</h3><p>18 Rue des Petits Champs<br />75002 Paris, France</p><a href="https://maps.google.com/?q=18+Rue+des+Petits+Champs+Paris" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13} /></a></div>
          </div>
          <div className="visit-detail">
            <span className="detail-icon"><Clock3 size={18} strokeWidth={1.6} /></span>
            <div><h3>We&apos;re here for you</h3><p>Monday—Sunday<br />9:00 am until late</p><span className="open-status"><i /> OPEN TODAY</span></div>
          </div>
        </div>
        <div className="visit-doodle" aria-hidden="true">bon<br />appétit<span>✳</span></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">maison<span>aurél</span><i>.</i></a>
        <span className="footer-note">A GOOD PLACE TO BE.</span>
        <div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><span>© MAISON AURÉL 2025</span></div>
      </footer>

      {filmOpen && (
        <div className="film-modal" role="dialog" aria-modal="true" aria-label="Maison Aurél film" onClick={() => setFilmOpen(false)}>
          <button className="modal-close" type="button" aria-label="Close video" onClick={() => setFilmOpen(false)}><X size={23} /></button>
          <video className="modal-video" src={filmUrl} poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85" controls autoPlay playsInline onClick={(event) => event.stopPropagation()}>
            Your browser does not support embedded video.
          </video>
          <span className="modal-caption">A LITTLE LOOK AROUND · MAISON AURÉL</span>
        </div>
      )}
    </main>
  );
}