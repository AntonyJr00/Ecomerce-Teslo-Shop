"use client";

import { QuantitySelector, SizeSelector } from "@components/index";
import type { CartProduct, Product, Size } from "@interface/product.interface";
import { useCartStore } from "@store/index";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return console.log("Talla no selecionada");

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[1],
    };

    addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
    setSize(undefined);

    console.log({ size, quantity });
  };

  return (
    <>
      {posted && !size && (
        <span className="inline-block mt-2 text-red-300 bg-slate-700 fade-in">
          Debe de seleccionar una talla
        </span>
      )}

      <SizeSelector
        onSizeChanged={(size) => setSize(size)}
        availableSizes={product.sizes}
        selectedSize={size}
      />

      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      <button className="btn-primary my-5" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
