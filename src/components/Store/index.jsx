import React from "react";
import { ProductFilter } from "../ProductFilter";
import { ProductsList } from "../ProductsList";

export const Store = () => {
  return (
    <section className="bg-white py-8">
      <ProductFilter />
      <ProductsList />
    </section>
  );
};
