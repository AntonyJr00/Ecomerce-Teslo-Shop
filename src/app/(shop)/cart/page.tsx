import { QuantitySelector, Title } from "@components/index";
import { Product } from "@interface/product.interface";
import { initialData } from "@seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productInCart: Product[] = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  if (productInCart.length <= 0) {
    redirect("/empty");
  }

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="w-[1000px] flex flex-col bg-slate-600 md:p-4">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* //todo: Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas productos</span>
            <Link href={"/"} className="underline mb-4">
              Continua Comprando
            </Link>
            {/* //todo: Items */}
            {productInCart.map((product) => (
              <div
                key={product.slug}
                className="flex items-center p-4 border rounded-md"
              >
                <Image
                  width={100}
                  height={100}
                  priority
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  className="mr-6 rounded w-auto h-auto"
                />

                <div className="flex flex-col gap-2">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <div className="flex gap-x-4">
                    <QuantitySelector quantity={3} />
                    <button className="underline">Remover</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* //todo: Checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-black mb-2 text-2xl">Resumen de orden</h2>
            <div className="grid grid-cols-2 text-black">
              <span>No. Products</span>
              <span className="text-right">3 Articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Inpuestos (15)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-right text-2xl">$ 100</span>
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
