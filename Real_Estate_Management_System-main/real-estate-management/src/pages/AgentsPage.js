import React from 'react';
import AgentCard from '../components/AgentCard';
import '../styles/AgentsPage.css';

const AgentsPage = () => {
  
  const agents = [
    {
      id: 1,
      name: "Yasasri",
      email: "Yasasri@Nxthome.com",
      phone: "+91 65238451",
      specialization: "Plots",
      image: "/images/yasasri2.jpg"
    },
    {
      id: 2,
      name: "Lankesh",
      email: "Lankesh@Nxthome.com",
      phone: "+1 (345) 678-9012",
      specialization: "Villas",
      image: "/images/lankesh.jpg"
    },
    {
      id: 3,
      name: "Yaswanth",
      email: "yaswanth@Nxthome.com",
      phone: "+918446596974",
      specialization: "apartments",
      image: "/images/yaswanth2.jpg"
    },
    {
      id: 4,
      name: "Amar",
      email: "Amar@nxthome.com",
      phone: "+91 884945655489",
      specialization: "Properties",
      image: "/images/amar2.jpg"
    },
    {
      id: 5,
      name: "sulthana",
      email: "shikar@nxthome.com",
      phone: "+91 884945648",
      specialization: "Rented Homes",
      image: "/images/sulthana.jpg"
    },
    {
      id: 5,
      name: "Rakhi",
      email: "rakhi@nxthome.com",
      phone: "+91 884945648",
      specialization: "Rented Homes",
      image: "/images/rakhi2.jpg"
    },

  ];

  return (
    <div className="agents-page">
      <h1>Our Real Estate Agents</h1>
      <div className="agents-grid">
        {agents.map(agent => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
