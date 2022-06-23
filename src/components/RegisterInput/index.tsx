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

export const RegisterInput: React.FC<Props> = (porps) => {
  const { label, ...rest } = porps;
  return (
    <div className="flex flex-col pt-4">
      <label htmlFor={rest.name} className="text-lg">
        {label}
      </label>
      <input
        id={rest.name}
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
