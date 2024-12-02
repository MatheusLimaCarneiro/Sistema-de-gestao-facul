import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-white text-2xl w-full md:w-auto flex justify-between items-center">
          TI Inventory System
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </h1>

        <div
          className={`
          w-full md:w-auto 
          ${isMenuOpen ? "block" : "hidden"} 
          md:flex 
          flex-col md:flex-row 
          space-y-2 md:space-y-0 
          md:space-x-4
        `}>
          <Link
            className="text-white block md:inline-block text-center hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0"
            to="/">
            Dashboard
          </Link>
          <Link
            className="text-white block md:inline-block text-center hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0"
            to="/equipment">
            Cadastro Equipamentos
          </Link>
          <Link
            className="text-white block md:inline-block text-center hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0"
            to="/controle">
            Controle
          </Link>
          <Link
            className="text-white block md:inline-block text-center hover:bg-blue-700 md:hover:bg-transparent p-2 md:p-0"
            to="/manutencao">
            Manutenção
          </Link>
        </div>
      </div>
    </nav>
  );
};
