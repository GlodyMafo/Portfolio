import React, { useState } from 'react';
import Modal from 'react-modal';
import './Portfolio.css';


const projects = [
  {
    title: "Cmb menuiserie",
    category: "Web Application",
    imageUrl: "/cmbsite.png",
    demoUrl: "https://cmb-menuiserie.com/",
    githubUrl: "#"
  },

  {
    title: "Josephine Files Converter",
    category: "Web Application",
    imageUrl: "/jfsconv.png",
    demoUrl: "https://josephinefc.onrender.com",
    githubUrl: "https://github.com/GlodyMafo/jsfcov"
  },
  {
    title: "Contact Book",
    category: "Web Application",
    imageUrl: "/contactBook.png",
    demoUrl: "https://glodymafo.github.io/Projet_Carnet_de_Contacts/",
    githubUrl: "https://github.com/GlodyMafo/Carnet-de-contact"
  },
  {
    title: "GaRi Exposition",
    category: "Web Application",
    imageUrl: "/CarExpo.png",
    demoUrl: "",
    githubUrl: "https://github.com/GlodyMafo/CarExpo"
  },

  {
    title: "KBO Prod Logo",
    category: "Branding",
    imageUrl: "/KboProd.png",
  },

  {
    title: "CMB Logo",
    category: "Branding",
    imageUrl: "/cmbLogo.png",
  },
  {
    title: "Collection dans l'ame Logo",
    category: "Branding",
    imageUrl: "/CollectionDansLaame.png",
  },
  {
    title: "243 Direct News Logo",
    category: "Branding",
    imageUrl: "/243News.png",
  },
  {
    title: "Congo Umoja Logo",
    category: "Branding",
    imageUrl: "/CongoUmoja.png",
  },
  {
    title: "Salon de l'environnment Flyer",
    category: "Graphic Design",
    imageUrl: "/projet_salon-Récupéré_105930.jpg",
  },
  {
    title: "LDS conference Katuba stake Flyer",
    category: "Graphic Design",
    imageUrl: "/JKL_085900.png",
  },

];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentDemoUrl, setCurrentDemoUrl] = useState('');
  const [currentGithubUrl, setCurrentGithubUrl] = useState('');

  const openModal = (imageUrl, demoUrl, githubUrl) => {
    setCurrentImage(imageUrl);
    setCurrentDemoUrl(demoUrl);
    setCurrentGithubUrl(githubUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
    setCurrentDemoUrl('');
    setCurrentGithubUrl('');
  };

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>My Work</h2>
        <div className='align'>
          <div className="portfolio-line"></div>
        </div>
        <div className="portfolio-filters">
          {['All', 'Web Application', 'Graphic Design', 'Branding'].map((category, index) => (
            <button
              key={index}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img src={project.imageUrl} alt={project.title} />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <div className="portfolio-icons">
                  {project.category === 'Web Application' && (
                    <>
                      <div className='icons-align'>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <svg width="28px" height="28px" className='link-icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75" />
                            <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5" />
                          </svg>
                        </a>

                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" >
                          <svg width="25px" height="25px" className="link-icon-github" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="white">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                  </path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </>
                  )}
                  {project.category !== 'Web Application' && (
                    <>
                      <a href={project.imageUrl} target="_blank" rel="noopener noreferrer">
                        <svg width="25px" height="25px" className='link-icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75" />
                          <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5" />
                        </svg>

                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="close-modal">X</button>
        <img src={currentImage} alt="Enlarged view" className="modal-image" />
        <div className="modal-links">
          {currentDemoUrl && (
            <a href={currentDemoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          )}
          {currentGithubUrl && (
            <a href={currentGithubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Portfolio;
