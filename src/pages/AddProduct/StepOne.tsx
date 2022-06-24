import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { PrimaryBtn } from "../../components/PrimaryBtn";
import { ProductInput } from "../../components/ProductInput";
import { SecondaryBtn } from "../../components/SecondaryBtn";

export const StepOne = () => {
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <section className="mt-4">
      <section>
        <ul className="flex basis-1/3">
          <li>
            <NavLink
              to="/product/add/step-one"
              activeClassName=" font-bold"
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
              to="/product/add/step-two"
              activeClassName=" font-bold"
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
              to="/product/add/step-three"
              activeClassName=" font-bold"
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
        <section className="mx-1 p-4 flex flex-col">
          <form className="flex flex-col pt-3">
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <ProductInput
              name="name"
              label="Name"
              onChange={handleChange}
              type="text"
              value="x"
              required
            />
            <div className="flex justify-between basis-1/3 mt-8">
              <SecondaryBtn
                text="< Back"
                onClick={() => history.push("/product/add/step-two")}
              />
              <PrimaryBtn
                text="Next >"
                onClick={() => history.push("/product/add/step-two")}
              />
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};
