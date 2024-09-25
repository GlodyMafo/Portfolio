import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzgyyop', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setResponseMessage('Email sent successfully!');
        form.reset();
      } else {
        const result = await response.json();
        const error = result.error || 'Unknown error';
        alert(`Votre message n'as  pas été envoyer veuillez réessayer: ${error}`);
      }
    } catch (error) {
      alert(`Votre message n'as  pas été envoyer veuillez réessayer: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id='contact'>

    <div className="contact-section">
      <h2>Let's Connect</h2>
      <div className='align'>
        <div className="underline"></div>
        </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <h3>Location</h3>
            <p>Lubumbashi, DRC</p>
            <p>116 Kamina 3ème espace</p>
          </div>
          <div className="info-box">
            <h3>Email</h3>
            <p>glodymafokis@gmail.com </p>
            <p>glodymafok@gmail.com</p>
          </div>
          <div className="info-box">
            <h3>Phone</h3>
            <p>+243 83 011 7735</p>
            <p>+243 84 074 1984</p>
          </div>
         
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="no-border" />
            <input type="email"
             name="email"
              placeholder="Email" 
              onChange={handleChange}
             className="no-border" />
            <input type="text" name="subject" placeholder="Subject"  onChange={handleChange} className="no-border" />
            <textarea name="message" placeholder="Your Message"  onChange={handleChange} className="no-border"></textarea>
            <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : ' Send Message'}
             
              </button>
          </form>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Contact;
