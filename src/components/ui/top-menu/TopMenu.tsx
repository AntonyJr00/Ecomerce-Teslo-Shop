"use client";

import { titleFont } from "@config/fonts";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { ButtonOpenMenu } from "./ButtonOpenMenu";
import { ShoppingCartMenu } from "./ShoppingCartMenu";
import { useCartStore } from "@store/index";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <nav className="flex px-6 py-2 justify-between items-center w-full sticky top-0 z-20 bg-slate-200 dark:bg-slate-800">
      <div>
        <Link href={"/"}>
          <span
            className={`${titleFont.className} antialiased font-bold text-white`}
          >
            Teslo
          </span>
          <span className="text-red-200"> | Shop </span>
        </Link>
      </div>
      <div className="hidden sm:block text-white">
        <Link
          href={"/gender/men"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100 dark:hover:text-black"
        >
          Hombres
        </Link>
        <Link
          href={"/gender/women"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100 dark:hover:text-black"
        >
          Mujeres
        </Link>
        <Link
          href={"/gender/kid"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100 dark:hover:text-black"
        >
          Ninos
        </Link>
      </div>

      <div className="flex items-center text-white">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href={`${isLoading && totalItemsInCart === 0 ? "/empty" : "/cart"}`}
          className="mx-2"
        >
          <ShoppingCartMenu
            isLoading={isLoading}
            totalItemsInCart={totalItemsInCart}
          />
        </Link>

        <ButtonOpenMenu />
      </div>
    </nav>
  );
};
