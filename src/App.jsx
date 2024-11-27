import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EquipmentProvider } from "./contexts/EquipmentContext";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import ManageEquipment from "./pages/ManageEquipment";

const App = () => {
  return (
    <EquipmentProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equipment" element={<ManageEquipment />} />
        </Routes>
      </Router>
    </EquipmentProvider>
  );
};

export default App;
