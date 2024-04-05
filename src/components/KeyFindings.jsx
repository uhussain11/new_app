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
      <KeyFindingSlide number={"02"} title={"Making the Switch: Gen Z & EV Purchase Implications"}/>
      <KeyFindingSlide number={"03"} title={"EV Infrastructure & Immersion Influences Audiences"}/>
    </div>
    <div className="flex flex-col md:justify-center md:w-1/3">
    <KeyFindingSlide number={"04"} title={"Trusting the Technology"}/>
    <KeyFindingSlide number={"05"} title={"Geography & Psychographics Matter"}/>
    <KeyFindingSlide number={"06"} title={"Gen Z forges the Future"}/>
    <KeyFindingSlide number={"07"} title={"Entertainment Platforms Reign Supreme"}/>
    </div>
    <div className="flex flex-col md:justify-center md:w-1/3 ">
    <KeyFindingSlide number={"08"} title={"The Voices Driving EVs"}/>
    <KeyFindingSlide number={"09"} title={"Why Gen Z?"}/>
    <KeyFindingSlide number={"10"} title={"Branding Meets EV Media"}/>
    </div>
    </div>
    </>
  );
};

export default KeyFindings;