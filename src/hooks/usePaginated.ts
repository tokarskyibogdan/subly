export const usePaginated = <T extends unknown>(items: T[], itemsPerPage: number, page: number) => {
  const pageNumbers = Math.ceil(items.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToDisplay = items.slice(start, end);

  return {
    pageNumbers,
    itemsToDisplay,
  }
};

export default usePaginated;