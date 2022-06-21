import React, { useState } from "react";
import { ProductFilter } from "../ProductFilter";
import { ProductsList } from "../ProductsList";

export const Store = () => {
  const [products, setProducts] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  return (
    <section className="bg-white py-8">
      <ProductFilter products={products} />
      <ProductsList products={products} />
    </section>
  );
};
