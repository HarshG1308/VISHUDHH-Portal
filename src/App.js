import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StateDashboard from './components/StateDashboard';
import DistrictDashboard from './components/DistrictDashboard';
import CameraDetail from './components/CameraDetail';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import TeamPage from './components/TeamPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/state-dashboard" element={<StateDashboard />} />
        <Route path="/district-dashboard" element={<DistrictDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/camera/:id" element={<CameraDetail />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;