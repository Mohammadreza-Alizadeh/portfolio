export default function AcademicSection() {
  return (
    <div className="section active" id="academic" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">mohammadreza</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/academic</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat education.log</span>
      </div>

      <div className="academic-group">education</div>
      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">01</span>
          <span className="academic-item__title">B.Sc. Computer Engineering</span>
          <span className="academic-item__status">In progress</span>
        </div>
        <p className="academic-item__desc">
          Islamic Azad University of Mashhad, Iran · 2024 – Present
        </p>
      </div>

      <div className="academic-group">certifications</div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">01</span>
          <span className="academic-item__title">Associate DevOps Engineer</span>
        </div>
        <p className="academic-item__desc">
          ArvanCloud · 2025 · <a href="https://academy.arvancloud.ir/certificate/127128FAE-3404B67-3306C85" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">02</span>
          <span className="academic-item__title">Harvard CS50 Computer Science</span>
        </div>
        <p className="academic-item__desc">
          Harvard University · 2024 · <a href="https://certificates.cs50.io/fc248a45-7386-4a3d-a50f-8383a88cfd20.pdf?size=letter" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">03</span>
          <span className="academic-item__title">Harvard CS50 Python</span>
        </div>
        <p className="academic-item__desc">
          Harvard University · <a href="https://cs50.harvard.edu/certificates/336a1e76-3359-4049-a5d0-ea9bf1536a9c" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">04</span>
          <span className="academic-item__title">Task-oriented course in Linux</span>
        </div>
        <p className="academic-item__desc">
          Quera · 2022 · <a href="https://quera.org/certificate/N5yFBD19" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">05</span>
          <span className="academic-item__title">Advanced Python & OOP</span>
        </div>
        <p className="academic-item__desc">
          Quera · <a href="https://quera.org/certificate/QecnYXL8" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">06</span>
          <span className="academic-item__title">Fundamentals of Python & Algorithmic Thinking</span>
        </div>
        <p className="academic-item__desc">
          Quera · 2022 · <a href="https://quera.org/certificate/YZygwRGx" target="_blank" rel="noopener noreferrer" className="project-item__link" style={{ display: 'inline', marginLeft: '4px' }}>verify ↗</a>
        </p>
      </div>

      <div className="terminal-cursor">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
