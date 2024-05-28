import { ProductGrid, Title } from "@components/index";
import { initialData } from "@seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="HOLA MUNDO" subTitle="productos de la tienda" />
      <ProductGrid products={products} />
    </>
  );
}
