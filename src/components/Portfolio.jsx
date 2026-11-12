import { useState } from 'react';
import TitleBar from './TitleBar';
import Tabs from './Tabs';
import HomeSection from './HomeSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AcademicSection from './AcademicSection';
import ContactSection from './ContactSection';
import './portfolio.css';

const sections = [
  { id: 'home', label: '~/home' },
  { id: 'experience', label: '~/experience' },
  { id: 'skills', label: '~/skills' },
  { id: 'projects', label: '~/achevements' },
  { id: 'academic', label: '~/academic' },
  { id: 'contact', label: '~/contact' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home': return <HomeSection />;
      case 'experience': return <ExperienceSection />;
      case 'skills': return <SkillsSection />;
      case 'projects': return <ProjectsSection />;
      case 'academic': return <AcademicSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="window">
      <div className="shell">
        <TitleBar />
        <Tabs
          tabs={sections}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <main className="terminal">
          {renderSection()}
        </main>
        <div className="statusbar">
          <span>alizadehmohamadreza641@gmail.com</span>
          <span>Docker · CI/CD · Ansible · Linux . Python</span>
        </div>
      </div>
    </div>
  );
}
