import React from 'react';
import './Botton.css';

const Botton = ({ 
  text = 'Iniciar Sesión', 
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button
      className={`botton botton--${size} botton--${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Botton;