const steps = [
  {
    n: '01',
    title: 'Send Your Spec',
    desc: 'Share your plant list with species, size, quantity, and project timeline.',
  },
  {
    n: '02',
    title: 'We Source It',
    desc: 'We tap our grower network to find matching material at the right quality and price.',
  },
  {
    n: '03',
    title: 'Confirm & Schedule',
    desc: 'You approve the quote. We coordinate pickup or delivery to match your install schedule.',
  },
  {
    n: '04',
    title: 'Material on Site',
    desc: 'Quality plant material arrives when you need it — ready to go in the ground.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="how-header">
          <span className="eyebrow">How It Works</span>
          <h2 className="h2">Simple Process, Reliable Results</h2>
        </div>
        <div className="how-grid">
          {steps.map(step => (
            <div key={step.n} className="how-step">
              <div className="how-num">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
