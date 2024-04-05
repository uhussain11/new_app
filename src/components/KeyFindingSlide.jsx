import React from 'react';
import {useState} from 'react';

const KeyFindingSlide = (props) => {

  const [hovered, setHovered] = useState(false);
  const color = `h-[12rem] border border-[#000] ml-4 mr-4 mt-4 mb-4 rounded-sm bg-white rounded-xl`;
  return (
    <div className={color} onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <h2 className="font-aldrich text-2xl ml-4 mt-4"> {props.number} </h2>
      <h5 className="font-aldrich"> {props.title} </h5>
    </div>
  );
};

export default KeyFindingSlide;