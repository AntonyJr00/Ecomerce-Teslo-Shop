export const revalidate = 60;

import { Pagintaion, ProductGrid, Title } from "@components/index";

import { getPaginatedProductWithImages } from "@actions/index";
import { Gender } from "@prisma/client";

interface Props {
  params: { gender: string };
  searchParams: { page: string };
}

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductWithImages({
    gender: gender as Gender,
    page,
  });

  const filterProducts = products.filter(({ gender }) => gender === gender);

  const label: Record<string, string> = {
    men: "Hombre",
    women: "Mujer",
    kid: "Niños",
    unisex: "Todo Tipo",
  };

  // if (id === "kid") notFound();
  return (
    <div>
      <Title title={`Articulos de ${label[gender]}`} />

      <ProductGrid products={filterProducts} />
      <Pagintaion totalPages={totalPages} />
    </div>
  );
}
