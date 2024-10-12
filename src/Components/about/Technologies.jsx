// src/components/TechIcons.jsx
import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaNode
} from 'react-icons/fa';
import {
  SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiPostgresql,SiWordpress,SiExpress} from 'react-icons/si';
import './TechIcons.css'; 

const technologies = [
  {
    name: 'HTML5',
    icon: FaHtml5,
    color: '#E34F26', 
    ringColor: 'orange',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    color: '#1572B6', 
    ringColor: 'blue',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38B2AC', 
    ringColor: 'teal',
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    color: '#F7DF1E', 
    ringColor: 'yellow',
  },
  {
    name: 'React.js',
    icon: FaReact,
    color: '#61DAFB', 
    ringColor: 'cyan',
  },
  {
    name: 'Python',
    icon: FaPython,
    color: '#3776AB', 
    ringColor: 'blue',
  },
  {
    name: 'Node.js',
    icon: FaNode,
    color: '#339933', // Couleur officielle Node.js
    ringColor: 'ring-green-500',
  },
  {
    name: 'Express',
    icon: SiExpress,
    color: 'white',
    ringColor: 'ring-gray-800',
  },
  
  {
    name: 'Git',
    icon: FaGitAlt,
    color: '#F05032', 
    ringColor: 'red',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    color: 'white', 
    ringColor: 'gray',
  },
  {
    name: 'SQL',
    icon: FaDatabase,
    color: '#4479A1', 
    ringColor: 'ring-blue-500',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791', 
    ringColor: 'ring-blue-600',
  },
  {
    name: 'WordPress',
    icon: SiWordpress,
    color: '#21759B', 
    ringColor: 'ring-blue-500',
  },
  {
    name: 'Photoshop',
    icon: SiAdobephotoshop,
    color: '#31A8FF', 
    ringColor: 'blue',
  },
  {
    name: 'Illustrator',
    icon: SiAdobeillustrator,
    color: '#FF9A00', 
    ringColor: 'orange',
  },
];

const TechIcons = () => {
  return (
    <div className="tech-icons-container">
      {technologies.map((tech) => {
        const IconComponent = tech.icon;
        return (
          <div
            key={tech.name}
            className={`tech-icon ring-${tech.ringColor}-500`}
            aria-label={tech.name}
          >
            <IconComponent
              className="tech-icon-svg"
              style={{ color: tech.color }}
            />
            <span className="tooltip">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TechIcons;
