export default function ContactSection() {
  return (
    <div className="section active" id="contact" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">sairam</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/contact</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat contact.json</span>
      </div>

      <div className="contact-shell">
        <div className="contact-hero">
          <div className="contact-hero__glow"></div>
          <div className="contact-hero__top">
            <span className="contact-hero__label">get_in_touch</span>
            <span className="home-badge">
              <span className="home-badge__dot"></span> Available
            </span>
          </div>
          <h2 className="contact-hero__title">Let's build something reliable.</h2>
          <p className="contact-hero__sub">
            Open to DevOps, cloud, and infrastructure roles — full-time or freelance.
          </p>
          <div className="actions card-actions">
            <a href="mailto:itsairamkumar@gmail.com" className="cmd-btn cmd-btn-primary">
              ✉ Email me
            </a>
          </div>
        </div>

        <div className="contact-grid">
          <a href="mailto:itsairamkumar@gmail.com" className="contact-tile">
            <span className="contact-tile__icon">@</span>
            <span className="contact-tile__label">email</span>
            <span className="contact-tile__value">itsairamkumar@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/isairamkumar" target="_blank" rel="noopener noreferrer" className="contact-tile">
            <span className="contact-tile__icon">in</span>
            <span className="contact-tile__label">linkedin</span>
            <span className="contact-tile__value">/in/isairamkumar</span>
          </a>
          <a href="https://github.com/itsairamkumar" target="_blank" rel="noopener noreferrer" className="contact-tile">
            <span className="contact-tile__icon">{'{ }'}</span>
            <span className="contact-tile__label">github</span>
            <span className="contact-tile__value">itsairamkumar</span>
          </a>
          <div className="contact-tile contact-tile--static">
            <span className="contact-tile__icon">📍</span>
            <span className="contact-tile__label">location</span>
            <span className="contact-tile__value">Bhubaneswar, India</span>
          </div>
        </div>
      </div>

      <div className="terminal-cursor">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
