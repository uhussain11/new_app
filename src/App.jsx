import './App.css'
import HomePage from "./pages/HomePage"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
