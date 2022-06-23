import React from "react";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

export const MainBtn: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none flex-1 flex-nowrap whitespace-nowrap inline-block text-white border-purple-600 bg-purple-600 border border-solid hover:text-black hover:bg-white  duration-500 focus:ring-4 focus:ring-purple-300 rounded-sm text-sm px-5 py-2.5 mb-2 "
    >
      {text ? (
        text
      ) : (
        <>
          ADD TO CART <li className="fa fa-plus"></li>
        </>
      )}
    </button>
  );
};
