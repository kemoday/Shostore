import React from "react";

interface Props {
  handleIncrment: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDecrment: (event: React.MouseEvent<HTMLButtonElement>) => void;
  itemCount: number;
  stoke: number;
}

export const CounterBtns: React.FC<Props> = ({
  handleIncrment,
  handleDecrment,
  itemCount,
  stoke,
}) => {
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
        disabled={itemCount === stoke}
        onClick={handleIncrment}
        className="ml-8 p-2 px-4 hover:bg-purple-600 disabled:bg-gray-500 disabled:cursor-not-allowed hover:text-white border-l duration-500"
      >
        +
      </button>
    </div>
  );
};
