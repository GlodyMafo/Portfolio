
import './Services.css';

const services = [
  { title: "WEB DEVELOPMENT", description: "Design and development of responsive and optimized websites, Integration of advanced features such as content management systems (CMS), e-commerce functionalities, complex forms, etc. ,Performance optimization and search engine optimization (SEO) to improve online visibility.", icon: "💻"  },
  { title: "GRAPHIC DESIGN", description: "Creation of complete visual identities including logos, color palettes, and typography, Design of attractive and intuitive user interfaces (UI) for web and mobile applications, Development of marketing collateral such as brochures, flyers, visual presentations, etc.", icon: "🖌️"  },
  { title: "CONSULTATION AND STRATEGY", description: "Strategic advice on design and development to help clients achieve their business goals, Audit and optimization of existing websites to enhance user experience and performance.", icon: "💾" },
  { title: "MAINTENANCE AND SUPPORT", description: "Ongoing maintenance services to ensure security, updates, and troubleshooting, End-user training on managing and maintaining new web and graphic solutions", icon: "⚡" },
];

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h2>What I Offer</h2>
        <div className='align'>
        <div className="underline"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
