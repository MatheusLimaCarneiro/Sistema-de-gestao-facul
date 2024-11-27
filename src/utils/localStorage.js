export const saveEquipmentToLocalStorage = (equipmentList) => {
  localStorage.setItem('equipmentList', JSON.stringify(equipmentList));
};

export const loadEquipmentFromLocalStorage = () => {
  const savedEquipment = localStorage.getItem('equipmentList');
  return savedEquipment ? JSON.parse(savedEquipment) : [];
};
