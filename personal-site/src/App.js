import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  const [activeContent, setActiveContent] = useState({
    title: "Hi, I'm Bryan Peterson.",
    description: "I am a full stack developer and recent graduate from Arizona State University.",
    background: "0032_31A.jpg",
    opacity: 1
  });

  const handleTabClick = (tab) => {
    // Fade out first by setting opacity to 0
    setActiveContent(prev => ({ ...prev, opacity: 0 }));

    // Delay the content update slightly less than the CSS transition to ensure it's smooth
    setTimeout(() => {
      switch (tab) {
        case 'Experience':
          setActiveContent({
            title: "Experience",
            content: (
              <div>
                <ul>
                  <li>Software Developer @ Arizona State University NANOsim Lab</li>
                  <li>Teaching Assistant, Introduction to AI course @ Arizona State University</li>
                  <li>Lead Python Lab Instructor @ Northern Arizona University</li>
                </ul>
              </div>
            ),
            background: "exp1.avif",
            opacity: 1
          });
          break;
        case 'Education':
          setActiveContent({
            title: "Education",
            content: (
              <div>
                <p>Arizona State University, B.S. in Computer Science, 2024</p>
              </div>
            ),
            background: "asu.jpg",
            opacity: 1
          });
          break;
        case 'Skills':
          setActiveContent({
            title: "Skills",
            content: (
              <div>
                <p>Languages: Python, Java, C/C++, C#, Javascript, .NET</p>
                <p>Frameworks: ASP.net, React, D3, Django, Node.js, RESTful services</p>
                <p>Tools: Git, Linux, VSCode, Kubernetes, Docker, AWS Cloud</p>
              </div>
            ),
            background: "bg.avif",
            opacity: 1
          });
          break;
        case 'Portfolio':
          setActiveContent({
            title: "Portfolio",
            description: "Check out some of my projects:",
            content: (
              <div>
                <p><a href="https://www.fintech411.com/">Fintech411.com:</a> A custom built job board for the fintech industry</p>
                <p><a href="https://github.com/bryancpeterson">My Github:</a> A link to my full portfolio</p>
              </div>
            ),
            background: "pbg.avif",
            opacity: 1
          });
          break;
        case 'Contact':
          setActiveContent({
            title: "Contact",
            content: (
              <div>
                <p>Email: bpdg12@gmail.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/bryan-peterson-40b443179/">My LinkedIn</a></p>
              </div>
            ),
            background: "0032_31A.jpg",
            opacity: 1
          });
          break;
        default:
          setActiveContent({
            title: "Hi, I'm Bryan Peterson.",
            description: "I am a full stack developer and recent graduate from Arizona State University.",
            background: "0032_31A.jpg",
            opacity: 1
          });
      }
    }, 300); // This delay should match the CSS transition time
  };

  return (
    <div className="App">
      <HeroSection onTabClick={handleTabClick} content={activeContent} />
    </div>
  );
}

export default App;
