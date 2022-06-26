import React from "react";
import { Link, NavLink } from "react-router-dom";

interface Props {
  step: number;
  setStep: (val: number | ((prv: number) => number)) => void;
}

export const ProgressBar: React.FC<Props> = ({ step = 1, setStep }) => (
  <ul className="flex basis-1/3">
    <li>
      <NavLink
        to="/product/add/step/1"
        activeClassName="p-2 pl-0 font-bold"
        className="p-2 pl-0"
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          1
        </span>
        <span className="text-lg ">Basic Info</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/product/add/step/2"
        activeClassName="p-2 pl-0 font-bold"
        className="p-2 pl-0"
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          2
        </span>
        <span className="text-lg ">Images</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/product/add/step/3"
        activeClassName="p-2 pl-0 font-bold"
        className="p-2 pl-0"
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          3
        </span>
        <span className="text-lg ">Review</span>
      </NavLink>
    </li>
  </ul>
);
