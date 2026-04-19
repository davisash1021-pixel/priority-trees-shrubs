const team = [
  {
    initials: 'PT',
    name: 'Patrick Tronzano',
    role: 'President & Owner',
    email: 'ptronzano@gmail.com',
  },
  {
    initials: 'JT',
    name: 'Jake Tronzano',
    role: 'VP / Operations & Sales',
    email: 'jake@prioritytreesandshrubs.com',
  },
  {
    initials: 'MC',
    name: 'Marissa Carlson',
    role: 'Admin / Operations & Buyer',
    email: 'marissa@prioritytreesandshrubs.com',
  },
  {
    initials: 'LT',
    name: 'Luca Tronzano',
    role: 'Sales & Quality Assurance',
    email: 'luca@prioritytreesandshrubs.com',
  },
];

export default function Team() {
  return (
    <section className="section section--alt" id="team">
      <div className="wrap">
        <div className="team-header">
          <span className="eyebrow">Our Team</span>
          <h2 className="h2">The People Behind the Plants</h2>
          <p className="lead">
            Family-run from the ground up. Every order goes through people who know plants.
          </p>
        </div>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.name} className="team-card">
              <div className="team-card-top">
                <div className="team-avatar">{member.initials}</div>
              </div>
              <div className="team-card-body">
                <div className="team-card-name">{member.name}</div>
                <div className="team-card-role">{member.role}</div>
                <div className="team-card-contact">
                  <a href={`mailto:${member.email}`}>
                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dogs-band">
          <div className="dogs-icon">🐕</div>
          <div>
            <div className="dogs-title">Furry QC Team</div>
            <ul className="dogs-list">
              <li><strong>Odie</strong> — 9-year-old Husky, Director of Team Morale</li>
              <li><strong>Remi</strong> — 10-year-old Silver Lab, Chief Tree Farm Inspector</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
