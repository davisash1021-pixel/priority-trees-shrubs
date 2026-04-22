import Image from 'next/image';

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

const dogs = [
  {
    photo: '/oshie.png',
    name: 'Oshie',
    title: 'Director of Team Morale',
    breed: 'Siberian Husky · 9 years old',
    stats: [
      { label: 'Specialty', value: 'Emotional Support' },
      { label: 'Superpower', value: 'Melting Hearts' },
      { label: 'Favorite Tree', value: 'Anything to Dig Under' },
    ],
  },
  {
    photo: '/remi.png',
    name: 'Remi',
    title: 'Chief Tree Farm Inspector',
    breed: 'Silver Lab · 10 years old',
    stats: [
      { label: 'Specialty', value: 'Quality Assurance' },
      { label: 'Superpower', value: 'Sniffing Out Trouble' },
      { label: 'Favorite Tree', value: 'The One with Shade' },
    ],
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

        {/* Furry QC Team */}
        <div className="dogs-section">
          <div className="dogs-header">
            <span className="eyebrow">Furry QC Team</span>
            <h3 className="dogs-heading">Every great nursery needs a dog.</h3>
            <p className="dogs-subtext">We have two.</p>
          </div>
          <div className="dogs-cards">
            {dogs.map(dog => (
              <div key={dog.name} className="dog-card">
                <div className="dog-card-inner">
                  <div className="dog-photo-wrap">
                    <Image
                      src={dog.photo}
                      alt={dog.name}
                      width={140}
                      height={140}
                      className="dog-photo"
                    />
                    <div className="dog-paw">🐾</div>
                  </div>
                  <div className="dog-name">{dog.name}</div>
                  <div className="dog-title">{dog.title}</div>
                  <div className="dog-breed">{dog.breed}</div>
                  <div className="dog-divider" />
                  <div className="dog-stats">
                    {dog.stats.map(s => (
                      <div key={s.label} className="dog-stat">
                        <span className="dog-stat-label">{s.label}</span>
                        <span className="dog-stat-value">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
