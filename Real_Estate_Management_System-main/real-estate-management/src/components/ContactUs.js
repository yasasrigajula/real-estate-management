import React from 'react';
import '../styles/ContactUs.css'; // Ensure this CSS file is created for styling
import { FaPhone, FaCommentDots, FaVideo, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <p className="contact-title">Easy to Contact Us</p>
        <p className="contact-description">
          We are always ready to help by providing the best services for you. 
          We believe a good place to live can make your life better.
        </p>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div className="contact-method" key={index}>
              {method.icon}
              <h3>{method.title}</h3>
              <p>{method.phone}</p>
              <button className="contact-button">{method.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact method data
const contactMethods = [
  {
    title: "Call",
    phone: "+91 9658741231",
    buttonText: "Call now",
    icon: <FaPhone className="contact-icon" />
  },
  {
    title: "Chat",
    phone: "+91 9658741231",
    buttonText: "Chat now",
    icon: <FaCommentDots className="contact-icon" />
  },
  {
    title: "Video Call",
    phone: "+91 9658741231",
    buttonText: "Video Call now",
    icon: <FaVideo className="contact-icon" />
  },
  {
    title: "Message",
    phone: "+91 9658741231",
    buttonText: "Message now",
    icon: <FaEnvelope className="contact-icon" />
  }
];

export default ContactUs;
