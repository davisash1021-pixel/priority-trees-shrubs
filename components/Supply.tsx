const categories = [
  {
    icon: '🌲',
    name: 'Trees',
    items: ['Ornamental', 'Evergreen', 'Flowering', 'Shade', 'Native'],
  },
  {
    icon: '🌿',
    name: 'Shrubs',
    items: ['Flowering', 'Evergreen', 'Native', 'Hedging & Screening'],
  },
  {
    icon: '🌾',
    name: 'Grasses & Perennials',
    items: ['Ornamental Grasses', 'Native & Drought-Tolerant', 'Flowering Perennials', 'Seasonal Color'],
  },
  {
    icon: '🍃',
    name: 'Groundcover & Vines',
    items: ['Low-Growing', 'Flowering & Color', 'Climbing & Screening'],
  },
];

export default function Supply() {
  return (
    <section className="section section--alt" id="supply">
      <div className="wrap">
        <div className="supply-intro">
          <span className="eyebrow">What We Supply</span>
          <h2 className="h2">Plant Material for Every Project</h2>
          <p className="lead">
            From single-specimen ornamentals to large-volume commercial installs — we source it,
            spec it, and get it to your site.
          </p>
        </div>
        <div className="supply-grid">
          {categories.map(cat => (
            <div key={cat.name} className="supply-card">
              <div className="supply-card-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <ul>
                {cat.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
