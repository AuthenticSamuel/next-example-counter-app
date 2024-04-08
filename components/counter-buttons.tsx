import { useState } from "react";

type CounterButtonsProps = {
  increment: UpdateCounter;
  decrement: UpdateCounter;
  add: UpdateCounterWithValue;
  subtract: UpdateCounterWithValue;
  reset: UpdateCounter;
};

export const CounterButtons = ({
  increment,
  decrement,
  add,
  subtract,
  reset,
}: CounterButtonsProps) => {
  const [value, setValue] = useState<number>(0);

  const handleSubtract = () => {
    if (!value) return;
    subtract(value);
    setValue(0);
  };

  const handleAdd = () => {
    if (!value) return;
    add(value);
    setValue(0);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex">
        <button
          onClick={decrement}
          className="w-0 grow rounded-l-md bg-red-200 px-5 py-2 transition-colors duration-75 hover:bg-red-300"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="w-0 grow bg-red-200 px-5 py-2 transition-colors duration-75 hover:bg-red-300"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="w-0 grow rounded-r-md bg-red-200 px-5 py-2 transition-colors duration-75 hover:bg-red-300"
        >
          Increment
        </button>
      </div>
      <div className="flex">
        <button
          onClick={handleSubtract}
          className="w-32 rounded-l-md bg-red-200 px-5 py-2 transition-colors duration-75 hover:bg-red-300"
        >
          Subtract
        </button>
        <input
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          type="number"
          className="z-10 grow border border-red-200 px-3 py-2"
        />
        <button
          onClick={handleAdd}
          className="w-32 rounded-r-md bg-red-200 px-5 py-2 transition-colors duration-75 hover:bg-red-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};
