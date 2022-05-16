import { useState } from "react";
import { NextPage } from "next";
import styles from "styles/AmountPicker.module.css";

interface Props {
  min: number;
  max: number;
  initValue: number;
  parentCallback: Function;
}

const AmountPicker: NextPage<Props> = (props) => {
  const { min, max, initValue, parentCallback } = props;

  const [amount, setAmount] = useState(initValue);

  /**
   * Updates the amount and sends it to the parent callback
   * @param value - the new value
   */
  const changeAmount = (value: number) => {
    // Check if value is in range
    const x = Math.min(Math.max(value, min), max);
    parentCallback(x);
    setAmount(x);
  };

  /**
   * Handler for input
   * @param value - value to be set
   */
  const onChangeInput = (value: string) => {
    const x = parseInt(value);

    // If value is not a number, set to initValue
    typeof x === "number" && !Number.isNaN(x)
      ? changeAmount(x)
      : changeAmount(0);
  };

  return (
    <div className="flex flex-row flex-nowrap rounded-md">
      <button
        className={`rounded-l-md border-r-2 ${styles.btn}`}
        onClick={() => changeAmount(amount - 1)}
      >
        -
      </button>
      <input
        type="text"
        value={amount}
        onChange={(e) => onChangeInput(e.target.value)}
        minLength={min}
        maxLength={max}
        className="w-10 bg-slate-100 p-2 text-center outline-none"
      />
      <button
        className={`rounded-r-md border-l-2 ${styles.btn}`}
        onClick={() => changeAmount(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
