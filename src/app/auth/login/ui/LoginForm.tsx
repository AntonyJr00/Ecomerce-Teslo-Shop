"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

import { authenticate } from "@actions/auth/login";
import { IoInformationCircleOutline } from "react-icons/io5";
import clsx from "clsx";

type Props = {};

export const LoginForm = (props: Props) => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  console.log({ state });

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        autoComplete="on"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        name="password"
        id="password"
        type="password"
      />

      <div className="flex h-8 items-end space-x-1">
        {state && (
          <>
            <IoInformationCircleOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Invalid Credencials</p>
          </>
        )}
      </div>

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className={clsx({
        "btn-primary": !pending,
        "btn-disabled": pending,
      })}
    >
      Ingresar
    </button>
  );
}
