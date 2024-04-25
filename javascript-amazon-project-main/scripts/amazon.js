import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
// all module imports go to top of the file and we have to use the live server
document.querySelector('.js-cart-quantity').innerHTML =
  localStorage.getItem('cart quantity');

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

    <div class="product-price">$${formatCurrency(product.priceCents)}</div>

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

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png" />
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id='${
      product.id
    }'>Add to Cart</button>
  </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

let displayMessageTimer;
// establish a timer outside of the function so when we click we can update the variable with the timer from in the function

function updateCartQuantity(productId) {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  localStorage.setItem('cart quantity', cartQuantity);

  document
    .querySelector(`.js-added-to-cart-${productId}`)
    .classList.add('display-message');

  clearTimeout(displayMessageTimer);
  // if there is something in the timer clear it

  displayMessageTimer = setTimeout(() => {
    // run the settimeout to remove after 2 sec
    document
      .querySelector(`.js-added-to-cart-${productId}`)
      .classList.remove('display-message');
  }, 2000);

  document.querySelector('.js-cart-quantity').innerHTML =
    localStorage.getItem('cart quantity');
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset;
    // using the data HTML attribute we pulled in the product name of the item that was clicked and created a new attribute.. this line of code "productName" stores the specific clicked buttons name in a key called productName (this is from the kebab case in the HTML attribute)
    addToCart(productId);
    updateCartQuantity(productId);
  });
});
