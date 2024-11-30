import React from 'react';

export const Toast = ({ message, type }) => {
  const getToastStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      default:
        return '';
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${getToastStyles(
        type
      )} transition-opacity duration-300`}
      style={{ zIndex: 1000 }}
    >
      {message}
    </div>
  );
};