import React, { InputHTMLAttributes } from "react";
import { Field, useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div>
      <input
        {...field}
        {...props}
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        placeholder={label}
        id={field.name} 
      />
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default InputField;