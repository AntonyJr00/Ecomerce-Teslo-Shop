"use server";

import { Gender } from "@prisma/client";
import prisma from "../../lib/data/prisma";

interface PagintaionOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductWithImages = async ({
  gender,
  page = 1,
  take = 12,
}: PagintaionOptions) => {
  if (isNaN(Number(page)) || Number(page) < 1) page = 1;
  if (isNaN(Number(take)) || Number(take) !== 12) take = 12;

  try {
    //? 1. Obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: { images: { take: 2, select: { url: true } } },
      where: { gender },
    });

    //? 2. Obtener el total de paginas
    const totalCount = await prisma.product.count({ where: { gender } });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.images.map((image) => image.url),
      })),
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error en la peticion");
  }
};
