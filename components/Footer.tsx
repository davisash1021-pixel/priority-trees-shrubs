import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <Image src="/pts-logo.svg" alt="Priority Trees & Shrubs" width={160} height={56} className="f-brand-logo" />
            <div className="tagline">We Speak for the Trees</div>
            <p>
              Family-owned plant material supplier serving landscape professionals in
              Arkansas and surrounding states since 2009.
            </p>
            <div className="f-socials">
              <a href="#" className="f-social" aria-label="Facebook">f</a>
              <a href="#" className="f-social" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="f-col">
            <h4>Navigation</h4>
            <div className="f-links">
              <a href="#about">About Us</a>
              <a href="#supply">What We Supply</a>
              <a href="#how">How It Works</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="f-col">
            <h4>What We Supply</h4>
            <div className="f-links">
              <a href="#supply">Trees</a>
              <a href="#supply">Shrubs</a>
              <a href="#supply">Grasses & Perennials</a>
              <a href="#supply">Groundcover & Vines</a>
            </div>
          </div>

          <div className="f-col">
            <h4>Contact</h4>
            <div className="f-contact-item">
              <div className="f-contact-icon">📍</div>
              <div className="f-contact-text">
                <strong>Address</strong>
                2345 N Green Acres Rd<br />Fayetteville, AR 72703
              </div>
            </div>
            <div className="f-contact-item">
              <div className="f-contact-icon">📞</div>
              <div className="f-contact-text">
                <strong>Sales</strong>
                <a href="tel:4792008486" style={{ color: 'var(--orange)' }}>479-200-8486</a>
              </div>
            </div>
            <div className="f-contact-item">
              <div className="f-contact-icon">🕐</div>
              <div className="f-contact-text">
                <strong>Hours</strong>
                Mon–Fri · 8am–5pm
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Priority Trees and Shrubs LLC. All rights reserved.</p>
          <div className="f-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
