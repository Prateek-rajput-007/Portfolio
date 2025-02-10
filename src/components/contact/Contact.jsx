import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [messageSentDisplay, setMessageSentDisplay] = useState('none');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_491axjy', 'template_rfaxufa', form.current, 'r2gVYr8iWJu721s30')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  const handleSend = () => {
    setMessageSentDisplay("block");
    setTimeout(() => {
      setMessageSentDisplay("none");
    }, 2000);
  };

  return (
    <section id='contact'>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Contact Me
      </motion.h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact__option">
            <MdOutlineEmail className='contact__option__icon' />
            <h4>Email</h4>
            <h5>prprateek2022@gmail.com</h5>
            <a href="mailto:prprateek2022@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </div>

          <div className="contact__option">
            <BsLinkedin className='contact__option__icon' />
            <h4>LinkedIn</h4>
            <h5>Prateek</h5>
            <a className="badge-base__link LI-simple-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prateek-rajput-449898191">Let's Connect and Talk</a>
          </div>

          <div className="contact__option">
            <BsWhatsapp className='contact__option__icon' />
            <h4>Whatsapp</h4>
            <h5>+91 9654812384 </h5>
            <a href="https://wa.me/9654812384" target="_blank" rel="noopener noreferrer">Send a message</a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className="form__buttons">
            <button type="submit" className='btn btn-primary' onClick={handleSend}>Send Message</button>
            <button id='after__message__send' style={{ display: messageSentDisplay }}>Message Sent Successfully</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;





