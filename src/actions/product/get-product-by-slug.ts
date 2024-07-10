"use server";

import prisma from "../../lib/data/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      include: { images: { select: { url: true } } },
      where: { slug },
    });

    if (!product) return null;
    const { images, ...rest } = product;

    return {
      ...rest,
      images: product.images.map((img) => img.url),
    };
  } catch (error) {
    console.log({ error });
    throw new Error("Error al obtener el producto por slug");
  }
};
