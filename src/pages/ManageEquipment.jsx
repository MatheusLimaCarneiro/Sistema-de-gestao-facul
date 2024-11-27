import React, { useState } from 'react';
import { useEquipment } from '../contexts/EquipmentContext';
import EquipmentForm from '../components/EquipmentForm';
import EquipmentList from '../components/EquipmentList';

const ManageEquipment = () => {
  const { equipmentList, addEquipment, updateEquipment, deleteEquipment, changeStatus } = useEquipment();
  const [selectedEquipment, setSelectedEquipment] = useState(null);
 

  const handleSubmit = (equipment) => {
    if (selectedEquipment) {
      updateEquipment(selectedEquipment.id, equipment);
    } else {
      addEquipment(equipment);  
    }
    setSelectedEquipment(null);  
  };

  const handleEdit = (id) => {
    const equipment = equipmentList.find((eq) => eq.id === id);
    setSelectedEquipment(equipment);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Gerenciar Equipamentos</h1>

      <EquipmentForm onSubmit={handleSubmit} selectedEquipment={selectedEquipment} />

      <div className="mt-8">
        <EquipmentList
          equipmentList={equipmentList}
          onEdit={handleEdit}
          onDelete={deleteEquipment}  
          onStatusChange={changeStatus}
          showActions={true}
        />
      </div>
    </div>
  );
};

export default ManageEquipment;
