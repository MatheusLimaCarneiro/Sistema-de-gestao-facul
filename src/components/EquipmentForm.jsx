import React, { useState, useEffect } from "react";

const EquipmentForm = ({ onSubmit, selectedEquipment }) => {
  const [equipmentData, setEquipmentData] = useState({
    type: "",
    brand: "",
    model: "",
    serialNumber: "",
    acquisitionDate: "",
    supplier: "",
    value: "",
    warranty: "",
    location: "",
    responsible: "",
  });

  useEffect(() => {
    if (selectedEquipment) {
      setEquipmentData(selectedEquipment);
    }
  }, [selectedEquipment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(equipmentData);
    setEquipmentData({
      type: "",
      brand: "",
      model: "",
      serialNumber: "",
      acquisitionDate: "",
      supplier: "",
      value: "",
      warranty: "",
      location: "",
      responsible: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Tipo de Equipamento</label>
        <input
          type="text"
          name="type"
          value={equipmentData.type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Marca</label>
        <input
          type="text"
          name="brand"
          value={equipmentData.brand}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Modelo</label>
        <input
          type="text"
          name="model"
          value={equipmentData.model}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Número de Série</label>
        <input
          type="text"
          name="serialNumber"
          value={equipmentData.serialNumber}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Data de Aquisição</label>
        <input
          type="date"
          name="acquisitionDate"
          value={equipmentData.acquisitionDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Fornecedor</label>
        <input
          type="text"
          name="supplier"
          value={equipmentData.supplier}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Valor</label>
        <input
          type="number"
          name="value"
          value={equipmentData.value}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Garantia(anos)</label>
        <input
          type="text"
          name="warranty"
          value={equipmentData.warranty}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Localização</label>
        <input
          type="text"
          name="location"
          value={equipmentData.location}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Responsável</label>
        <input
          type="text"
          name="responsible"
          value={equipmentData.responsible}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded">
        {selectedEquipment ? "Atualizar Equipamento" : "Adicionar Equipamento"}
      </button>
    </form>
  );
};

export default EquipmentForm;
