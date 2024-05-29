import { Product } from "@interface/product.interface";
import { ProductGridItem } from "@components/index";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 ">
      {products.map((product: Product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
