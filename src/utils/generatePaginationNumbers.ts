export const generatePaginationNumbers = (
  currentPage: number,
  totalPage: number
) => {
  //* Si el total de paginas es menor a 7 vamos a mostrar todas las paginas sin puntos suspensivos.

  if (totalPage <= 7) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  //* Si la pagina esta entre las primeras 3 paginas, mostrar las primeras 2, puntos suspensivos, las ultimas 3 paginas.

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPage - 1, totalPage];
  }

  //* Si la pagina actual esta entre las ultimas 3 paginas, mostrar las primeras 2 , puntos suspensivos, las ultimas 3 paginas.

  if (currentPage >= totalPage - 2) {
    return [1, 2, "...", totalPage - 2, totalPage - 1, totalPage];
  }

  //* Si la pagina actual esta en otro lugar medio, mostrar la primera pagina, puntos suspensivos, la pagina actual y vecinos.

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPage,
  ];
};
