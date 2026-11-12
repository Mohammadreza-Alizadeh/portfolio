const skillGroups = [
  { category: 'cloud & aws', tags: ['EC2', 'VPC', 'IAM', 'S3', 'RDS', 'ECS', 'EKS', 'Lambda', 'ALB', 'Auto Scaling', 'CloudWatch'] },
  { category: 'infrastructure as code', tags: ['Terraform', 'AWS CloudFormation'] },
  { category: 'ci/cd & devops', tags: ['Jenkins', 'GitHub Actions', 'Git', 'Automated Pipelines'] },
  { category: 'containers & orchestration', tags: ['Docker', 'Kubernetes (EKS)', 'Amazon ECR'] },
  { category: 'operating systems & scripting', tags: ['Linux (Ubuntu/CentOS)', 'Bash', 'Python (Basic)'] },
  { category: 'databases', tags: ['SQL Server 2016/2019', 'RDS', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'database ha/dr', tags: ['Always On Availability Groups', 'Database Mirroring', 'Log Shipping', 'Backup & Recovery'] },
  { category: 'networking & security', tags: ['IAM', 'Security Groups', 'NACLs', 'VPC', 'DNS', 'DHCP', 'TCP/IP', 'VPN'] },
  { category: 'monitoring & observability', tags: ['CloudWatch', 'CloudTrail', 'Prometheus', 'Grafana'] },
  { category: 'virtualization', tags: ['VMware', 'Hyper-V'] },
  { category: 'additional expertise', tags: ['C#', 'ASP.NET', 'Python', 'Agile'] },
];

export default function SkillsSection() {
  return (
    <div className="section active" id="skills" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">sairam</span>
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
