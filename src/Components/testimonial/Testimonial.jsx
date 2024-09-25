import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; 

const testimonials = [
    {
        name: 'Chadrack Mukendi',
        role: 'CEO of CMB menuiserie',
        image: '/boos_cmb-removebg-preview-3.png',
        text: "As CEO of CMB, I am highly satisfied with Glody Mafo's work in crafting our graphic identity, including our logo and website. His expertise and creativity have transformed our vision into a visually compelling reality. The logo perfectly captures our company's essence, and the website he developed is both aesthetically pleasing and functional, enhancing our online presence and improving accessibility for our clients.",
    },
    {
        name: 'Mike Kabombo',
        role: 'Beat Maker KBO prod',
        image: '/mike.jpg', 
        text: "As a beatmaker at KBO Production, I am extremely pleased with Glody Mafo's efforts in designing our logo for our production company. His skill and innovation brought our visual identity to life remarkably, capturing the essence of our company perfectly. Furthermore, he delivered the project punctually, showcasing his professionalism and dedication to our satisfaction.",
    },
    {
        name: 'Agapy Kyungu',
        role: 'Web Developer',
        image: '/agapy.jpg', 
        text: "I am a web developer, and I've had the pleasure of collaborating with Glody Mafo on multiple projects. His expertise in graphic design and web development is truly impressive. Glody brings a unique blend of creativity and technical proficiency to every project, ensuring that our collaborations result in visually stunning and functional websites. His dedication to delivering high-quality work on time has made him a valuable partner. I highly recommend Glody Mafo to anyone looking for a skilled and reliable graphic designer and web developer.",
    },
   
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id='testimonial'>
        
        <div className="testimonial-section">
            <h2 className="testimonial-title">What They Say</h2>
            <div className='align'>
        <div className="underline"></div>
        </div>
            <Slider {...settings} className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-role">{testimonial.role}</p>
                        <p className="testimonial-text">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
        </section>

    );
};

export default Testimonial;
