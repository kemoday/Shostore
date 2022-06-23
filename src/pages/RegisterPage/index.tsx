import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { JoinUs } from "./JoinUs";
import { LogIn } from "./LogIn";

export const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="w-full flex flex-wrap ">
      <div className="w-full md:w-1/2 flex flex-col h-screen overflow-y-scroll">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <Logo />
        </div>
        <Switch>
          <Route path="/user/register">
            <JoinUs data={data} handleChange={handleChange} />
          </Route>
          <Route path="/user/login">
            <LogIn data={data} handleChange={handleChange} />
          </Route>
        </Switch>
      </div>

      <div className="w-1/2 shadow-2xl ">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
          alt="Background"
        />
      </div>
    </div>
  );
};
