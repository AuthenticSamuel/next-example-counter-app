import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const add = (value: number) => setCount((prev) => prev + value);
  const subtract = (value: number) => setCount((prev) => prev - value);

  const reset = () => setCount(0);

  return {
    count,
    increment,
    decrement,
    add,
    subtract,
    reset,
  };
};
