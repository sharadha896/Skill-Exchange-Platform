// src/pages/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;