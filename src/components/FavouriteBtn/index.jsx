import React from "react";

export const FavouriteBtn = () => (
  <button
    type="button"
    className="focus:outline-none uppercase flex-1 flex-nowrap whitespace-nowrap inline-block text-black border-purple-600  border border-solid hover:text-white hover:bg-purple-500  duration-500 focus:ring-4 focus:ring-purple-300 rounded-sm text-sm px-5 py-2.5 mb-2 dark:bg-purple-600  dark:focus:ring-purple-900"
  >
    Favourite <i className="fa fa-heart" aria-hidden="true"></i>
  </button>
);
