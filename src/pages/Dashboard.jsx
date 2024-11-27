import React from "react";
import { useEquipment } from "../contexts/EquipmentContext";

const Dashboard = () => {
  const { equipmentList } = useEquipment();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Dashboard de Equipamentos
      </h1>
      {equipmentList.length === 0 ? (
        <p className="text-center">Nenhum equipamento cadastrado</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="p-4 border-b">Tipo</th>
              <th className="p-4 border-b">Marca</th>
              <th className="p-4 border-b">Modelo</th>
              <th className="p-4 border-b">Número de Série</th>
              <th className="p-4 border-b">Data de Aquisição</th>
              <th className="p-4 border-b">Fornecedor</th>
              <th className="p-4 border-b">Valor</th>
              <th className="p-4 border-b">Garantia</th>
              <th className="p-4 border-b">Localização</th>
              <th className="p-4 border-b">Responsável</th>
              <th className="p-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment) => (
              <tr key={equipment.id}>
                <td className="p-4 border-b">{equipment.type}</td>
                <td className="p-4 border-b">{equipment.brand}</td>
                <td className="p-4 border-b">{equipment.model}</td>
                <td className="p-4 border-b">{equipment.serialNumber}</td>
                <td className="p-4 border-b">{equipment.acquisitionDate}</td>
                <td className="p-4 border-b">{equipment.supplier}</td>
                <td className="p-4 border-b">{equipment.value}</td>
                <td className="p-4 border-b">{equipment.warranty}</td>
                <td className="p-4 border-b">{equipment.location}</td>
                <td className="p-4 border-b">{equipment.responsible}</td>
                <td className="p-4 border-b">{equipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
