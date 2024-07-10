export const revalidate = 10080;

import { getProductBySlug } from "@actions/index";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  StockLabel,
} from "@components/index";

import { titleFont } from "@config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./AddToCart";

interface Props {
  params: {
    slug: string;
  };
}

// ? METADATA_____________________

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  const prevImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title,
    description: product?.description,
  };
};

// ? METADATA_____________________

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product || product === null) {
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
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p>$ {product.price}</p>

        <AddToCart product={product} />

        <h3 className="font-bold text-sm">Description:</h3>
        <p className="font-light mt-2">{product.description}</p>
      </div>
    </div>
  );
}
