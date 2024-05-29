import { ProductGrid, Title } from "@components/index";
import { Product, Category } from "@interface/product.interface";
import { initialData } from "@seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const products: Product[] = initialData.products;

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const filterProducts = products.filter(({ gender }) => gender === id);

  const label: Record<Category, string> = {
    men: "Hombre",
    women: "Mujer",
    kid: "Niños",
    unisex: "Todo Tipo",
  };

  // if (id === "kid") notFound();
  return (
    <div>
      <Title title={`Articulos de ${label[id]}`} />

      <ProductGrid products={filterProducts} />
    </div>
  );
}
