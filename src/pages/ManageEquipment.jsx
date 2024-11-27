// ManageEquipment.jsx
import React, { useState, useEffect } from 'react';
import { saveEquipmentToLocalStorage } from '../utils/localStorage'; // Função para salvar no LocalStorage

const ManageEquipment = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
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

  // Função para adicionar o equipamento
  const handleAddEquipment = () => {
    const updatedList = [...equipmentList, newEquipment];
    setEquipmentList(updatedList);
    saveEquipmentToLocalStorage(updatedList); // Salva a lista no LocalStorage
    setNewEquipment({ // Limpa o formulário após o envio
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
  };

  useEffect(() => {
    const savedEquipments = JSON.parse(localStorage.getItem('equipment')) || [];
    setEquipmentList(savedEquipments); // Atualiza o estado com os equipamentos do LocalStorage
  }, []); // Carrega os equipamentos do LocalStorage quando o componente for montado

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Cadastro de Equipamento</h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Equipamento</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tipo de Equipamento"
            value={newEquipment.type}
            onChange={(e) => setNewEquipment({ ...newEquipment, type: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marca</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Marca"
            value={newEquipment.brand}
            onChange={(e) => setNewEquipment({ ...newEquipment, brand: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Modelo</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Modelo"
            value={newEquipment.model}
            onChange={(e) => setNewEquipment({ ...newEquipment, model: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Número de Série</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Número de Série"
            value={newEquipment.serialNumber}
            onChange={(e) => setNewEquipment({ ...newEquipment, serialNumber: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Data de Aquisição</label>
          <input
            type="date"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newEquipment.acquisitionDate}
            onChange={(e) => setNewEquipment({ ...newEquipment, acquisitionDate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fornecedor</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Fornecedor"
            value={newEquipment.supplier}
            onChange={(e) => setNewEquipment({ ...newEquipment, supplier: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Valor</label>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Valor"
            value={newEquipment.value}
            onChange={(e) => setNewEquipment({ ...newEquipment, value: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Garantia</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Garantia"
            value={newEquipment.warranty}
            onChange={(e) => setNewEquipment({ ...newEquipment, warranty: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Localização</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Localização"
            value={newEquipment.location}
            onChange={(e) => setNewEquipment({ ...newEquipment, location: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Responsável</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Responsável"
            value={newEquipment.responsible}
            onChange={(e) => setNewEquipment({ ...newEquipment, responsible: e.target.value })}
          />
        </div>
        <div className="col-span-2">
          <button
            type="button"
            onClick={handleAddEquipment}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Adicionar Equipamento
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageEquipment;
