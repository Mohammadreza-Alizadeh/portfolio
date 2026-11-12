export default function ExperienceSection() {
  return (
    <div className="section active" id="experience" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">mohammadreza</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/experience</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat career_journey.log</span>
      </div>

      <div className="exp-block">
        <div className="exp-title-line">
          <span className="exp-role">DevOps / Python Developer</span>
          <span className="exp-period">Present</span>
        </div>
        <div className="exp-company">NewHorizon . Mashhad, Iran</div>
        <ul className="exp-points">
          <li>Developing and maintaining scalable infrastructure and automation scripts.</li>
          <li>Working on CI/CD pipelines and integrating Python-based tooling for operations.</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="exp-block">
        <div className="exp-title-line">
          <span className="exp-role">DevOps Engineer</span>
          <span className="exp-period">2+ Years</span>
        </div>
        <div className="exp-company">Part Software Group · Mashhad, Iran</div>
        <ul className="exp-points">
          <li>Maintained and monitored infrastructure for banking services and high-traffic systems in a Linux environment.</li>
          <li>Managed infrastructure including over 150 virtual machines and production services.</li>
          <li>Developed Python tools and scripts to automate operational processes and reduce repetitive tasks.</li>
          <li>Participated in deploying and managing services with Docker, PM2, and Linux.</li>
          <li>Collaborated in CI/CD processes to improve deployment and maintenance.</li>
          <li>Troubleshot production issues using logs, monitoring, and system performance analysis.</li>
          <li>Worked in Agile teams, collaborating continuously with development teams to resolve operational issues.</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="exp-block">
        <div className="exp-title-line">
          <span className="exp-role">Programming Instructor</span>
          <span className="exp-period">Present</span>
        </div>
        <div className="exp-company">Radman Technical and Vocational Institute · Mashhad, Iran</div>
        <ul className="exp-points">
          <li>Teaching programming fundamentals and Python to students.</li>
          <li>Designing practical exercises and projects to strengthen problem-solving and algorithmic thinking skills.</li>
          <li>Simplifying technical concepts for individuals without a programming background.</li>
        </ul>
      </div>

      <div className="terminal-cursor terminal-cursor--tight">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
