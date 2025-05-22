export const formatSimpleDate = (date: string) => {
  const [year, month] = date.split('-');
  return `${month}/${year}`;
};
