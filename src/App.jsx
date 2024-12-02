import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EquipmentProvider } from "./contexts/EquipmentContext";
import { MaintenanceProvider } from "./contexts/MaintenanceContext";
import { NavBar } from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { CadastroEquipamento } from "./pages/RegistrationEquipment";
import { Controle } from "./pages/Control";
import { Manutencao } from "./pages/ManutencaoTemp";

const App = () => {
  return (
    <EquipmentProvider>
      <MaintenanceProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipment" element={<CadastroEquipamento />} />
            <Route path="/controle" element={<Controle />} />
            <Route path="/manutencao" element={<Manutencao />} />
          </Routes>
        </Router>
      </MaintenanceProvider>
    </EquipmentProvider>
  );
};

export default App;
