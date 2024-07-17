"use client";

import { Product } from "@interface/product.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  product: Product;
};

export const ProductGridItem = ({ product }: Props) => {
  const [displayImg, setDisplayImg] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImg}`}
          alt="img-product"
          width={300}
          height={300}
          onMouseEnter={() => setDisplayImg(product.images[1])}
          onMouseLeave={() => setDisplayImg(product.images[0])}
          priority
        />
      </Link>
      <div className="text-white pl-2 py-4 flex flex-col">
        <Link
          href={`/product/${product.slug}`}
          className="text-xs font-bold truncate hover:text-blue-500"
        >
          {product.title.length > 40
            ? product.title.substring(0, 37) + "..."
            : product.title}
        </Link>
        <span className="font-semibold">$ {product.price}</span>
      </div>
    </div>
  );
};
