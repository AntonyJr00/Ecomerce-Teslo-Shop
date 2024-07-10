import { Title } from "@components/index";
import Link from "next/link";
import { ProductsInCart } from "./ProductsInCart";
import { OrdenSummary } from "./OrdenSummary";

export default async function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex-col bg-slate-600 p-4">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col mt-5 gap-2">
            <div className="flex flex-col items-start">
              <span className="text-xl">Agregar mas productos</span>
              <Link href={"/"} className="underline mb-4">
                Continua Comprando
              </Link>
            </div>
            <ProductsInCart />
          </div>

          <div className="bg-white rounded-xl shadow-xl mt-20 p-7 h-fit">
            <h2 className="text-black mb-2 text-2xl">Resumen de orden</h2>
            <div className="grid grid-cols-2 text-black">
              <OrdenSummary />
            </div>

            <div className="mt-5 mb-3 w-full">
              <Link
                className="flex btn-primary justify-center"
                href={"/checkout/address"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
