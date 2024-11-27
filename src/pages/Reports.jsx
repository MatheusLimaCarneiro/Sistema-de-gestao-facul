import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { loadEquipmentFromLocalStorage } from '../utils/localStorage';

// Registra os tipos de gráficos no Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  // Carregar os dados dos equipamentos do LocalStorage
  useEffect(() => {
    const loadedEquipment = loadEquipmentFromLocalStorage();
    setEquipmentList(loadedEquipment);
  }, []);

  // Função para gerar relatório de equipamentos por tipo (Computador, Servidor, etc.)
  const getEquipmentTypeData = () => {
    const equipmentTypes = equipmentList.reduce((acc, item) => {
      acc[item.tipo] = (acc[item.tipo] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(equipmentTypes),
      datasets: [
        {
          label: 'Equipamentos por Tipo',
          data: Object.values(equipmentTypes),
          backgroundColor: ['#36A2EB', '#FF5733', '#FFB300', '#4CAF50'],
        },
      ],
    };
  };

  // Função para gerar relatório de equipamentos por status (ativo, em manutenção, etc.)
  const getEquipmentStatusData = () => {
    const equipmentStatus = equipmentList.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(equipmentStatus),
      datasets: [
        {
          label: 'Equipamentos por Status',
          data: Object.values(equipmentStatus),
          backgroundColor: ['#FFCD56', '#FF5733', '#28A745'],
        },
      ],
    };
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Relatórios Analíticos de Inventário de TI</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl mb-4">Equipamentos por Tipo</h2>
          <Bar data={getEquipmentTypeData()} options={{ responsive: true, plugins: { title: { display: true, text: 'Equipamentos por Tipo' } } }} />
        </div>

        <div>
          <h2 className="text-2xl mb-4">Equipamentos por Status</h2>
          <Pie data={getEquipmentStatusData()} options={{ responsive: true, plugins: { title: { display: true, text: 'Equipamentos por Status' } } }} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
