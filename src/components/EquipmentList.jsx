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
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Tipo</th>
            <th className="px-4 py-2 border">Marca</th>
            <th className="px-4 py-2 border">Modelo</th>
            <th className="px-4 py-2 border">Status</th>
            {showActions && <th className="px-4 py-2 border">Ações</th>}
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment) => (
            <tr key={equipment.id}>
              <td className="px-4 py-2 border">{equipment.type}</td>
              <td className="px-4 py-2 border">{equipment.brand}</td>
              <td className="px-4 py-2 border">{equipment.model}</td>
              <td className="px-4 py-2 border">
                <select
                  value={equipment.status}
                  onChange={(e) => handleStatusSelect(equipment.id, e)}
                  className="border p-1 rounded">
                  <option value="Ativo">Ativo</option>
                  <option value="Em Manutenção">Em Manutenção</option>
                  <option value="Descartado">Descartado</option>
                </select>
              </td>
              {showActions && (
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => onEdit(equipment.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(equipment.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded">
                    Deletar
                  </button>
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
