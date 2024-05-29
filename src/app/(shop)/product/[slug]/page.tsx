import { SizeSelector } from "@components/index";
import { titleFont } from "@config/fonts";
import { initialData } from "@seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {/*//todod: SlideShow */}
      <div className="md:col-span-1 lg:col-span-2 xl:col-span-3 px-4 py-2 bg-indigo-700">
        <h2>.</h2>
      </div>
      {/*//todod: Detalles */}
      <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 px-4 py-2">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p>$ {product.price}</p>
        {/*//todod: Selector de Tallas */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[2]}
        />

        {/*//todod: Selector de Cantidad */}
        {/*//todod: Button */}

        <button className="btn-primary my-5">Agregar al carrito</button>

        {/*//todod: Description */}
        <h3 className="font-bold text-sm">Description:</h3>
        <p className="font-light mt-2">{product.description}</p>
      </div>
    </div>
  );
}
