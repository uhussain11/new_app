import React from 'react';

const rootStyle = {
  margin: 0,
  backgroundColor: '#06071F',
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

const bodyStyle = {
  textAlign: 'left',
  fontSize: '20px',

};

const listStyle = {
  textAlign: 'left',
  fontSize: '20px',
  paddingLeft: '7vw',
};

const socialMediaContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '20px',
};

const leftCondensedStyle = {
  textAlign: 'left',
  fontSize: '20px',
  width: '25vw',
};

const circleContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '150px',
};

const upCircleStyle = {
  display: 'inline-block',
  margin: '0 10px',
  width: '75px',
  height: '75px',
  backgroundColor: '#1F328B',
  borderRadius: '50%',
  alignSelf: 'flex-start',
};

const downCircleStyle = {
  display: 'inline-block',
  margin: '0 10px',
  width: '75px',
  height: '75px',
  backgroundColor: '#1F328B',
  borderRadius: '50%',
  alignSelf: 'flex-end',
};

const MethodologySlide = () => {
  return (
    <div style={rootStyle}>
      <h1 style={titleStyle}>METHODOLOGY</h1>
      <p style={bodyStyle}>
        To conduct a Market Analysis of the EV and Hybrid Vehicle industry, we utilized industry enterprise research systems such as Mintel, WARC, MRI Simmons, Hoovers, MarketLine, IBIS World, and Stylus.
      </p>
      <p style={bodyStyle}>
        Our social listening program, Quid, analyzes online conversations surrounding targeted keywords linked to a specific topic.
      </p>
      <ul style={listStyle}>
        <li>social conversations surrounding EVs</li>
        <li>general user values</li>
        <li>conversation direction</li>
        <li>other key metrics to gain insight into Gen Z sentiment surrounding EVs</li>
      </ul>
      <br/>

      <div style={socialMediaContainerStyle}>
        <p style={leftCondensedStyle}>
          Our analysis included all mainstream social media channels. We also conducted our own native search to supplement our findings. 
        </p>
        <div style={circleContainerStyle}>
          <span style={upCircleStyle}></span>
          <span style={downCircleStyle}></span>
          <span style={upCircleStyle}></span>
          <span style={downCircleStyle}></span>
          <span style={upCircleStyle}></span>
          <span style={downCircleStyle}></span>
          <span style={upCircleStyle}></span>
          </div>
      </div>
    </div>
  );
};

export default MethodologySlide;