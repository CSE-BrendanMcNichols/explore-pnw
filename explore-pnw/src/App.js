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
      <Router basename="/explore-pnw">
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="destinations" element={<Destinations />} />
        <Route path="space-needle" element={<SpaceNeedle />} />
        <Route path="schedule-planner" element={<SchedulePlanner />} />
        <Route path="travel-tips" element={<TravelTips />} />
        
        {/* Catch-all route to redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
