import React, { useState } from "react";
import { useEquipment } from "../contexts/EquipmentContext";
import { useMaintenance } from "../contexts/MaintenanceContext";
import { Modal } from "../components/Modal";

export const Manutencao = () => {
  const { equipmentList } = useEquipment();
  const { addMaintenanceRecord, getMaintenanceHistoryForEquipment } =
    useMaintenance();

  const [filterText, setFilterText] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  const maintenanceEquipments = equipmentList.filter(
    (equipment) =>
      equipment.status === "Em Manutenção" &&
      equipment.type.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleOpenHistoryModal = (equipment) => {
    setSelectedEquipment(equipment);
    setShowHistoryModal(true);
  };

  const handleOpenMaintenanceModal = (equipment) => {
    setSelectedEquipment(equipment);
    setShowMaintenanceModal(true);
  };

  const handleAddMaintenanceRecord = (details) => {
    if (selectedEquipment) {
      addMaintenanceRecord(selectedEquipment.id, details);
      setShowMaintenanceModal(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Equipamentos em Manutenção
      </h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por tipo de equipamento"
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {maintenanceEquipments.length === 0 ? (
        <p className="text-center text-gray-600">
          Nenhum equipamento em manutenção
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-yellow-100 text-yellow-700">
              <tr>
                <th className="p-4 border-b">Tipo</th>
                <th className="p-4 border-b">Marca</th>
                <th className="p-4 border-b">Modelo</th>
                <th className="p-4 border-b">Número de Série</th>
                <th className="p-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceEquipments.map((equipment) => (
                <tr key={equipment.id} className="hover:bg-gray-50">
                  <td className="p-4 border-b text-center">{equipment.type}</td>
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
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleOpenMaintenanceModal(equipment)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded">
                        Manutenção
                      </button>
                      <button
                        onClick={() => handleOpenHistoryModal(equipment)}
                        className="bg-blue-500 text-white px-3 py-1 rounded">
                        Histórico
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showHistoryModal && selectedEquipment && (
        <Modal onClose={() => setShowHistoryModal(false)}>
          <h2 className="text-2xl mb-4">
            Histórico de Manutenção - {selectedEquipment.type}
          </h2>
          <div>
            {getMaintenanceHistoryForEquipment(selectedEquipment.id).map(
              (record) => (
                <div key={record.id} className="mb-2 p-2 border rounded">
                  <p>Data: {new Date(record.date).toLocaleDateString()}</p>
                  <p>Descrição: {record.description}</p>
                </div>
              )
            )}
          </div>
        </Modal>
      )}

      {showMaintenanceModal && selectedEquipment && (
        <Modal onClose={() => setShowMaintenanceModal(false)}>
          <h2 className="text-2xl mb-4">
            Nova Manutenção - {selectedEquipment.type}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddMaintenanceRecord({
                description: e.target.description.value,
              });
            }}>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              placeholder="Descreva a manutenção realizada"
              required
            />
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded">
                Salvar Manutenção
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
