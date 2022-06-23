import React, { useState } from "react";
import { CounterBtns } from "./CounterBtns";
import { MainBtn } from "./MainBtn";

export const AddToCartBtn: React.FC<{ stoke: number }> = ({ stoke }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrment = (e: any) => {
    e.preventDefault();
    setItemCount((p) => (p < stoke ? p + 1 : stoke));
  };
  const handleDecrment = (e: any) => {
    e.preventDefault();
    setItemCount((p) => (p > 0 ? p - 1 : 0));
  };

  return itemCount > 0 ? (
    <CounterBtns
      handleIncrment={handleIncrment}
      handleDecrment={handleDecrment}
      itemCount={itemCount}
      stoke={stoke}
    />
  ) : (
    <MainBtn onClick={handleIncrment} />
  );
};
