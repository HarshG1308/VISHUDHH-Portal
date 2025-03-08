import React from 'react';
import { motion } from 'framer-motion';
import hassu from '../images/hassu.jpg';
import sallu from '../images/sallu.jpg';
import duaa from '../images/duaa.jpg';

// SVG Icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const TeamPage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const teamMembers = [
    {
      name: "Harsh Gautam",
      role: "ML, Full Stack, Python",
      skills: ["Machine Learning", "Full Stack Development", "Python", "Data Analysis"],
      bio: "Passionate about machine learning and building end-to-end solutions with Python. Specializes in creating innovative applications that merge cutting-edge algorithms with user-friendly interfaces.",
      image: hassu,
      social: {
        github: "https://github.com/harshgautam",
        linkedin: "https://linkedin.com/in/harshgautam",
        twitter: "https://twitter.com/harshgautam",
        email: "harsh@teamif.com"
      },
      color: "blue"
    },
    {
      name: "Saloni Bansal",
      role: "Full Stack Developer",
      skills: ["Frontend Development", "Backend Systems", "UI/UX Design", "Database Architecture"],
      bio: "Expert in crafting seamless user experiences with cutting-edge technologies. Specializes in both frontend and backend development with a focus on creating scalable, performant applications.",
      image: sallu,
      social: {
        github: "https://github.com/salonibansal",
        linkedin: "https://linkedin.com/in/salonibansal",
        twitter: "https://twitter.com/salonibansal",
        email: "saloni@teamif.com"
      },
      color: "purple"
    },
    {
      name: "Duanshi Chawla",
      role: "Presenter",
      skills: ["Public Speaking", "Client Relations", "Technical Communication", "Project Presentation"],
      bio: "Master communicator who brings ideas to life. Skilled at conveying complex concepts in accessible ways and representing the team with confidence and clarity at events and client meetings.",
      image: duaa,
      social: {
        github: "https://github.com/duanshichawla",
        linkedin: "https://linkedin.com/in/duanshichawla",
        twitter: "https://twitter.com/duanshichawla",
        email: "duanshi@teamif.com"
      },
      color: "green"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-24 pb-16">
      {/* Team Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-blue-800 mb-4">TEAM IF</h1>
        <div className="h-1 w-32 bg-green-300 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Innovating Forward - We're a dynamic team focused on creating cutting-edge solutions that drive meaningful impact.
        </p>
      </motion.div>

      {/* Team Members Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 flex flex-col h-full"
          >
            <div className={`bg-${member.color}-600 text-white p-6`}>
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-blue-100 mt-1">{member.role}</p>
            </div>
            
            <div className="p-6 flex-grow">
              <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              
              <p className="text-gray-700 mb-6">{member.bio}</p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Expertise:</h4>
                {member.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className={`text-${member.color}-500 mr-2 mt-1 flex-shrink-0`}>
                      <CheckCircleIcon />
                    </span>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3 mt-4">
                <a 
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors p-2 border border-gray-200 rounded-full hover:border-blue-300"
                >
                  <GitHubIcon />
                </a>
                <a 
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors p-2 border border-gray-200 rounded-full hover:border-blue-300"
                >
                  <LinkedinIcon />
                </a>
                <a 
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors p-2 border border-gray-200 rounded-full hover:border-blue-300"
                >
                  <TwitterIcon />
                </a>
                <a 
                  href={`mailto:${member.social.email}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors p-2 border border-gray-200 rounded-full hover:border-blue-300"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
          <div className="bg-blue-600 text-white p-6">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-blue-100 mt-1">We'd love to hear from you</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">
                      <MailIcon />
                    </span>
                    <span className="text-gray-700">team@teamif.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">
                      <PhoneIcon />
                    </span>
                    <span className="text-gray-700">+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">
                      <MapPinIcon />
                    </span>
                    <span className="text-gray-700">New Delhi, India</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/teamif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <GitHubIcon />
                    </a>
                    <a 
                      href="https://linkedin.com/company/teamif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <LinkedinIcon />
                    </a>
                    <a 
                      href="https://twitter.com/teamif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-300 transition-colors"
                    >
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-green-300 text-white px-6 py-3 rounded-full font-medium hover:bg-green-400 transition-colors flex items-center"
                  >
                    Send Message
                    <span className="ml-2">
                      <ExternalLinkIcon />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 mt-16 text-center"
      >
        <div className="h-px w-full bg-blue-200 mb-8"></div>
        <p className="text-gray-600">© {new Date().getFullYear()} TEAM IF. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Innovating Forward | Building Tomorrow</p>
      </motion.div>
    </div>
  );
};

export default TeamPage;