import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./../Logo";

export const NavBar = () => {
  return (
    <nav className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  to="/product/add/step/1"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  to="/user/register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  to="/"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <Logo />
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <Link
            to="/products/favourite"
            className="inline-block no-underline hover:text-black"
          >
            <svg
              className="h-6 w-6 fill-current text-red-600 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2.027 3.037 19.945 17.994"
            >
              <path d="M12 4.595 C 10.896 3.589 9.488 3.037 8.004 3.037 C 6.426 3.037 4.932 3.66 3.791 4.795 C 1.438 7.158 1.439 10.854 3.793 13.207 L 11.125 20.539 C 11.295 20.838 11.623 21.031 12 21.031 C 12.322 21.031 12.609 20.868 12.792 20.622 L 20.207 13.207 C 22.561 10.853 22.561 7.158 20.205 4.791 C 19.068 3.66 17.574 3.037 15.996 3.037 C 14.513 3.037 13.104 3.589 12 4.595 Z"></path>
            </svg>
            <span className="text-xs absolute right-20 bg-red-600 text-white border-white border-2  top-9 p-[5px] px-[10px] rounded-full">
              4
            </span>
          </Link>
          <Link
            className="pl-3 inline-block no-underline hover:text-black"
            to="/products/cart"
          >
            <svg
              className="fill-current hover:text-black z-50"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
            <span className="text-xs absolute right-10 bg-purple-600 text-white border-white border-2  top-9 p-[5px] px-[10px] rounded-full">
              4
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
