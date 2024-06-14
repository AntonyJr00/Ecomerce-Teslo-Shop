export const revalidate = 60;

import { getPaginatedProductWithImages } from "@actions/index";
import { Pagintaion, ProductGrid, Title } from "@components/index";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductWithImages({ page });

  console.log("Page:_", currentPage);
  console.log("TotalPages:_", totalPages);

  if (products.length <= 0) redirect("/");

  return (
    <>
      <Title title="HOLA MUNDO" subTitle="productos de la tienda" />
      <ProductGrid products={products} />
      <Pagintaion totalPages={totalPages} />
    </>
  );
}
