export default function AcademicSection() {
  return (
    <div className="section active" id="academic" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">sairam</span>
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
          <span className="academic-item__title">MCA — Cloud Computing</span>
          <span className="academic-item__status">In progress</span>
        </div>
        <p className="academic-item__desc">
          Manipal University, Jaipur · Expected Aug 2026
        </p>
      </div>
      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">02</span>
          <span className="academic-item__title">BCA</span>
          <span className="academic-item__status academic-item__status--muted">Graduated 2015</span>
        </div>
        <p className="academic-item__desc">
          Berhampur University, Odisha
        </p>
      </div>

      <div className="academic-group">certifications</div>
      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">01</span>
          <span className="academic-item__title">SQL Database Developer</span>
        </div>
        <p className="academic-item__desc">
          Brainwave Matrix Solutions (Remote) · Feb–Apr 2025
        </p>
      </div>
      <div className="academic-item">
        <div className="academic-item__head">
          <span className="academic-item__num">02</span>
          <span className="academic-item__title">Tata iQ Data Analytics Simulation</span>
        </div>
        <p className="academic-item__desc">
          Forage virtual job simulation · May 2026
        </p>
      </div>

      <div className="terminal-cursor">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
