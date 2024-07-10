"use client";

import { QuantitySelector } from "@components/index";
import { useCartStore } from "@store/index";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const {
    cart: productInCart,
    updateQuantityProduct,
    removeProduct,
  } = useCartStore((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  if (productInCart.length === 0) redirect("empty");

  return (
    <>
      {productInCart.map((product) => (
        <div
          key={`${product.slug}-${product.size}`}
          className="flex flex-col md:flex-row gap-4 md:gap-0 items-center p-4 border rounded-md"
        >
          <Image
            priority
            width={100}
            height={100}
            src={`/products/${product.image}`}
            alt={product.title}
            className="mr-6 rounded w-auto h-auto"
          />

          <div className="flex flex-col gap-2">
            <Link
              href={`/product/${product.slug}`}
              className="hover:underline cursor-pointer hover:scale-[1.03] duration-300 transform"
            >
              <p>{product.title}</p>
            </Link>
            <div className="flex gap-x-8">
              <p className="">Talla: {product.size}</p>
              <p>Precio: ${product.price}</p>
            </div>
            <div className="flex gap-x-4">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChanged={(quantity) =>
                  updateQuantityProduct(product, quantity)
                }
              />
              <button
                onClick={() => removeProduct(product)}
                className="underline"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
