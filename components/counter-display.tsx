"use client";

import { useCounter } from "@/hooks/counter";
import { CounterButtons } from "@/components/counter-buttons";

type CounterDisplayProps = {};

export const CounterDisplay = ({}: CounterDisplayProps) => {
  const { count, increment, decrement, add, subtract, reset } = useCounter();

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <div className="text-3xl font-bold">{count}</div>
      <CounterButtons
        increment={increment}
        decrement={decrement}
        add={add}
        subtract={subtract}
        reset={reset}
      />
    </div>
  );
};
