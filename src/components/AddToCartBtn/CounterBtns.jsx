import React from "react";

export const CounterBtns = ({ handleIncrment, handleDecrment, itemCount }) => {
  return (
    <div className="rounded-sm border-purple-600 text-center inline-block border font-bold mb-2">
      <button
        onClick={handleDecrment}
        className="mr-8 p-2 px-4 hover:bg-purple-600 hover:text-white border-r duration-500"
      >
        -
      </button>
      {itemCount}
      <button
        onClick={handleIncrment}
        className="ml-8 p-2 px-4 hover:bg-purple-600 hover:text-white border-l duration-500"
      >
        +
      </button>
    </div>
  );
};
