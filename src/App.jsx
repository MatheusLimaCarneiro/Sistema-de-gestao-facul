import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EquipmentProvider } from "./contexts/EquipmentContext";
import { NavBar } from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { CadastroEquipamento } from "./pages/CadastroEquipamento";
import { Controle } from "./pages/Controle";

const App = () => {
  return (
    <EquipmentProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equipment" element={<CadastroEquipamento />} />
          <Route path="/controle" element={<Controle />} />
        </Routes>
      </Router>
    </EquipmentProvider>
  );
};

export default App;
