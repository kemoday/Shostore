import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductInput: React.FC<Props> = (porps) => {
  const { label, ...rest } = porps;
  const name = porps.name;
  return (
    <div className="flex flex-col pt-4">
      <label
        className="block text-gray-700 font-bold mb-2 text-lg"
        htmlFor={name}
      >
        {label}
        {rest.required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...rest}
        id={name}
        className="shadow appearance-none focus:border-purple-600 border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
