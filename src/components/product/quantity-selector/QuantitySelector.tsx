"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    if (count + value > 10) return;

    setCount(count + value);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button onClick={() => onQuantityChanged(-1)}>
          <IoRemoveCircleOutline className="active:stroke-red-400" size={30} />
        </button>
        <span className="text-lg text-center w-20 px-2 bg-slate-100 text-black rounded">
          {count}
        </span>
        <button onClick={() => onQuantityChanged(+1)}>
          <IoAddCircleOutline className="active:stroke-green-400" size={30} />
        </button>
      </div>
      {count >= 10 && (
        <p className="text-xs italic font-semibold text-red-200 mt-4">
          Alcanzaste el maximo permitido
        </p>
      )}
    </div>
  );
};
