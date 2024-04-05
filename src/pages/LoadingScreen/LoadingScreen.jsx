import React, {useEffect, useState} from 'react';
import Line from '../../components/Line/index';
import './LoadingScreen.css';

const LoadingScreen = ({moveToHome}) => {
  const [showStart, setShowStart] = useState(false);
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
      const timeout = setTimeout(() => {
        setShowStart(true); 
      }, 5000);
  
      return () => clearTimeout(timeout); 
    }, []); 


    const HandleClick = () => {
      setDisappear(true);

      setTimeout(() => {
        moveToHome(true);
      }, 800);
    }

  return (
        <div className={disappear ? 'loading-screen display-none' : 'loading-screen'}>
          <Line rotation={-70} left="90%" top="-35%" height="100%" />
          <Line rotation={-70} left="80%" top="-35%" height="100%" />
          <div className='charging-battery'></div>
          <div className={showStart ? 'start-button' : ''} 
            style={{ opacity: showStart ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            onClick={HandleClick}
          >
            <h2 className='start-text'>PRESS <br /> START</h2>
          </div>
          <Line rotation={-70} left="10%" top="0%" height="150%" />
          <Line rotation={-70} left="0%" top="0%" height="150%" />
        </div>
  );
};

export default LoadingScreen;
