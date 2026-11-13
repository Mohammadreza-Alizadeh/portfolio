import resumePdf from '../assets/Mohammadreza-Alizadeh.pdf';

export default function HomeSection() {
  return (
    <div className="section active" id="home" role="tabpanel">
      <div className="home">
        <header className="home-hero card">
          <div className="home-avatar" aria-hidden="true">MA</div>
          <div className="home-hero__main">
            <p className="home-badge">
              <span className="home-badge__dot" aria-hidden="true"></span> Open to work ( freelance )
            </p>
            <h1 className="big-name">
              Mohammadreza <span className="name-surname">Alizadeh</span>
            </h1>
            <p className="role-line">DevOps Engineer · Python Developer</p>
            <p className="bio">
              DevOps Engineer and Linux Administrator with ~3 years of experience in maintaining and automating Linux infrastructures. Passionate about building reliable systems, automation, and learning Kubernetes and IaC.
            </p>
            <p className="home-location">
              Mashhad, Iran · NewHorizon
            </p>
            <div className="actions home-actions">
              <a href={resumePdf} download className="cmd-btn cmd-btn-primary">↓ CV</a>
              <a href="mailto:alizadehmohamadreza61@gmail.com" className="cmd-btn cmd-btn-secondary">✉ Email</a>
              <a href="https://www.linkedin.com/in/mohammadreza-alizadeh-89997331a" target="_blank" rel="noopener noreferrer" className="cmd-btn cmd-btn-secondary">⇗ LinkedIn</a>
              <a href="https://t.me/alizadehastam" target="_blank" rel="noopener noreferrer" className="cmd-btn cmd-btn-secondary">☺︎ Telegram</a>
            </div>
          </div>
        </header>

        <div className="home-grid">
          <div className="card home-metrics">
            <p className="home-card-label">Impact</p>
            <ul className="home-metrics__list">
              <li><strong>3+</strong><span>years DevOps</span></li>
              <li><strong>150+</strong><span>VMs managed</span></li>
              <li><strong>6+</strong><span>certifications</span></li>
              <li><strong>1x</strong><span>Tech Olympics Finalist</span></li>
            </ul>
          </div>

          <div className="card home-stack">
            <p className="home-card-label">Core skills</p>
            <div className="home-chips">
              {['Linux', 'Python', 'Docker', 'Ansible', 'Prometheus', 'Grafana', 'Bash', 'CI/CD', 'Networking'].map((skill) => (
                <span key={skill} className="home-chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="terminal-cursor">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
