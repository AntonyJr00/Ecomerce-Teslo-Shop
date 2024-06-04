// import { titleFont } from "@config/fonts";
import { titleFont } from "@config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { ButtonOpenMenu } from "./ButtonOpenMenu";

export const TopMenu = () => {
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
          href={"/category/men"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100"
        >
          Hombres
        </Link>
        <Link
          href={"/category/women"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href={"/category/kid"}
          className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100"
        >
          Ninos
        </Link>
      </div>

      <div className="flex items-center text-white">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs -right-2 -top-2 bg-red-400 rounded-full px-1">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <ButtonOpenMenu />
      </div>
    </nav>
  );
};
