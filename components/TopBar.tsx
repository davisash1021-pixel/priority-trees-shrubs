export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tbar-group">
          <span className="tbar-item">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            2345 N Green Acres Rd, Fayetteville AR 72703
          </span>
          <span className="tbar-item">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Mon–Fri 8am–5pm
          </span>
        </div>
        <div className="tbar-group">
          <a href="tel:4792008486" className="tbar-item">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.8A16 16 0 0015.2 16.1l.96-.96a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Sales: 479-200-8486
          </a>
          <a href="tel:4797900544" className="tbar-item">Office: 479-790-0544</a>
        </div>
      </div>
    </div>
  );
}
