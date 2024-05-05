import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  const [activeContent, setActiveContent] = useState({
    title: "Hi, I'm Bryan Peterson.",
    description: "I am a full stack developer and recent graduate from Arizona State University.",
    background: "0032_31A.jpg"
  });

  const handleTabClick = (tab) => {
    switch (tab) {
      case 'Experience':
        setActiveContent({
          title: "Experience",
          content: (
            <div>
              <ul>
                <li>Software Developer at Company A - Worked on X, Y, Z...</li>
                <li>Intern at Company B - Learned A, B, C...</li>
              </ul>
            </div>
          ),
          background: "0032_31A.jpg"
        });
        break;
      case 'Education':
        setActiveContent({
          title: "Education",
          description: "Here's where I've studied and what I've learned:",
          content: (
            <div>
              <p>Arizona State University, B.S. in Computer Science, 2021</p>
              <p>Relevant Courses: Advanced Programming, Data Structures, Algorithms...</p>
            </div>
          ),
          background: "0032_31A.jpg"
        });
        break;
      case 'Skills':
        setActiveContent({
          title: "Skills",
          description: "Here are the technologies I'm proficient in:",
          content: (
            <div>
              <p>Proficient in: JavaScript, React, Node.js, Python</p>
              <p>Tools: Git, Docker, AWS</p>
            </div>
          ),
          background: "0032_31A.jpg"
        });
        break;
      case 'Portfolio':
        setActiveContent({
          title: "Portfolio",
          description: "Check out some of my projects:",
          content: (
            <div>
              <p>Project 1: Description and <a href="link_to_project">Link</a></p>
              <p>Project 2: Description and <a href="link_to_project">Link</a></p>
            </div>
          ),
          background: "0032_31A.jpg"
        });
        break;
      case 'Contact':
        setActiveContent({
          title: "Contact",
          description: "Here's how you can reach me:",
          content: (
            <div>
              <p>Email: example@example.com</p>
              <p>LinkedIn: <a href="your_linkedin_profile">My LinkedIn</a></p>
            </div>
          ),
          background: "0032_31A.jpg"
        });
        break;
      default:
        setActiveContent({
          title: "Hi, I'm Bryan Peterson.",
          description: "I am a full stack developer and recent graduate from Arizona State University.",
          content: <p>Welcome to my portfolio website!</p>,
          background: "0032_31A.jpg"
        });
    }
  };

  return (
    <div className="App">
      <HeroSection onTabClick={handleTabClick} content={activeContent} />
    </div>
  );
}

export default App;
