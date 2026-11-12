const achievements = [
  {
    num: '01',
    title: 'DevOps Finalist - Tech Olympics 2026',
    link: 'https://olympics.tech/en',
    desc: 'Selected as a finalist in the DevOps category for the 2026 Tech Olympics.',
    tags: ['DevOps', 'Competition', 'Finalist'],
  },
  {
    num: '02',
    title: 'Technical Lead - CodeStorm Competition',
    desc: 'Served as the technical lead for the first CodeStorm student programming competition, organized in collaboration with national universities and Part Software.',
    tags: ['Leadership', 'Event Management', 'Problem Solving'],
  },
  {
    num: '03',
    title: 'Volunteer - Mashhad LUG',
    desc: 'Collaborating voluntarily with the Mashhad Linux Users Group (LUG) to support and educate Linux users, especially beginners.',
    tags: ['Linux', 'Community', 'Volunteering'],
  },
];

export default function ProjectsSection() {
  return (
    <div className="section active" id="projects" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">mohammadreza</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/achievements</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat achievements.log</span>
      </div>

      {achievements.map((item) => (
        <div className="project-item" key={item.num}>
          <div className="project-item__head">
            <span className="project-item__num">{item.num}</span>
            <span className="project-item__title">{item.title}</span>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-item__link">
                link ↗
              </a>
            )}
          </div>
          <p className="project-item__desc">{item.desc}</p>
          <div className="project-item__tags">
            {item.tags.map((tag) => (
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
