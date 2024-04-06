let productsHTML = '';

// forEach runs through the array and the param is the index
products.forEach((product) => {
  productsHTML += `<div class="product-container">
    <div class="product-image-container">
      <img
        class="product-image"
        src="${product.image}"
      />
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img
        class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png"
      />
      <div class="product-rating-count link-primary">${
        product.rating.count
      }</div>
    </div>

    <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png" />
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id='${
      product.id
    }'>Add to Cart</button>
  </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    // using the data HTML attribute we pulled in the product name of the item that was clicked and created a new attribute.. this line of code "productName" stores the specific clicked buttons name in a key called productName (this is from the kebab case in the HTML attribute)

    let matchingItem;
    // creating a variable to store each item in the array while going through the loop

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
        // run through the cart array and if item at index 0 has a productName that equals the button we clicked on product name, then we want to note this name has a duplicate entry
      }
    });

    const dropdownAmount = Number(
      document.querySelector(`.js-quantity-selector-${productId}`).value
    );

    console.log(dropdownAmount);

    if (matchingItem) {
      matchingItem.quantity += dropdownAmount;
      //   if there is a duplicate entry than that means there is a matchingItem and we want to use that index to update the quantity by 1
      console.log(matchingItem);
    } else {
      cart.push({
        productId: productId,
        quantity: dropdownAmount,
      });
      //   else it does not exist so we will add a new item to the cart
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});
