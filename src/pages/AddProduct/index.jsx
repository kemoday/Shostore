import React, { useState } from "react";
import { InnerContaner } from "../../components/InnerContaner";
import { Route, Switch } from "react-router-dom";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

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
          <section className="mt-4">
            <Switch>
              <Route path="/step-one" component={StepOne} />
              <Route path="/step-two" component={StepTwo} />
              <Route path="/step-three" component={StepThree} />
            </Switch>
            <StepOne />
          </section>
        </div>
      </div>
    </InnerContaner>
  );
};
