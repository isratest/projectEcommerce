/**
 * This function: calculate total price of array/objects {price:###}
 *
 */

const totalPrice = (arrayObjectPrice) => {
  let sum = 0;
  arrayObjectPrice.forEach((element) => (sum += element.price));
  return sum;
};

export { totalPrice };
