import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <section className="header-section">
        <div className="overlay">
          <h1>About Us</h1>
          <p>
            At NxtHome, our mission is to simplify the real estate management process for property owners, managers, and tenants. 
            We believe that managing real estate should be efficient, transparent, and accessible to everyone. 
            Our platform is designed to bridge the gap between landlords and tenants, providing a seamless experience for all users.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

// Team member data
const teamMembers = [
  { name: "Yasasri", role: "CEO", image: "../images/yasasri.jpg" },
  { name: "Lankesh", role: "Manager", image: "../images/lankesh.jpg" },
  { name: "Amar Kote", role: "Marketing Manager", image: "/images/amar.jpg" },
  { name: "M.Yaswanth Kumar", role: "HR", image: "/images/yaswanth.jpg" },
  { name: "Shaik Afroze Sulthana", role: "Chief Operating Officer", image: "/images/sulthana.jpg" },
  { name: "Rakhi Bhogale", role: "Chief Officer", image: "/images/rakhi.jpg" },
];

export default AboutUs;
