import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
} from "@components/index";

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
    <div className="w-full h-full mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      <div className="md:col-span-1 lg:col-span-2 xl:col-span-3 px-4">
        <ProductMobileSlideShow
          className="block md:hidden"
          images={product.images}
          title={product.title}
        />
        <ProductSlideShow
          className="hidden md:block"
          images={product.images}
          title={product.slug}
        />
      </div>
      <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 px-4 py-2">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p>$ {product.price}</p>
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[2]}
        />
        <QuantitySelector quantity={2} />
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Description:</h3>
        <p className="font-light mt-2">{product.description}</p>
      </div>
    </div>
  );
}
