import React from "react";

export enum ButtonType {
  primary
}

interface Props {
  type: ButtonType;
  text: string,
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    type,
    text,
    onClick, 
  }) => { 
  return (
    <button onClick={onClick} className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none">
      {text}
    </button>
  );
}

export default Button;
