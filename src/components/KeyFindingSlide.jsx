import React from 'react';
import {useState} from 'react';

const KeyFindingSlide = (props) => {

  const [hovered, setHovered] = useState(false);
  const color = `h-[12rem] border border-[#000] ml-4 mr-4 mt-4 mb-4 rounded-sm`;
  return (
    <div className={color} onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <h2 className="text-2xl"> <span style={{color: hovered ? props.color : "black"}}> {props.number} </span> </h2>
    </div>
  );
};

export default KeyFindingSlide;