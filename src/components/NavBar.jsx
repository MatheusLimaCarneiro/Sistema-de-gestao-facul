import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">TI Inventory System</h1>
        <div>
          <Link className="text-white mx-4" to="/">Dashboard</Link>
          <Link className="text-white mx-4" to="/equipment">Manage Equipment</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
