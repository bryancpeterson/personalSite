import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onTabClick, content }) => {
  const { title, description, content: detailContent, background } = content;

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/' + background})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="hero-section" style={sectionStyle}>
      <div className="text-content"> {/* Wrapper for text content for better control */}
        <h1>{title}</h1>
        <p>{description}</p>
        {detailContent}
      </div>
      <div className="tabs">
        <button onClick={() => onTabClick('Experience')}>Experience</button>
        <button onClick={() => onTabClick('Education')}>Education</button>
        <button onClick={() => onTabClick('Skills')}>Skills</button>
        <button onClick={() => onTabClick('Portfolio')}>Portfolio</button>
        <button onClick={() => onTabClick('Contact')}>Contact</button>
      </div>
    </div>
  );
};

export default HeroSection;
