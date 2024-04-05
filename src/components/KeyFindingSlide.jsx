import React from 'react';
import {useState} from 'react';

const KeyFindingSlide = (props) => {

  const [hovered, setHovered] = useState(false);

  const backgroundColor = hovered ? "#BEADCC" : "#FFF";
  const showTitle = hovered ? "block" : "none";
  const color = `h-[12rem] ml-4 mr-4 mt-4 mb-4 rounded-sm bg-white rounded-xl`;
  return (
    <div className={color} style={{background: backgroundColor}} onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <h2 className="font-aldrich text-2xl ml-4 mt-4"> {props.number} </h2>
      <h5 className="font-aldrich text-center" style={{display: showTitle}}> {props.title} </h5>
      <svg style={{display: showTitle}} className="h-1/6 w-1/6 m-auto" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
    </div>
  );
};

export default KeyFindingSlide;