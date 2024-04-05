import React, { useState, useEffect } from 'react';

const rootStyle = {
  margin: 0,
  color: '#FFFFFF',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Aldrich, sans-serif',
  textAlign: 'left',
  padding: '5vw',
  paddingLeft: '10vw',
  maxWidth: '100%',
  boxSizing: 'border-box',
};
const titleStyle = {
  fontSize: '30px',
  fontWeight: 400,
  lineHeight: '44.01px',
  textAlign: 'left',
  marginBottom: '1rem',
};
const listStyle = {
  textAlign: 'left',
  fontSize: '18px',
  paddingLeft: '7vw',
  listStyleType: 'disc',
};
const socialMediaContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '20px',
};
const circleContainer = {
  display: 'flex',
  justifyContent: 'center',
  height: '150px',
};

const Methodology = () => {

  const [animate, setAnimate] = useState(false);

  const [circleWiggles, setCircleWiggles] = useState(Array(7).fill({ x: 0, y: 0 }));

  useEffect(() => {
    let intervalId;
    if (animate) {
      intervalId = setInterval(() => {
      const newWiggles = circleWiggles.map(() => ({
        x: Math.random() * 40 - 5,
        y: Math.random() * 40 - 5,
      }));
      setCircleWiggles(newWiggles);
    }, 1000);
  } else {
    setCircleWiggles(Array(7).fill({ x: 0, y: 0 }));
  }

    return () => clearInterval(intervalId);
  }, [animate, circleWiggles]);

  // Adjust the circle style function to apply a smoother transition
  const circleStyle = ({ image, index, baseY }) => ({
    display: 'inline-block',
    margin: '0 10px',
    width: '75px',
    height: '75px',
    backgroundColor: '#1F328B',
    borderRadius: '50%',
    alignSelf: baseY === 'high' ? 'flex-start' : 'flex-end',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 5s ease-out', // Increase transition duration
    transform: `translate(${circleWiggles[index].x}px, ${circleWiggles[index].y}px)`,
  });

  const handleClick = () => {
    setAnimate(!animate);
  };

  const handleReset = () => {
    setAnimate(false);
  };

  const slideUpStyle = {
    textAlign: 'left',
    fontSize: '18px',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(50px)',
  };

  return (
    <div style={rootStyle}>

      <h1 style={titleStyle}>METHODOLOGY</h1><br/>

      <p style={slideUpStyle}>
        To conduct a Market Analysis of the EV and Hybrid Vehicle industry, 
        we utilized industry enterprise research systems such as Mintel, WARC,
        MRI Simmons, Hoovers, MarketLine, IBIS World, and Stylus.
      </p><br/><br/>

      <p style={slideUpStyle}>
        Our social listening program, Quid, analyzes online conversations surrounding
        targeted keywords linked to a specific topic:
      </p><br/>
      <ul style={{ ...slideUpStyle, ...listStyle}}>
        <li>social conversations surrounding EVs</li>
        <li>general user values</li>
        <li>conversation direction</li>
        <li>other key metrics to gain insight into Gen Z sentiment surrounding EVs</li>
      </ul><br/><br/>

      <div style={socialMediaContainer}>
        <p style={{ ...slideUpStyle, textAlign: 'left', width: '25vw' }}>
          Our analysis included all mainstream social media channels. We also conducted our
          own native search to supplement our findings. 
        </p>
        <div style={circleContainer}>
        {['/Youtube.png', '/Facebook.png', '/Instagram.png', '/Reddit.png', '/Tiktok.png', '/Tumblr.png', '/X.png'].map((image, index) => (
          <span key={index} style={circleStyle({ image, index, baseY: index % 2 === 0 ? 'high' : 'low' })}></span>
        ))}
      </div>
      </div>

      {/* test button - remove in final */}
      <br/><br/>
      <div style={{display: 'flex'}}>
      <button
        className="bg-white hover:bg-yellow-200 text-black font-bold rounded p-2"
        onClick={handleClick}
      >
        {animate ? 'Stop Animation' : 'Start Animation'}
      </button>
      </div>
    </div>
  );
};

export default Methodology;