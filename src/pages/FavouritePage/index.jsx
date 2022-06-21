import React, { useState } from "react";
import { ProductFilter } from "../../components/ProductFilter";
import { ProductsList } from "../../components/ProductsList";

export const FavouritePage = () => {
  const [products, setProducts] = useState([{}, {}, {}, {}]);

  return (
    <section className="bg-white py-8">
      <ProductFilter products={products} />
      <ProductsList products={products} />
    </section>
  );
};
