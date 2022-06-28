import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { InnerContaner } from "../../components/InnerContaner";
import { ProgressBar } from "./ProgressBar";
import { StepFour } from "./StepFour";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";

export const AddProductPage = () => {
  const [data, setData] = useState({
    name: "",
    sizes: "",
    price: "",
    featurers: "",
    description: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handlePublish = (e: React.SyntheticEvent) => {
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
          <ProgressBar step={step} setStep={setStep} />
          <Switch>
            <Route
              path="/product/add/step/1"
              render={() => <StepOne handleChange={handleChange} data={data} />}
            />
            <Route path="/product/add/step/2" component={StepTwo} />
            <Route path="/product/add/step/3" component={StepThree} />
            <Route path="/product/add/step/4" component={StepFour} />
          </Switch>
        </div>
      </div>
    </InnerContaner>
  );
};
