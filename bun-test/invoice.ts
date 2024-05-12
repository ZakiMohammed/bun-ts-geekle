export const calculate = (
  price: number,
  discount: number,
  location: string = "USA"
): number => {
  if (location === "USA") {
    return price - discount;
  }
  return price - discount + 10;
};
