import React from "react";
import { Product } from "../Product";

export const ProductsList = () => {
  return (
    <div className="container mx-auto grid xl:grid-cols-4 md:grid-cols-3 gap-4 pt-4 pb-12">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};
