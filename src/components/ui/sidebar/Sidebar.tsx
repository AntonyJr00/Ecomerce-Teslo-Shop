"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUiStore } from "@store/index";

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}
      {isSideMenuOpen && (
        <div
          onClick={closeSideMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        ></div>
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          className="cursor-pointer rounded-md border-2 border-gray-700/55 absolute top-5 right-5"
          size={40}
          onClick={() => closeSideMenu()}
        />

        {/* search */}
        <div className="relative mt-16 flex gap-x-4 items-center">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded-md px-10 py-1 border-b-2 border-gray-200 text-xl focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}

        <Link
          href={"/"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="text-xl ml-3">Perfil</span>
        </Link>
        <Link
          href={"/orders"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="text-xl ml-3">Ordenes</span>
        </Link>
        <Link
          href={"/login"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="text-xl ml-3">Ingresar</span>
        </Link>
        <Link
          href={"/logout"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="text-xl ml-3">Salir</span>
        </Link>

        <div className="w-full h-px bg-slate-400 my-10"></div>

        <Link
          href={"/products"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={30} />
          <span className="text-xl ml-3">Productos</span>
        </Link>
        <Link
          href={"/orders"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="text-xl ml-3">Ordenes</span>
        </Link>
        <Link
          href={"/account"}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={30} />
          <span className="text-xl ml-3">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
