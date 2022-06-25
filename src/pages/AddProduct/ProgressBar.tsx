import React from "react";
import { Link } from "react-router-dom";

interface Props {
  step: number;
  setStep: (val: number | ((prv: number) => number)) => void;
}

export const ProgressBar: React.FC<Props> = ({ step = 1, setStep }) => (
  <ul className="flex basis-1/3">
    <li>
      <Link
        to="/product/add/step-one"
        onClick={() => setStep(1)}
        className={`p-2 pl-0 ${step === 1 && "font-bold"}`}
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          1
        </span>
        <span className="text-lg ">Basic Info</span>
      </Link>
    </li>
    <li>
      <Link
        to="/product/add/step-two"
        onClick={() => setStep(2)}
        className={`p-2 pl-0 ${step === 2 && "font-bold"}`}
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          2
        </span>
        <span className="text-lg ">Images</span>
      </Link>
    </li>
    <li>
      <Link
        to="/product/add/step-three"
        onClick={() => setStep(3)}
        className={`p-2 pl-0 ${step === 3 && "font-bold"}`}
      >
        <span
          id="step"
          className="font-bold rounded-full mx-4 px-[1rem] p-2 mr-1 bg-green-500 text-white "
        >
          3
        </span>
        <span className="text-lg ">Review</span>
      </Link>
    </li>
  </ul>
);
