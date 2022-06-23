import React from "react";
import { Link } from "react-router-dom";
import { MainBtn } from "../../components/AddToCartBtn/MainBtn";
import { RegisterInput } from "../../components/RegisterInput";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  data: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const JoinUs: React.FC<Props> = ({ data, handleChange }) => {
  return (
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      <p className="text-center text-3xl">Join Us.</p>
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={(event) => event.preventDefault()}
      >
        <RegisterInput
          label="Name"
          type="text"
          value={data.name}
          placeholder="John Smith"
          onChange={handleChange}
          name="name"
        />

        <RegisterInput
          label="Email"
          type="email"
          value={data.email}
          placeholder="yourname@email.com"
          onChange={handleChange}
          name="email"
        />

        <RegisterInput
          label="Password"
          type="password"
          value={data.password}
          onChange={handleChange}
          name="password"
          required={true}
        />

        <RegisterInput
          label="Confirm Password"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <div className="mt-8 flex font-bold">
          <MainBtn text="Register" />
        </div>
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Already have an account?{" "}
          <Link to="/user/login" className="underline font-semibold">
            Log in here.
          </Link>
        </p>
      </div>
    </div>
  );
};
