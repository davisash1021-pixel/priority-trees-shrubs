const testimonials = [
  {
    stars: '★★★★★',
    text: 'Priority Trees has been our go-to supplier for three years running. Their ability to source specific calipers on short notice has saved more than one project timeline.',
    name: 'M. Henderson',
    role: 'Landscape Contractor, NW Arkansas',
    initials: 'MH',
  },
  {
    stars: '★★★★★',
    text: 'Jake and the team know their material. We spec\'d a difficult native plant list and they came back with quality stock we couldn\'t find anywhere else in the region.',
    name: 'S. Crowder',
    role: 'Project Manager, Commercial Development',
    initials: 'SC',
  },
  {
    stars: '★★★★★',
    text: 'As a municipality, we need reliability and documentation. Priority delivers on both — right specs, right quantity, right time. They\'ve earned our trust.',
    name: 'T. Walters',
    role: 'Parks & Recreation, City of Fayetteville',
    initials: 'TW',
  },
];

export default function Testimonials() {
  return (
    <section className="section section--dark" id="testimonials">
      <div className="wrap">
        <div className="testi-header">
          <span className="eyebrow">What Clients Say</span>
          <h2 className="h2 h2--light">Trusted by Landscape Professionals</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testi-card">
              <div className="testi-stars">{t.stars}</div>
              <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-ava">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
