import React from "react";

const EquipmentList = ({
  equipmentList,
  onEdit,
  onDelete,
  showActions,
  onStatusChange,
}) => {
  const handleStatusSelect = (id, event) => {
    const newStatus = event.target.value;
    onStatusChange(id, newStatus);
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border text-sm sm:text-base">Tipo</th>
            <th className="px-4 py-2 border text-sm sm:text-base">Marca</th>
            <th className="px-4 py-2 border text-sm sm:text-base">Modelo</th>
            <th className="px-4 py-2 border text-sm sm:text-base">Status</th>
            {showActions && (
              <th className="px-4 py-2 border text-sm sm:text-base">Ações</th>
            )}
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment) => (
            <tr key={equipment.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border text-sm sm:text-base text-center">
                {equipment.type}
              </td>
              <td className="px-4 py-2 border text-sm sm:text-base text-center">
                {equipment.brand}
              </td>
              <td className="px-4 py-2 border text-sm sm:text-base text-center">
                {equipment.model}
              </td>
              <td className="px-4 py-2 border text-sm sm:text-base text-center">
                <select
                  value={equipment.status}
                  onChange={(e) => handleStatusSelect(equipment.id, e)}
                  className="border p-1 rounded w-full sm:w-auto text-sm">
                  <option value="Ativo">Ativo</option>
                  <option value="Em Manutenção">Em Manutenção</option>
                  <option value="Descartado">Descartado</option>
                </select>
              </td>
              {showActions && (
                <td className="px-4 py-2 border text-sm sm:text-base text-center">
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <button
                      onClick={() => onEdit(equipment.id)}
                      className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm">
                      Editar
                    </button>
                    <button
                      onClick={() => onDelete(equipment.id)}
                      className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm">
                      Deletar
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
