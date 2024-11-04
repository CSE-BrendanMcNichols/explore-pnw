import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/space-needle" element={<SpaceNeedle />} />
        <Route path="/schedule-planner" element={<SchedulePlanner />} />
        <Route path="/travel-tips" element={<TravelTips />} />
      </Routes>
    </Router>
  );
}

export default App;
