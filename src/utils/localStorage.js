// utils/localStorage.js

// Função para salvar no LocalStorage
export const saveEquipmentToLocalStorage = (equipmentList) => {
  localStorage.setItem('equipment', JSON.stringify(equipmentList));
};

// Função para carregar do LocalStorage
export const loadEquipmentFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('equipment')) || [];
};
