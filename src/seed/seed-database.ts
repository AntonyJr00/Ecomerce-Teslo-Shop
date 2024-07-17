import { initialData } from "./seed";
import prisma from "../lib/data/prisma";

async function main() {
  const { categories, products, users } = initialData;

  //Todo: 1. Borrar Registros

  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  //Todo. Crear Usuario___

  await prisma.user.createMany({ data: users });

  //Todo: 2. Insertar Categories

  const categoriesData = categories.map((category) => {
    const capitalize = category.charAt(0).toUpperCase() + category.slice(1);
    return { name: capitalize };
  });

  await prisma.category.createMany({ data: categoriesData });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  console.log(categoriesMap);

  //Todo: 3. Productos_

  products.forEach(async (product) => {
    const { images, type, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: { ...rest, categoryId: categoriesMap[type] },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({ data: imagesData });
  });

  //Todo: FIN_________
  console.log("seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
