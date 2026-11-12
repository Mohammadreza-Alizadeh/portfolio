export default function HomeSection() {
  return (
    <div className="section active" id="home" role="tabpanel">
      <div className="home">
        <header className="home-hero card">
          <div className="home-avatar" aria-hidden="true">SK</div>
          <div className="home-hero__main">
            <p className="home-badge">
              <span className="home-badge__dot" aria-hidden="true"></span> Open to work
            </p>
            <h1 className="big-name">
              A(Atal) Sairam <span className="name-surname">Kumar Patro</span>
            </h1>
            <p className="role-line">AWS Cloud &amp; DevOps Engineer · Software Developer</p>
            <p className="bio">
              Building reliable cloud infrastructure, CI/CD pipelines, and SQL Server platforms for production at scale.
            </p>
            <p className="home-location">
              Bhubaneswar, India · Eduquity Career Technologies Pvt. Ltd.
            </p>
            <div className="actions home-actions">
              <a href="/sairam_kumar_cv.pdf" download className="cmd-btn cmd-btn-primary">↓ Resume</a>
              <a href="mailto:itsairamkumar@gmail.com" className="cmd-btn cmd-btn-secondary">✉ Email</a>
              <a href="https://www.linkedin.com/in/isairamkumar" target="_blank" rel="noopener noreferrer" className="cmd-btn cmd-btn-secondary">⇗ LinkedIn</a>
              <a href="https://github.com/itsairamkumar" target="_blank" rel="noopener noreferrer" className="cmd-btn cmd-btn-secondary">GitHub</a>
            </div>
          </div>
        </header>

        <div className="home-grid">
          <div className="card home-metrics">
            <p className="home-card-label">Impact</p>
            <ul className="home-metrics__list">
              <li><strong>10+</strong><span>years IT</span></li>
              <li><strong>7K+</strong><span>users supported</span></li>
              <li><strong>2+</strong><span>yrs AWS DevOps</span></li>
              <li><strong>15</strong><span>engineers led</span></li>
            </ul>
          </div>

          <div className="card home-stack">
            <p className="home-card-label">Core skills</p>
            <div className="home-chips">
              {['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'SQL', 'C#', 'ASP.NET', 'Python'].map((skill) => (
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
