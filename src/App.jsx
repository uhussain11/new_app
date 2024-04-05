import React, {useState} from 'react';
import './App.css'
import HomePage from "./pages/HomePage"
import LoadingScreen from './pages/LoadingScreen/LoadingScreen';

function App() {
  const [movePages, setMovePages] = useState(false);

  function moveToHome(value) {
    setMovePages(value);
  }

  return (
    <>
    {movePages ? (
        <HomePage />
      ) : (
        <LoadingScreen moveToHome={moveToHome}/>
      )}
    </>
  )
}

export default App
