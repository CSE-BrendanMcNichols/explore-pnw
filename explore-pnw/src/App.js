// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import SpaceNeedle from './pages/SpaceNeedle';
import SchedulePlanner from './pages/SchedulePlanner';
import TravelTips from './pages/TravelTips';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Destinations />} />
        <Route path="/" element={<SpaceNeedle />} />
        <Route path="/" element={<SchedulePlanner />} />
        <Route path="/" element={<TravelTips />} />
      </Routes>
    </Router>
  );
}

export default App;
