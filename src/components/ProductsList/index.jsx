import React from "react";
import { Product } from "../Product";

export const ProductsList = ({ products }) => {
  if (products.length === 0) return <h1>No items found.</h1>;
  else
    return (
      <div className="container mx-auto grid xl:grid-cols-4 md:grid-cols-3 gap-4 pt-4 pb-12">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    );
};
