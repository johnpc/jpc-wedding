'use client';

import { useState, useEffect } from 'react';
import { registerServiceWorker } from './sw-register';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Register service worker for PWA
    registerServiceWorker();
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">J & E</div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>Our Story</a></li>
            <li><a href="#details" className="nav-link" onClick={() => scrollToSection('details')}>Details</a></li>
            <li><a href="#schedule" className="nav-link" onClick={() => scrollToSection('schedule')}>Schedule</a></li>
            <li><a href="#gallery" className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#rsvp" className="nav-link" onClick={() => scrollToSection('rsvp')}>RSVP</a></li>
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
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a href="#home" className="mobile-menu-link" onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li className="mobile-menu-item">
            <a href="#about" className="mobile-menu-link" onClick={() => scrollToSection('about')}>Our Story</a>
          </li>
          <li className="mobile-menu-item">
            <a href="#details" className="mobile-menu-link" onClick={() => scrollToSection('details')}>Details</a>
          </li>
          <li className="mobile-menu-item">
            <a href="#schedule" className="mobile-menu-link" onClick={() => scrollToSection('schedule')}>Schedule</a>
          </li>
          <li className="mobile-menu-item">
            <a href="#gallery" className="mobile-menu-link" onClick={() => scrollToSection('gallery')}>Gallery</a>
          </li>
          <li className="mobile-menu-item">
            <a href="#rsvp" className="mobile-menu-link" onClick={() => scrollToSection('rsvp')}>RSVP</a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-text">John & Emily</h1>
          <p className="hero-subtitle">are getting married!</p>
          <p className="hero-date">July 11, 2026 • Ann Arbor, Michigan</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('rsvp')}>
              RSVP Now
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('details')}>
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
                Our love story began in the most unexpected way. What started as a chance encounter 
                has blossomed into a beautiful journey of love, laughter, and endless adventures. 
                We&apos;ve shared countless memories, supported each other through life&apos;s ups and downs, 
                and discovered that we&apos;re truly better together.
              </p>
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="John and Emily together" 
              className="about-image"
              width={800}
              height={400}
            />
          </div>
          
          <div className="about-content">
            <Image 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Engagement photo" 
              className="about-image"
              width={800}
              height={400}
            />
            <div className="about-text">
              <h3>The Proposal</h3>
              <p>
                After years of building our life together, John knew it was time to take the next step. 
                On a beautiful evening surrounded by the places and people we love most, he got down 
                on one knee and asked Emily to be his wife. Of course, she said yes! Now we can&apos;t 
                wait to celebrate this next chapter with all of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container">
          <h2 className="section-title">Wedding Details</h2>
          <div className="details-grid">
            <div className="detail-card card">
              <div className="detail-icon">📅</div>
              <h3 className="detail-title">When</h3>
              <div className="detail-info">
                <p><strong>Saturday, July 11, 2026</strong></p>
                <p>Ceremony: 4:00 PM</p>
                <p>Reception: 6:00 PM</p>
              </div>
            </div>
            
            <div className="detail-card card">
              <div className="detail-icon">📍</div>
              <h3 className="detail-title">Where</h3>
              <div className="detail-info">
                <p><strong>Circ</strong></p>
                <p>210 S 1st St</p>
                <p>Ann Arbor, MI 48104</p>
              </div>
            </div>
            
            <div className="detail-card card">
              <div className="detail-icon">🚗</div>
              <h3 className="detail-title">Parking</h3>
              <div className="detail-info">
                <p>Free parking available in the lot across the street from the venue.</p>
                <p>Additional street parking is available nearby.</p>
              </div>
            </div>
            
            <div className="detail-card card">
              <div className="detail-icon">👗</div>
              <h3 className="detail-title">Dress Code</h3>
              <div className="detail-info">
                <p><strong>Semi-Formal</strong></p>
                <p>Cocktail attire encouraged</p>
                <p>Colors: Earth tones preferred</p>
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
                Please arrive early to find parking and get seated. Light refreshments will be available.
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">4:00 PM</div>
              <div className="timeline-title">Wedding Ceremony</div>
              <div className="timeline-description">
                Join us as we exchange vows and begin our journey as husband and wife.
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">4:30 PM</div>
              <div className="timeline-title">Cocktail Hour</div>
              <div className="timeline-description">
                Enjoy drinks and appetizers while we take photos. Mingle with other guests!
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">6:00 PM</div>
              <div className="timeline-title">Reception Begins</div>
              <div className="timeline-description">
                Dinner will be served followed by dancing and celebration into the evening.
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">7:00 PM</div>
              <div className="timeline-title">First Dance & Toasts</div>
              <div className="timeline-description">
                Our first dance as a married couple, followed by heartfelt toasts from family and friends.
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">11:00 PM</div>
              <div className="timeline-title">Last Dance</div>
              <div className="timeline-description">
                The celebration continues until the last song. Thank you for celebrating with us!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            A collection of memories from our time together
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 1" 
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 2" 
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 3" 
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 4" 
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 5" 
                className="gallery-image"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-item">
              <Image 
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="John and Emily memory 6" 
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
            We can&apos;t wait to celebrate with you! Please let us know if you&apos;ll be joining us.
          </p>
          
          <form className="rsvp-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input type="email" className="form-input" required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Will you attend? *</label>
                <select className="form-select" required>
                  <option value="">Please select</option>
                  <option value="yes">Yes, I&apos;ll be there!</option>
                  <option value="no">Sorry, can&apos;t make it</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Number of Guests</label>
                <select className="form-select">
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Dietary Restrictions</label>
              <input type="text" className="form-input" placeholder="Any allergies or dietary needs?" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Special Message</label>
              <textarea 
                className="form-textarea" 
                placeholder="Share your excitement or well wishes!"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Send RSVP
            </button>
          </form>
        </div>
      </section>

      {/* Registry Section */}
      <section className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container">
          <h2 className="section-title">Wedding Registry</h2>
          <p className="section-subtitle">
            Your presence is the greatest gift, but if you&apos;d like to celebrate with a gift, 
            we&apos;ve registered at a few of our favorite places.
          </p>
          
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Target</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                Home essentials and everyday items
              </p>
              <a href="#" className="btn-primary">View Registry</a>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Williams Sonoma</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                Kitchen and cooking essentials
              </p>
              <a href="#" className="btn-primary">View Registry</a>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Honeymoon Fund</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                Help us create memories on our honeymoon
              </p>
              <a href="#" className="btn-primary">Contribute</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">John & Emily</h3>
          <p className="footer-text">
            Thank you for being part of our love story. We can&apos;t wait to celebrate with you!
          </p>
          <div className="footer-social">
            <a href="#" className="social-link">📧</a>
            <a href="#" className="social-link">📱</a>
          </div>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
            July 11, 2026 • Ann Arbor, Michigan
          </p>
        </div>
      </footer>
    </>
  );
}
