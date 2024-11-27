import React, { useState, useEffect } from 'react';

const EquipmentForm = ({ onSubmit, selectedEquipment }) => {
  const [formData, setFormData] = useState({
    type: '',
    brand: '',
    model: '',
    serialNumber: '',
    acquisitionDate: '',
    supplier: '',
    value: '',
    warranty: '',
    location: '',
    responsible: '',
  });

  // Preencher os campos do formulário quando um equipamento for selecionado para edição
  useEffect(() => {
    if (selectedEquipment) {
      setFormData({
        type: selectedEquipment.type || '',
        brand: selectedEquipment.brand || '',
        model: selectedEquipment.model || '',
        serialNumber: selectedEquipment.serialNumber || '',
        acquisitionDate: selectedEquipment.acquisitionDate || '',
        supplier: selectedEquipment.supplier || '',
        value: selectedEquipment.value || '',
        warranty: selectedEquipment.warranty || '',
        location: selectedEquipment.location || '',
        responsible: selectedEquipment.responsible || '',
      });
    }
  }, [selectedEquipment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envia os dados preenchidos para o componente pai
    setFormData({
      type: '',
      brand: '',
      model: '',
      serialNumber: '',
      acquisitionDate: '',
      supplier: '',
      value: '',
      warranty: '',
      location: '',
      responsible: '',
    }); // Limpa o formulário após o envio
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Tipo de Equipamento</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Marca</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Modelo</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Número de Série</label>
          <input
            type="text"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Data de Aquisição</label>
          <input
            type="date"
            name="acquisitionDate"
            value={formData.acquisitionDate}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Fornecedor</label>
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Valor</label>
          <input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Garantia (em anos)</label>
          <input
            type="number"
            name="warranty"
            value={formData.warranty}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Localização</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Responsável</label>
          <input
            type="text"
            name="responsible"
            value={formData.responsible}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4"
      >
        {selectedEquipment ? 'Atualizar Equipamento' : 'Adicionar Equipamento'}
      </button>
    </form>
  );
};

export default EquipmentForm;
