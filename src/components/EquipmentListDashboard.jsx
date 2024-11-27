import React from "react";

const EquipmentListDashboard = ({ equipmentList }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Tipo</th>
            <th className="px-4 py-2 border">Marca</th>
            <th className="px-4 py-2 border">Modelo</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {equipmentList.length > 0 ? (
            equipmentList.map((equipment) => (
              <tr key={equipment.id}>
                <td className="px-4 py-2 border">{equipment.tipo}</td>
                <td className="px-4 py-2 border">{equipment.marca}</td>
                <td className="px-4 py-2 border">{equipment.modelo}</td>
                <td className="px-4 py-2 border">{equipment.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-4 py-2 border">
                Nenhum equipamento registrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentListDashboard;
