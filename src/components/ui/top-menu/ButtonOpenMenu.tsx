"use client";

import { useUiStore } from "@store/index";
import { IoMenuOutline } from "react-icons/io5";

export const ButtonOpenMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  return (
    <button
      className="m-2 p-2 text-white rounded-md transition-all hover:bg-gray-100 hover:text-slate-600"
      onClick={openSideMenu}
    >
      <IoMenuOutline size={30} />
    </button>
  );
};
