export const getCurrentPageItems = <T>(items: T[], page: number = 0, perPage: number = 10) => {
  const t = page * perPage;

  return items.slice(t, t + perPage);
};
