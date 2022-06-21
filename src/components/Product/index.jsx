import React from "react";
import { AddToCartBtn } from "../AddToCartBtn/";

export const Product = ({
  name = "Product Name",
  price = "£9.99",
  favorite = true,
}) => {
  return (
    <div className="w-full bg-white p-6 flex flex-col rounded-md border border-solid border-gray-300 basis-1/4">
      <a href="/">
        <img
          alt={name}
          className="hover:grow hover:shadow-lg rounded-md"
          src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        />
        <div className="pt-3 flex items-center justify-between">
          <p className="text-lg text-black hover:text-purple-800 duration-500">
            {name}
          </p>
          {favorite ? (
            <svg
              className="h-6 w-6 fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2.027 3.037 19.945 17.994"
            >
              <path d="M12 4.595 C 10.896 3.589 9.488 3.037 8.004 3.037 C 6.426 3.037 4.932 3.66 3.791 4.795 C 1.438 7.158 1.439 10.854 3.793 13.207 L 11.125 20.539 C 11.295 20.838 11.623 21.031 12 21.031 C 12.322 21.031 12.609 20.868 12.792 20.622 L 20.207 13.207 C 22.561 10.853 22.561 7.158 20.205 4.791 C 19.068 3.66 17.574 3.037 15.996 3.037 C 14.513 3.037 13.104 3.589 12 4.595 Z"></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current text-gray-500 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
          )}
        </div>
        <div className="pt-3 flex items-center justify-between">
          <p className="pt-1 text-gray-900 font-bold flex-1">{price}</p>
          <AddToCartBtn />
        </div>
      </a>
    </div>
  );
};
