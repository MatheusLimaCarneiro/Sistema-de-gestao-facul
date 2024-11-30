import React, { createContext, useContext, useState, useEffect } from "react";
import {
  saveEquipmentToLocalStorage,
  loadEquipmentFromLocalStorage,
} from "../utils/localStorage";

const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    const storedEquipment = loadEquipmentFromLocalStorage();
    setEquipmentList(storedEquipment);
  }, []);

  const addEquipment = (equipment) => {
    const newEquipment = { ...equipment, id: Date.now(), status: "Ativo" };
    const updatedList = [...equipmentList, newEquipment];
    setEquipmentList(updatedList);
    saveEquipmentToLocalStorage(updatedList);
  };

  const updateEquipment = (id, updatedEquipment) => {
    const updatedList = equipmentList.map((equipment) =>
      equipment.id === id ? { ...equipment, ...updatedEquipment } : equipment
    );
    setEquipmentList(updatedList);
    saveEquipmentToLocalStorage(updatedList);
  };

  const deleteEquipment = (id) => {
    const updatedList = equipmentList.filter(
      (equipment) => equipment.id !== id
    );
    setEquipmentList(updatedList);
    saveEquipmentToLocalStorage(updatedList);
  };

  const changeStatus = (id, newStatus) => {
    const updatedList = equipmentList.map((equipment) =>
      equipment.id === id ? { ...equipment, status: newStatus } : equipment
    );
    setEquipmentList(updatedList);
    saveEquipmentToLocalStorage(updatedList);
  };
  

  return (
    <EquipmentContext.Provider
      value={{
        equipmentList,
        addEquipment,
        updateEquipment,
        deleteEquipment,
        changeStatus,
      }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export const useEquipment = () => {
  return useContext(EquipmentContext);
};