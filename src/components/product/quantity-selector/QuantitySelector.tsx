"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;
    if (quantity + value > 10) return;

    onQuantityChanged(quantity + value);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button onClick={() => onValueChanged(-1)}>
          <IoRemoveCircleOutline className="active:stroke-red-400" size={30} />
        </button>
        <span className="text-lg text-center w-20 px-2 bg-slate-100 text-black rounded">
          {quantity}
        </span>
        <button onClick={() => onValueChanged(+1)}>
          <IoAddCircleOutline className="active:stroke-green-400" size={30} />
        </button>
      </div>
      {quantity >= 10 && (
        <p className="text-xs italic font-semibold text-red-200 mt-4">
          Alcanzaste el maximo permitido
        </p>
      )}
    </div>
  );
};
