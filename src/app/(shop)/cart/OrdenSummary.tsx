"use client";

import { useCartStore } from "@store/index";
import { currencyFormat } from "@utils/currencyFormater";
import { useEffect, useState } from "react";

export const OrdenSummary = () => {
  const { total, itemsInCart, subTotal, tax } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;

  return (
    <>
      <span>No. Products</span>
      <span className="text-right">
        {itemsInCart === 1
          ? "1 Articulo"
          : `${currencyFormat(itemsInCart)} Articulos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">$ {currencyFormat(subTotal)}</span>

      <span>Inpuestos (15%)</span>
      <span className="text-right">$ {currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total</span>
      <span className="mt-5 text-right text-2xl">
        $ {currencyFormat(total)}
      </span>
    </>
  );
};
