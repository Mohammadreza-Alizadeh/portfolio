export default function ExperienceSection() {
  return (
    <div className="section active" id="experience" role="tabpanel">
      <div className="prompt">
        <span className="prompt-user">sairam</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">~/experience</span>
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat career_journey.log</span>
      </div>

      <div className="exp-block">
        <div className="exp-title-line">
          <span className="exp-role">AWS Cloud &amp; DevOps Engineer | SQL Server DBA</span>
          <span className="exp-period">Jan 2024 – Present</span>
        </div>
        <div className="exp-company">Eduquity Career Technologies Pvt. Ltd. · Bhubaneswar, Odisha</div>
        <ul className="exp-points">
          <li>Architected and deployed scalable multi-tier AWS environments using EC2, ALB, Auto Scaling, VPCs with IAM policies and CloudWatch monitoring</li>
          <li>Automated infrastructure provisioning using Terraform, reducing manual deployment effort and improving consistency</li>
          <li>Designed and maintained CI/CD pipelines using Jenkins, GitHub Actions, and Git for reliable releases</li>
          <li>Containerized applications with Docker and deployed on AWS ECS/EKS, improving scalability and portability</li>
          <li>Led on-premises SQL Server migrations to AWS with near-zero downtime and zero data loss</li>
          <li>Administered SQL Server 2016/2019 databases supporting 6,000+ users across production environments</li>
          <li>Implemented Always On Availability Groups, Database Mirroring, and Log Shipping for disaster recovery</li>
          <li>Optimized SQL Server performance through indexing, execution plan analysis, and proactive monitoring</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="exp-block">
        <div className="exp-title-line">
          <span className="exp-role">Sr. Executive – IT Infrastructure &amp; Operations</span>
          <span className="exp-period">Dec 2015 – Present</span>
        </div>
        <div className="exp-company">Eduquity Career Technologies Pvt. Ltd. · Bhubaneswar, Odisha</div>
        <ul className="exp-points">
          <li>Managed end-to-end IT infrastructure for 7,000+ users across multiple locations, improving system reliability by 35%</li>
          <li>Supervised cross-functional team of 15 outsourced engineers and 4 junior associates, streamlining workflow and service delivery</li>
          <li>Deployed and configured physical and virtual servers, enhancing infrastructure scalability and availability</li>
          <li>Designed and maintained VMware-based virtualization infrastructure with optimized resource allocation</li>
          <li>Configured routing, switching, VPN, and SonicWall Firewall policies for 1,000+ devices</li>
          <li>Managed hybrid on-premise and AWS cloud environments for extended infrastructure scalability</li>
          <li>Developed SOPs and delivered technical training to 40+ staff members, improving onboarding efficiency by 30%</li>
          <li>Coordinated with clients and internal stakeholders to capture requirements and align delivery expectations</li>
        </ul>
      </div>

      <div className="terminal-cursor terminal-cursor--tight">
        <span className="prompt-dollar">$</span> <span className="blink" aria-hidden="true"></span>
      </div>
    </div>
  );
}
