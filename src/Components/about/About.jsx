
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src="/public/glody.JPG" alt="Glody Mafo" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <div className="line"></div>
            <h1>I am Glody Mafo</h1>
            <h3>Full-Stack Web Developer and Graphic Designer</h3>
            <p>
            As a passionate web developer and graphic designer, I am dedicated to crafting exceptional digital experiences that effortlessly blend aesthetics with functionality. My professional approach centers on attentively understanding my clients needs and delivering customized solutions that consistently exceed expectations. I thrive on bringing creative visions to life, ensuring every project is not only visually engaging but also intuitive and user-friendly.
            </p>
            <div className="about-info">
              <div className="about-info__left">
                <p><strong>Name:</strong> Glody Mafo</p>
                <p><strong>Phone:</strong> +243 830117735</p>
              </div>
              <div className="about-info__right">
                <p><strong>Address:</strong> Lubumbashi, DRC</p>
                <p><strong>Email:</strong> glodymafokis@gmail.com</p>
              </div>
            </div>
            <a href="https://drive.google.com/file/d/1PH0nVQq25KDb9lVphYev6YfscIxSDGE-/view?usp=sharing" target='_blank' rel="noopener noreferrer">
              <button className="btn download-cv">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
