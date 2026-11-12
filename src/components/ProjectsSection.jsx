const projects = [
  {
    num: '01',
    title: 'AWS Cloud Infrastructure with CI/CD Pipeline',
    link: 'https://github.com/itsairamkumar',
    desc: '3-tier AWS (EC2, RDS, ALB, Auto Scaling) provisioned with Terraform; CI/CD via Jenkins, Docker, and ECR.',
    tags: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'ECR', 'CI/CD'],
  },
  {
    num: '02',
    title: 'Evaluation Platform',
    desc: '.NET and SQL Server platform for university exams — monitoring, HA/DR, backups, and tuning under peak load.',
    tags: ['SQL Server', 'IIS', 'HA/DR', 'Query Tuning', 'ASP.NET'],
  },
];

export default function ProjectsSection() {
  return (
    <div className="section active" id="projects" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">sairam</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/projects</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">git log --oneline --all</span>
      </div>

      {projects.map((project) => (
        <div className="project-item" key={project.num}>
          <div className="project-item__head">
            <span className="project-item__num">{project.num}</span>
            <span className="project-item__title">{project.title}</span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-item__link">
                github ↗
              </a>
            )}
          </div>
          <p className="project-item__desc">{project.desc}</p>
          <div className="project-item__tags">
            {project.tags.map((tag) => (
              <span className="stag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="terminal-cursor">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
