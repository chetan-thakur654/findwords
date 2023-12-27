export const getParamsData = (params) => {
  const num = params.split("-");
  const data = num.join(" ");
  return [num[0], data];
};
