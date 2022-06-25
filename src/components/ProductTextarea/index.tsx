import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
//featurers

export const ProductTextarea: React.FC<Props> = (porps) => {
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
      <textarea
        {...rest}
        rows={5}
        className="shadow appearance-none focus:border-purple-600 border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none"
      />
    </div>
  );
};
