"use server";

import prisma from "../../lib/data/prisma";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const isStock = await prisma.product.findFirst({
      where: { slug },
      select: { inStock: true },
    });
    return isStock?.inStock ?? 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
