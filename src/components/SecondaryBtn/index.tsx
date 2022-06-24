import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  full?: boolean;
}
export const SecondaryBtn: React.FC<Props> = ({ onClick, text, full }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`focus:outline-none uppercase ${
        full && "flex-1"
      } flex-nowrap whitespace-nowrap inline-block text-black border-purple-600  border border-solid hover:text-white hover:bg-purple-500  duration-500 focus:ring-4 focus:ring-purple-300 rounded-sm text-sm px-5 py-2.5 mb-2 dark:bg-purple-600  dark:focus:ring-purple-900`}
    >
      {text}
    </button>
  );
};
