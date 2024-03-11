import React from 'react';
import KeyFindingSlide from '../components/KeyFindingSlide';

const HomePage = () => {
  const slides = [];
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493', '#FFD700'];

  for (let i = 1; i <= 9; i++){
    slides.push(
      <div key ={i}>
        <KeyFindingSlide number={i} color={colors[i-1]}/>
      </div>
    )
  }
  return ( 
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {slides}
    </div>
  );
};

export default HomePage;

