import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageEquipment from './pages/ManageEquipment';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-800 text-white">
          <ul className="flex space-x-4">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/manage">Manage Equipment</Link></li>
            <li><Link to="/reports">Relatórios</Link></li>
          </ul>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage" element={<ManageEquipment />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
