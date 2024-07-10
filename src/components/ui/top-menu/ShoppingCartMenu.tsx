"use client";

import { IoCartOutline } from "react-icons/io5";

interface Props {
  totalItemsInCart: number;
  isLoading: boolean;
}

export const ShoppingCartMenu = ({ isLoading, totalItemsInCart }: Props) => {
  return (
    <div className="relative">
      {isLoading && totalItemsInCart > 0 && (
        <span className="absolute text-xs -right-2 -top-2 bg-red-400 rounded-full px-1">
          {totalItemsInCart}
        </span>
      )}
      <IoCartOutline className="w-5 h-5" />
    </div>
  );
};
