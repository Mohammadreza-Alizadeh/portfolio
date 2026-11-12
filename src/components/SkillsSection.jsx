const skillGroups = [
  {
    category: 'programming & frameworks',
    tags: ['Python', 'FastAPI', 'Django', 'Bash / Shell Scripting']
  },
  {
    category: 'containers & virtualization',
    tags: ['Docker', 'Podman', 'Buildah', 'Firecracker', 'KVM', 'QEMU', 'Virtio']
  },
  {
    category: 'monitoring & observability',
    tags: ['Prometheus', 'Grafana', 'SigNoz']
  },
  {
    category: 'databases & caching',
    tags: ['PostgreSQL', 'Redis', 'SQLite', 'Backup & Recovery']
  },
  {
    category: 'devops & config management',
    tags: ['Ansible', 'Git', 'GitHub Actions', 'Nginx', 'HAProxy']
  },
  {
    category: 'operating systems & networking',
    tags: ['Linux', 'Networking', 'SSH', 'TCP/IP', 'DNS']
  },
  {
    category: 'architecture concepts',
    tags: ['Layered Architecture', 'Outbox Pattern', 'Asynchronous Processing', 'Microservices', 'Event-Driven Architecture', 'High Availability']
  },
];

export default function SkillsSection() {
  return (
    <div className="section active" id="skills" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">mohammadreza</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/skills</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">ls -la skills/</span>
      </div>

      {skillGroups.map((group) => (
        <div className="skill-block" key={group.category}>
          <div className="skill-category">{group.category}</div>
          <div className="skill-tags">
            {group.tags.map((tag) => (
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
