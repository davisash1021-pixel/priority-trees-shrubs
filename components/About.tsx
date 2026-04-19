const bullets = [
  {
    icon: '🌱',
    title: 'Direct Grower Relationships',
    desc: 'We source directly from top-tier nurseries across the region, giving you access to quality stock that\'s hard to find elsewhere.',
  },
  {
    icon: '📋',
    title: 'Spec & Quantity Matching',
    desc: 'Tell us your species, caliper, height, and quantity. We\'ll find what you need for your project timeline.',
  },
  {
    icon: '🚚',
    title: 'Reliable Delivery',
    desc: 'We coordinate logistics so your plant material arrives on-site when you need it — not before, not after.',
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.4 }}>
                <path d="M60 10 L90 50 L75 50 L85 80 L65 80 L65 110 L55 110 L55 80 L35 80 L45 50 L30 50 Z" fill="#e8f0df"/>
              </svg>
            </div>
            <div className="about-pill">
              <div className="about-pill-n">2009</div>
              <div className="about-pill-l">Founded</div>
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">Who We Are</span>
            <h2 className="h2">A Family Business Built on Plant Knowledge</h2>
            <p>
              Priority Trees and Shrubs LLC is a family-owned plant material supplier based in
              Fayetteville, Arkansas. We are <strong>not</strong> a tree trimming or removal service —
              we source and supply trees, shrubs, grasses, and groundcovers to landscape professionals.
            </p>
            <p>
              Since 2009, we&apos;ve built lasting relationships with growers across the region so that
              contractors, developers, and municipalities can count on us to deliver the right plant
              at the right spec, on time.
            </p>
            <div className="about-bullets">
              {bullets.map(b => (
                <div key={b.title} className="about-bullet">
                  <div className="about-bullet-icon">{b.icon}</div>
                  <div>
                    <div className="about-bullet-title">{b.title}</div>
                    <div className="about-bullet-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-outline">Work With Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
