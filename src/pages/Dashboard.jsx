// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { loadEquipmentFromLocalStorage } from '../utils/localStorage'; // Função para carregar os dados do LocalStorage

const Dashboard = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    const savedEquipments = loadEquipmentFromLocalStorage(); // Carrega os dados do LocalStorage
    setEquipmentList(savedEquipments); // Atualiza o estado com os equipamentos carregados
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Dashboard de Equipamentos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum equipamento registrado ainda.</p>
        ) : (
          equipmentList.map((equipment, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{equipment.type} - {equipment.model}</h3>
              <p><strong>Marca:</strong> {equipment.brand}</p>
              <p><strong>Número de Série:</strong> {equipment.serialNumber}</p>
              <p><strong>Data de Aquisição:</strong> {equipment.acquisitionDate}</p>
              <p><strong>Fornecedor:</strong> {equipment.supplier}</p>
              <p><strong>Valor:</strong> R${equipment.value}</p>
              <p><strong>Garantia:</strong> {equipment.warranty}</p>
              <p><strong>Localização:</strong> {equipment.location}</p>
              <p><strong>Responsável:</strong> {equipment.responsible}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
