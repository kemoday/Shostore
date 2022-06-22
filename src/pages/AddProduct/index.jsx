import React, { useState } from "react";
import { Input } from "../../components/RegisterInput";
import { PrimaryBtn } from "../../components/PrimaryBtn";
import { ProductInput } from "../../components/ProductInput";

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
    <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">
      <h1 className="flex items-center font-sans font-bold break-normal px-2 py-8 text-4xl">
        New Product
      </h1>

      <div id="recipients" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <section className="text-right mt-4">
          <form onSubmit={handleSubmit}>
            <ProductInput
              name="email"
              type="email"
              label="Email"
              onChange={handleChange}
              value={data.email}
            />
            <PrimaryBtn text="Add Product" />
          </form>
        </section>
      </div>
    </div>
  );
};
