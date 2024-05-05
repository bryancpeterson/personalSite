import React from 'react';
import './ContentArea.css';

const ContentArea = ({ activeTab }) => {
  const getContent = (tab) => {
    console.log("Current tab:", tab);
    switch(tab) {
      case 'Experience':
        return (
          <div>
            <h2>Experience</h2>
            <ul>
              <li>Software Developer at Company A - Worked on X, Y, Z...</li>
              <li>Intern at Company B - Learned A, B, C...</li>
              {/* Add more experiences as needed */}
            </ul>
          </div>
        );
      case 'Education':
        return (
          <div>
            <h2>Education</h2>
            <p>Arizona State University, B.S. in Computer Science, 2021</p>
            <p>Relevant Courses: Advanced Programming, Data Structures, Algorithms...</p>
          </div>
        );
      case 'Skills':
        return (
          <div>
            <h2>Skills</h2>
            <p>Proficient in: JavaScript, React, Node.js, Python</p>
            <p>Tools: Git, Docker, AWS</p>
          </div>
        );
      case 'Portfolio':
        return (
          <div>
            <h2>Portfolio</h2>
            <p>Project 1: Description and <a href="link_to_project">Link</a></p>
            <p>Project 2: Description and <a href="link_to_project">Link</a></p>
            {/* Additional projects */}
          </div>
        );
      case 'Contact':
        return (
          <div>
            <h2>Contact Me</h2>
            <p>Email: example@example.com</p>
            <p>LinkedIn: <a href="your_linkedin_profile">My LinkedIn</a></p>
            {/* Additional contact methods */}
          </div>
        );
      default:
        return "Please select a tab.";
    }
  };

  return (
    <div className="content-area">
      {getContent(activeTab)}
    </div>
  );
};

export default ContentArea;
