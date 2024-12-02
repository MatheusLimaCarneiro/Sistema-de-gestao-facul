import React, { useState } from "react";
import { useEquipment } from "../contexts/EquipmentContext";

const Dashboard = () => {
  const { equipmentList } = useEquipment();

  const activeCount =
    equipmentList?.filter((eq) => eq.status === "Ativo").length || 0;
  const discardedCount =
    equipmentList?.filter((eq) => eq.status === "Descartado").length || 0;
  const maintenanceCount =
    equipmentList?.filter((eq) => eq.status === "Em Manutenção").length || 0;

  const [filterText, setFilterText] = useState("");

  const filteredEquipments =
    equipmentList?.filter((equipment) =>
      equipment?.type?.toLowerCase().includes(filterText.toLowerCase())
    ) || [];

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-blue-600">
        Dashboard de Equipamentos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold text-lg">Ativos</h2>
          <p className="text-xl sm:text-2xl text-green-700">{activeCount}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold text-lg">Descartados</h2>
          <p className="text-xl sm:text-2xl text-red-700">{discardedCount}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold text-lg">Em Manutenção</h2>
          <p className="text-xl sm:text-2xl text-yellow-700">
            {maintenanceCount}
          </p>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por tipo do equipamento"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>

        {filteredEquipments.length === 0 ? (
          <p className="text-center text-gray-600">
            Nenhum equipamento encontrado
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-blue-100 text-blue-700 ">
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
                {filteredEquipments.map((equipment) => (
                  <tr key={equipment.id} className="hover:bg-gray-50">
                    <td className="p-4 border-b text-center">
                      {equipment.type}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.brand}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.model}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.serialNumber}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.acquisitionDate}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.supplier}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.value}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.warranty}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.location}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.responsible}
                    </td>
                    <td className="p-4 border-b text-center">
                      {equipment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
