import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onTabClick, content }) => {
  const { title, description, content: detailContent, background, opacity } = content;

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/' + background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.5s ease-in-out',
    opacity: opacity
  };

  return (
    <div className="hero-section" style={sectionStyle}>
      <div className="text-content" style={{ opacity }}>
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
