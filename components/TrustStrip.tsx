const items = [
  { icon: '🌳', label: 'Trees, Shrubs & Grasses' },
  { icon: '📦', label: 'Bulk & Project Orders' },
  { icon: '🤝', label: 'Trade Professionals Only' },
  { icon: '📍', label: 'Serving the Region' },
  { icon: '✅', label: 'Quality Guaranteed' },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap">
        {items.map(item => (
          <div key={item.label} className="trust-item">
            <div className="trust-dot">{item.icon}</div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
