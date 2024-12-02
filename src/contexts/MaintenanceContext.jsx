import React, { createContext, useContext, useState } from "react";

const MaintenanceContext = createContext();

export const MaintenanceProvider = ({ children }) => {
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);

  const addMaintenanceRecord = (equipmentId, maintenanceDetails) => {
    const newRecord = {
      id: Date.now(),
      equipmentId,
      date: new Date().toISOString(),
      ...maintenanceDetails,
    };

    setMaintenanceHistory((prev) => [...prev, newRecord]);
  };

  const getMaintenanceHistoryForEquipment = (equipmentId) => {
    return maintenanceHistory.filter(
      (record) => record.equipmentId === equipmentId
    );
  };

  return (
    <MaintenanceContext.Provider
      value={{
        maintenanceHistory,
        addMaintenanceRecord,
        getMaintenanceHistoryForEquipment,
      }}>
      {children}
    </MaintenanceContext.Provider>
  );
};

export const useMaintenance = () => {
  const context = useContext(MaintenanceContext);
  if (!context) {
    throw new Error("useMaintenance must be used within a MaintenanceProvider");
  }
  return context;
};
