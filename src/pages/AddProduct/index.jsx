import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { InnerContaner } from "../../components/InnerContaner";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";

export const AddProductPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited!");
  };

  return (
    <InnerContaner>
      <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">
        <h1 className="flex items-center font-sans font-bold break-normal px-2 py-8 text-4xl">
          New Product
        </h1>
        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <Switch>
            <Route path="/product/add/step-one" component={StepOne} />
            <Route path="/product/add/step-two" component={StepTwo} />
            <Route path="/product/add/step-three" component={StepThree} />
          </Switch>
        </div>
      </div>
    </InnerContaner>
  );
};
