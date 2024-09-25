
import React from 'react';
import './Resume.css';

const experiences = [
  {
    title: "Full Stack Web Developer",
    date: "2023 - present",
    type: "Freelance",
    description: "As a full-stack web developer proficient in JS, React, and Node.js, I excel in crafting scalable and responsive web applications. With expertise in front-end development using React for dynamic user interfaces and backend integration with Node.js for efficient server-side operations, I deliver cohesive and innovative solutions tailored to client specifications and user expectations.",
  },
  {
    title: "Web Designer",
    date: "2022 - present",
    type: "Freelance",
    description: "As a web designer, I specialize in creating visually appealing and functional websites that effectively communicate my clients' brands or messages, utilizing skills in UI/UX design, responsive design principles, and a keen understanding of current web technologies.",
  },
  {
    title: "UI/UX Designer",
    date: "2020 - present",
    type: "Soko Yetu / Freelance",
    description: "As a UX designer, I focus on enhancing user satisfaction by improving the usability, accessibility, and overall interaction experience of digital products through thoughtful interface design and user-centered methodologies.",
  },
  {
    title: "Graphic Designer",
    date: "2018 - present",
    type: "Freelance",
    description: "As a freelance graphic designer since 2018, I've crafted distinctive visual identities, designed various communication materials, and worked closely with clients to translate their visions into graphical reality.",
  },
];

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <h2>My Experience</h2>
        <div className='align'>
        <div className="myline"></div>
        </div>
        <div className="resume-grid">
          <div className="vertical-line"></div>
          {experiences.map((experience, index) => (
            <div key={index} className={`resume-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{experience.title}</h3>
              <p className="resume-date">{experience.date} | {experience.type}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
