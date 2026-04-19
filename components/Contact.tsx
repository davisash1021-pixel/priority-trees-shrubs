const info = [
  {
    icon: '📍',
    label: 'Address',
    value: '2345 N Green Acres Rd\nFayetteville, AR 72703',
    link: null,
  },
  {
    icon: '📞',
    label: 'Sales',
    value: '479-200-8486',
    link: 'tel:4792008486',
  },
  {
    icon: '📞',
    label: 'Office',
    value: '479-790-0544',
    link: 'tel:4797900544',
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Monday – Friday\n8:00am – 5:00pm',
    link: null,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="h2">Request a Quote or Ask a Question</h2>
            <p className="lead">
              We work exclusively with landscape contractors, developers, and municipalities.
              Send us your plant list and project details and we&apos;ll respond within one business day.
            </p>
            <div className="cinfo-items">
              {info.map(item => (
                <div key={item.label} className="cinfo-item">
                  <div className="cinfo-icon">{item.icon}</div>
                  <div>
                    <div className="cinfo-label">{item.label}</div>
                    <div className="cinfo-val">
                      {item.link
                        ? <a href={item.link}>{item.value}</a>
                        : item.value.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card">
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="form-row">
                <div>
                  <label className="form-label">First Name</label>
                  <input className="form-input" type="text" name="firstName" required />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input className="form-input" type="text" name="lastName" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Company / Organization</label>
                <input className="form-input" type="text" name="company" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="email" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input className="form-input" type="tel" name="phone" />
              </div>
              <div className="form-group">
                <label className="form-label">I&apos;m a…</label>
                <select className="form-select" name="type">
                  <option value="">Select your role</option>
                  <option>Landscape Contractor</option>
                  <option>Developer</option>
                  <option>Municipality / Government</option>
                  <option>Other Trade Professional</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Project Details / Plant List</label>
                <textarea className="form-textarea" name="message" rows={5} placeholder="Species, caliper, height, quantity, timeline…" required />
              </div>
              <button type="submit" className="btn btn-primary form-submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
