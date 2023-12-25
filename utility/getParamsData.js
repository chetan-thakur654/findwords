export const getParamsData = (params) => {
  const data = params
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return [data[0], data];
};
