import React from 'react';
import KeyFindingSlide from './KeyFindingSlide';

const KeyFindings = () => {
  const slides = [];
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF1493', '#FFD700'];

  for (let i = 1; i <= 9; i++){
    slides.push(
      <div key ={i}>
        <KeyFindingSlide number={i}/>
      </div>
    )
  }
  
  return ( 
    <>
    <div className="flex justify-center md:flex-row flex-col md:align-middle">
    <div className="flex flex-col md:justify-center md:w-1/3">
      <KeyFindingSlide number={"01"} title={"The Next Big Things: EV Purchase Patterns"}/>
      <KeyFindingSlide number={"02"}/>
      <KeyFindingSlide number={"03"}/>
    </div>
    <div className="flex flex-col md:justify-center md:w-1/3">
    <KeyFindingSlide number={"04"}/>
    <KeyFindingSlide number={"05"}/>
    <KeyFindingSlide number={"06"}/>
    <KeyFindingSlide number={"07"}/>
    </div>
    <div className="flex flex-col md:justify-center md:w-1/3 ">
    <KeyFindingSlide number={"08"}/>
    <KeyFindingSlide number={"09"}/>
    <KeyFindingSlide number={"10"}/>
    </div>
    </div>
    </>
  );
};

export default KeyFindings;