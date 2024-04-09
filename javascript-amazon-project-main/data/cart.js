export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  // creating a variable to store each item in the array while going through the loop
  const quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
      // run through the cart array and if item at index 0 has a productName that equals the button we clicked on product name, then we want to note this name has a duplicate entry
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
    //   if there is a duplicate entry than that means there is a matchingItem and we want to use that index to update the quantity by 1
  } else {
    cart.push({
      productId,
      quantity,
    });
    //   else it does not exist so we will add a new item to the cart
  }
}
