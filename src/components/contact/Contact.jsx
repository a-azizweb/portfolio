import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
const Contact = () => {
  const form = useRef();
  //sending email via email js

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2e95ylq',
        'template_fn52yqc',
        form.current,
        '7jHdN4l8jK0Pc9XhV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>azizahmadhaider@gmail.com</h5>
            <a
              href="mailto:ahmadazizhaider@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ahmad Aziz</h5>
            <a
              href="https://m.me/dummyProfileSubdomain"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>0349-9278104</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+92499278104"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
