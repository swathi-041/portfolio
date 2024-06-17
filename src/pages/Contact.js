import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css"; // Import CSS file

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s935s8p', 'template_bt1268m', form.current, 'WR2rXpcpdZb1J-2Wn')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="form-control">
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea placeholder="Message" name="message" cols="30" rows="10" required></textarea>
          <button type="submit" className="--btn --btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
