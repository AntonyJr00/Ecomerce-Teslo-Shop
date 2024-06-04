import type { Product } from "@interface/product.interface";
import { ProductGridItem } from "@components/index";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-10 place-content-center place-items-center">
      {products.map((product: Product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10
