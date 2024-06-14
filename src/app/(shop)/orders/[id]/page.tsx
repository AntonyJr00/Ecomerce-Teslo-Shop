import { Title } from "@components/index";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";
import { getPaginatedProductWithImages } from "@actions/index";

interface Props {
  params: {
    id: string;
  };
}

export default async function OrderByIdPage({ params }: Props) {
  const { id } = params;

  const { products: productInCart } = await getPaginatedProductWithImages({});

  //todo: Verificar--
  // redirect
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="w-[1000px] flex flex-col bg-slate-600 md:p-4">
        <Title title={`Orden ${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* //todo: Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3 text-xs font-bold text-white mb-5",
                { "bg-red-500": false, "bg-green-600": true }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pendiente de Pago</span>
            </div>
            {/* //todo: Items */}
            {productInCart.map((product) => (
              <div
                key={product.slug}
                className="flex items-center p-4 border rounded-md"
              >
                <Image
                  width={100}
                  height={100}
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  className="mr-6 rounded w-auto h-auto"
                />

                <div className="flex flex-col gap-2">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* //todo: Checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10 text-black grid grid-cols-1 md:grid-cols-2">
              <p>Antony Rodriguez</p>
              <p>Av. Siempre VIva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Los Persas</p>
              <p>Codigo Postal: 321565</p>
              <p>189.324.516</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3 text-xs font-bold text-white mb-5",
                  { "bg-red-500": false, "bg-green-600": true }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
