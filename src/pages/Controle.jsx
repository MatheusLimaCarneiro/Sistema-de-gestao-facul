import React, { useState } from "react";
import { useEquipment } from "../contexts/EquipmentContext";
import EquipmentForm from "../components/EquipmentForm";
import EquipmentList from "../components/EquipmentList";
import { Toast } from "../components/Toast";

export const Controle = () => {
  const {
    equipmentList,
    addEquipment,
    updateEquipment,
    deleteEquipment,
    changeStatus,
  } = useEquipment();
  
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [toast, setToast] = useState(null);

  const handleSubmit = (equipment) => {
    if (selectedEquipment) {
      updateEquipment(selectedEquipment.id, equipment);
      setToast({ message: 'Equipamento Editado', type: 'warning' });
    } else {
      addEquipment(equipment);
      setToast({ message: 'Equipamento Cadastrado', type: 'success' });
    }
    setSelectedEquipment(null);
    setTimeout(() => setToast(null), 3000); 
  };

  const handleEdit = (id) => {
    const equipment = equipmentList.find((eq) => eq.id === id);
    setSelectedEquipment(equipment);
  };

  const handleDelete = (id) => {
    deleteEquipment(id);
    setToast({ message: 'Equipamento Deletado', type: 'error' });
    setTimeout(() => setToast(null), 3000); 
  };

  return (
    <div className="container mx-auto p-6">
      {toast && <Toast message={toast.message} type={toast.type} />}
      
      <div className="bg-green-100 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Controle de Equipamentos
        </h1>
        <p className="text-center text-gray-500">
          Você não pode adicionar equipamento nesta aba.
        </p>

        <EquipmentForm
          onSubmit={handleSubmit}
          selectedEquipment={selectedEquipment}
        />

        <div className="mt-8">
          <EquipmentList
            equipmentList={equipmentList}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={changeStatus}
            showActions={true}
          />
        </div>
      </div>
    </div>
  );
};
