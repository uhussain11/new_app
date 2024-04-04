import React, {useEffect, useState} from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [showStart, setShowStart] = useState(false);
    const [movePages, setMovePages] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowStart(true); 
        }, 5000);
    
        return () => clearTimeout(timeout); 
      }, []); 


      const HandleClick = () => {
        setMovePages(true); 
      }


  return (
        <div className={movePages ? 'loading-screen display-none' : 'loading-screen'}>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className='charging-battery'></div>

            <div className={showStart ? 'start-button' : ''} 
            style={{ opacity: showStart ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            onClick={HandleClick}
            >
                <h2 className='start-text'>PRESS <br /> START</h2>
            </div>
        </div>
  );
};

export default LoadingScreen;
