import React, { useState } from "react";
import { CounterBtns } from "./CounterBtns";
import { MainBtn } from "./MainBtn";

export const AddToCartBtn = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrment = (e) => {
    e.preventDefault();
    setItemCount((p) => p + 1);
  };
  const handleDecrment = (e) => {
    e.preventDefault();
    setItemCount((p) => p - 1);
  };

  return itemCount > 0 ? (
    <CounterBtns
      handleIncrment={handleIncrment}
      handleDecrment={handleDecrment}
      itemCount={itemCount}
    />
  ) : (
    <MainBtn onClick={handleIncrment} />
  );
};
