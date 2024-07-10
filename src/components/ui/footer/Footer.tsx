import { titleFont } from "@config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full dark:text-white flex justify-center text-xs pb-8">
      <Link href={"/"}>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span className="mr-3">| Shop </span>
        <span> ©{new Date().getFullYear()} </span>
      </Link>

      <Link href={"/"} className="mx-3">
        Privacidad & Legal
      </Link>
      <Link href={"/"} className="mx-3">
        Ubicaciones
      </Link>
    </div>
  );
};
