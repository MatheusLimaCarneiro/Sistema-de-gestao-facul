import React, { useState } from 'react';
import { useEquipment } from '../contexts/EquipmentContext';
import EquipmentForm from '../components/EquipmentForm';
import { Toast } from '../components/Toast';

export const CadastroEquipamento = () => {
  const [toast, setToast] = useState(null);
  const {addEquipment, updateEquipment } = useEquipment();
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handleSubmit = (equipment) => {
    if (selectedEquipment) {
      updateEquipment(selectedEquipment.id, equipment);
    } else {
      addEquipment(equipment);
    }
    setToast({ message: 'Equipamento Cadastrado', type: 'success' });
    setTimeout(() => {
      setToast(null);
    }, 3000);

    setSelectedEquipment(null);
  };


  return (
    <div className="container mx-auto p-6">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          {selectedEquipment ? "Editar Equipamento" : "Cadastrar Novo Equipamento"}
        </h1>
        <p className="text-center text-gray-600 mb-4">
          {selectedEquipment ? "Modifique os dados do equipamento abaixo." : "Preencha os campos para adicionar um novo equipamento."}
        </p>
        <EquipmentForm onSubmit={handleSubmit} selectedEquipment={selectedEquipment} />
        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    </div>
  );
};
