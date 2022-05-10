import { useState, useEffect } from "react";
import { NextPage } from "next";

interface Props {
  min: number;
  max: number;
  initValue: number;
  parentCallback: Function;
}

const AmountPicker: NextPage<Props> = (props) => {
  const { min, max, initValue, parentCallback } = props;

  const [amount, setAmount] = useState(initValue);

  // Handler for change of amount. Handles random change, increment and decrement
  const changeAmount = (value: number) => {
    const x = Math.min(Math.max(value, min), max);
    parentCallback(x);
    setAmount(x);
  };

  const onChangeInput = (value: string) => {
    const x = parseInt(value);
    typeof x === "number" && !Number.isNaN(x)
      ? changeAmount(x)
      : changeAmount(0);
  };

  return (
    <div className="flex flex-row flex-nowrap rounded-md">
      <button
        className="w-8 rounded-l-md border-r-2 bg-slate-100 font-bold text-orange-400"
        onClick={() => changeAmount(amount - 1)}
      >
        -
      </button>
      <input
        type="text"
        value={amount}
        // TODO fix input for making it possible to add amount by typing
        onChange={(e) => onChangeInput(e.target.value)}
        minLength={min}
        maxLength={max}
        className="w-10 bg-slate-100 p-2 text-center outline-none"
      />
      <button
        className="w-8 rounded-r-md border-l-2 bg-slate-100 font-bold text-orange-400"
        onClick={() => changeAmount(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
