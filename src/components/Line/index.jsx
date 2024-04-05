// Line.js
import React from 'react';
import './line.css'

const Line = ({ rotation = 0, left = '50%', top = "0%", height = "100%" }) => {
    // Prepare inline style object including rotation and left position
    const lineStyle = {
        position: 'absolute',
        width: '1px',
        height: height,
        top: top,
        left: left, // Use left prop
        background: 'rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        transform: `rotate(${rotation}deg)` // Use rotation prop
    };

    return (
        <div className="line" style={lineStyle} />
    );
};

export default Line;
