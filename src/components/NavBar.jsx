import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">TI Inventory System</h1>
        <div>
          <Link className="text-white mx-4" to="/" activeClassName="text-yellow-400">
            Dashboard
          </Link>
          <Link className="text-white mx-4" to="/equipment" activeClassName="text-yellow-400">
            Cadastro Equipamentos
          </Link>
          <Link className="text-white mx-4" to="/controle" activeClassName="text-yellow-400">
            Controle
          </Link>
        </div>
      </div>
    </nav>
  );
};
