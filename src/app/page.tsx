"use client";

import { useState, useEffect } from "react";
import { registerServiceWorker } from "./sw-register";
import Image from "next/image";
import RsvpForm from "./components/RsvpForm";
import SongRequestForm from "./components/SongRequestForm";
import CountdownTimer from "./components/CountdownTimer";
import MapLinks from "../components/MapLinks";
import CalendarLinks from "../components/CalendarLinks";
import ParkingMapLinks from "../components/ParkingMapLinks";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Register service worker for PWA
    registerServiceWorker();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">J & E</div>
          <ul className="nav-menu">
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#details"
                className="nav-link"
                onClick={() => scrollToSection("details")}
              >
                Details
              </a>
            </li>
            <li>
              <a
                href="#hotels"
                className="nav-link"
                onClick={() => scrollToSection("hotels")}
              >
                Hotels
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="nav-link"
                onClick={() => scrollToSection("schedule")}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="nav-link"
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#rsvp"
                className="nav-link"
                onClick={() => scrollToSection("rsvp")}
              >
                RSVP
              </a>
            </li>
            <li>
              <a
                href="#song-requests"
                className="nav-link"
                onClick={() => scrollToSection("song-requests")}
              >
                Song Requests
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a
              href="#home"
              className="mobile-menu-link"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#about"
              className="mobile-menu-link"
              onClick={() => scrollToSection("about")}
            >
              Our Story
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#details"
              className="mobile-menu-link"
              onClick={() => scrollToSection("details")}
            >
              Details
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#hotels"
              className="mobile-menu-link"
              onClick={() => scrollToSection("hotels")}
            >
              Hotels
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#schedule"
              className="mobile-menu-link"
              onClick={() => scrollToSection("schedule")}
            >
              Schedule
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#gallery"
              className="mobile-menu-link"
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#rsvp"
              className="mobile-menu-link"
              onClick={() => scrollToSection("rsvp")}
            >
              RSVP
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              href="#song-requests"
              className="mobile-menu-link"
              onClick={() => scrollToSection("song-requests")}
            >
              Song Requests
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-text">John & Emily</h1>
          <p className="hero-subtitle">are getting married!</p>
          <p className="hero-date">July 11, 2026 • Ann Arbor, Michigan</p>

          <CountdownTimer />

          <div className="hero-cta">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("rsvp")}
            >
              RSVP Now
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("details")}
            >
              Wedding Details
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>How We Met</h3>
              <p>
                We grew up in the same town and ran in the same circles in high 
                school, but didn&apos;t reconnect until after college when Emily 
                moved to Ann Arbor. What started as catching up over coffee has 
                blossomed into a beautiful journey of love, laughter, and endless 
                adventures. We&apos;ve shared countless memories, supported each 
                other through life&apos;s ups and downs, and discovered that 
                we&apos;re truly better together.
              </p>
            </div>
            <Image
              src="/how-we-met-photo.jpeg"
              alt="John and Emily together"
              className="about-image"
              width={800}
              height={400}
            />
          </div>

          <div className="about-content">
            <Image
              src="/engagement-photo.jpeg"
              alt="Engagement photo"
              className="about-image"
              width={800}
              height={400}
            />
            <div className="about-text">
              <h3>The Proposal</h3>
              <p>
                After years of building our life together, John knew it was time
                to take the next step. He planned the perfect proposal in Iceland,
                hoping to pop the question under the magical northern lights. But
                when the moment came, he fumbled the opportunity! Not to be deterred,
                John found an even more spectacular setting at one of Iceland&apos;s
                magnificent waterfalls and asked Emily to be his wife. Of course,
                she said yes! Now we can&apos;t wait to celebrate this next chapter
                with all of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section
        id="details"
        className="section"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container">
          <h2 className="section-title">Wedding Details</h2>
          <div className="details-grid">
            <div className="detail-card card">
              <div className="detail-icon">📅</div>
              <h3 className="detail-title">When</h3>
              <div className="detail-info">
                <CalendarLinks />
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">📍</div>
              <h3 className="detail-title">Where</h3>
              <div className="detail-info">
                <MapLinks />
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">🚗</div>
              <h3 className="detail-title">Parking Structure</h3>
              <div className="detail-info">
                <ParkingMapLinks
                  name="Parking Structure"
                  address="215 W Washington St, Ann Arbor, MI 48104"
                  note="Free if you leave after 12am (parking not enforced on Sundays)"
                />
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">🅿️</div>
              <h3 className="detail-title">Free Parking</h3>
              <div className="detail-info">
                <ParkingMapLinks
                  name="Free Parking Lot"
                  address="216 W William St, Ann Arbor, MI 48104"
                />
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">📸</div>
              <h3 className="detail-title">Photo Sharing</h3>
              <div className="detail-info">
                <p style={{ marginBottom: "1rem" }}>
                  Upload and view photos from the wedding.
                </p>
                <a
                  href="https://partypics.jpc.io/wedding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Wedding Photo Gallery
                </a>
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">👗</div>
              <h3 className="detail-title">Dress Code</h3>
              <div className="detail-info">
                <p>
                  <strong>Semi-Formal</strong>
                </p>
                <p>Cocktail attire encouraged</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Recommendations */}
      <section id="hotels" className="section">
        <div className="container">
          <h2 className="section-title">Where to Stay</h2>
          <p className="section-subtitle">
            Recommended hotels for out-of-town guests
          </p>
          <div className="details-grid">
            <div className="detail-card card">
              <div className="detail-icon">🏨</div>
              <h3 className="detail-title">The Graduate Ann Arbor</h3>
              <div className="detail-info">
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Walking distance to venue</strong>
                </p>
                <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
                  615 E Huron St, Ann Arbor, MI 48104
                </p>
                <a
                  href="https://www.graduatehotels.com/ann-arbor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="detail-card card">
              <div className="detail-icon">🏨</div>
              <h3 className="detail-title">Wyndham Garden Ann Arbor</h3>
              <div className="detail-info">
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Near freeway access</strong>
                </p>
                <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
                  2900 Jackson Ave, Ann Arbor, MI 48103
                </p>
                <a
                  href="https://www.wyndhamhotels.com/wyndham-garden/ann-arbor-michigan/wyndham-garden-ann-arbor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="detail-card card" style={{ opacity: 0.6 }}>
              <div className="detail-icon">⚠️</div>
              <h3 className="detail-title">Not Recommended</h3>
              <div className="detail-info">
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Embassy Hotel</strong>
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  May seem like a good deal, but we strongly advise against staying here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="section">
        <div className="container">
          <h2 className="section-title">Wedding Day Schedule</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">3:30 PM</div>
              <div className="timeline-title">Guest Arrival</div>
              <div className="timeline-description">
                Please arrive early to find parking and get seated. Light
                refreshments will be available.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">4:00 PM</div>
              <div className="timeline-title">Wedding Ceremony</div>
              <div className="timeline-description">
                Join us as we exchange vows and begin our journey as husband and
                wife.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">4:30 PM</div>
              <div className="timeline-title">Cocktail Hour</div>
              <div className="timeline-description">
                Enjoy drinks and appetizers while we take photos. Mingle with
                other guests!
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">6:00 PM</div>
              <div className="timeline-title">Reception Begins</div>
              <div className="timeline-description">
                Dinner will be served followed by dancing and celebration into
                the evening.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">7:00 PM</div>
              <div className="timeline-title">First Dance & Toasts</div>
              <div className="timeline-description">
                Our first dance as a married couple, followed by heartfelt
                toasts from family and friends.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">11:00 PM</div>
              <div className="timeline-title">Last Dance</div>
              <div className="timeline-description">
                The celebration continues until the last song. Thank you for
                celebrating with us!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="section"
        style={{ background: "var(--color-sage)" }}
      >
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            A collection of memories from our time together
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/john-emily-together.jpeg"
                alt="John and Emily memory 1"
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/engagement-photo.jpeg"
                alt="John and Emily memory 2"
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/couple-photo-3.jpeg"
                alt="John and Emily memory 3"
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image
                src="/couple-photo-4.jpeg"
                alt="John and Emily memory 4"
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="section">
        <div className="container">
          <h2 className="section-title">RSVP</h2>
          <p className="section-subtitle">
            We can&apos;t wait to celebrate with you! Please let us know if
            you&apos;ll be joining us.
          </p>

          <RsvpForm />
        </div>
      </section>

      {/* Song Requests Section */}
      <section
        id="song-requests"
        className="section"
        style={{ background: "var(--color-peach)" }}
      >
        <div className="container">
          <h2 className="section-title">Song Requests</h2>
          <p className="section-subtitle">
            Help us create the perfect playlist for our reception! Request your
            favorite songs and we&apos;ll do our best to play them.
          </p>

          <SongRequestForm />
        </div>
      </section>

      {/* Vacation Fund Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Santorini Vacation Fund</h2>
          <p className="section-subtitle">
            Your presence is the greatest gift, but if you&apos;d like to
            celebrate with us, help us fund our dream honeymoon to Santorini!
          </p>

          <div style={{ alignItems: "center", gap: "3rem", marginBottom: "3rem", }}>
            <center>
            <div style={{  minWidth: "300px" }}>
                          <h3 style={{ fontSize: "2rem", marginBottom: "2rem", color: "var(--color-primary)", textAlign: "center" }}>
              This Could Be Us! 💙
            </h3>
              <Image
                src="/santorini-vacation-fund.png"
                alt="Beautiful Santorini view"
                width={400}
                height={400}
                style={{ borderRadius: "1rem", boxShadow: "var(--shadow-medium)", objectFit: "cover" }}
              />

            </div>
            </center>
            <div style={{ minWidth: "300px", textAlign: "center" }}>
              <a href="https://fundraise.jpc.io/goal/303574f2-155d-4202-81c6-e710fc78173b" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
                Donate to Santorini Fund
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">John & Emily</h3>
          <p className="footer-text">
            Thank you for being part of our love story. We can&apos;t wait to
            celebrate with you!
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            July 11, 2026 • Ann Arbor, Michigan
          </p>
        </div>
      </footer>
    </>
  );
}
