import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  full?: boolean;
}

export const PrimaryBtn: React.FC<Props> = ({ onClick, text, full }) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none ${
        full && "flex-1"
      } flex-nowrap whitespace-nowrap inline-block text-white border-purple-600 bg-purple-600 border border-solid hover:text-black hover:bg-white  duration-500 focus:ring-4 focus:ring-purple-300 rounded-sm text-sm px-5 py-2.5 mb-2 `}
    >
      {text}
    </button>
  );
};
