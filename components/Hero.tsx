export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-photo" />
      <div className="hero-deco" />
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Fayetteville, AR · Since 2009
          </div>
          <h1 className="h1">
            We Speak<br />for the <span>Trees.</span>
          </h1>
          <p className="lead--light">
            Premium plant material for landscape professionals. Trees, shrubs, grasses, and
            groundcovers — sourced from the best growers, delivered to your project site.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary btn-lg">Request a Quote</a>
            <a href="#supply" className="btn btn-ghost btn-lg">View Our Supply</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hstat-n">15+</div>
              <div className="hstat-l">Years in Business</div>
            </div>
            <div>
              <div className="hstat-n">500+</div>
              <div className="hstat-l">Species Available</div>
            </div>
            <div>
              <div className="hstat-n">B2B</div>
              <div className="hstat-l">Trade Only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
