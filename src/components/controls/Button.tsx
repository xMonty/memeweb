import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  text: string,
}

const Button: React.FC<ButtonProps> = ({ 
    variant,
    text,
    ...props
  }) => { 
  return (
    <button {...props} className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none">
      {text}
    </button>
  );
}

export default Button;
