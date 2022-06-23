import React from "react";

export const ProductInput = (porps) => {
  const { label, ...rest } = porps;

  return (
    <div className="flex flex-col pt-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 ml-3"
        HtmlFor={rest.name}
      >
        {label}
      </label>
      <input
        {...rest}
        id={rest.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
