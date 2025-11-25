// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Remove item from cart
function removeFromCart(productId) {
  // Filter out the item with matching id
  cart = cart.filter(item => item.id !== productId);

  // Update session storage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Re-render cart UI
  renderCart();
}

// Clear cart
function clearCart() {
  cart = []; // empty the array
  sessionStorage.setItem("cart", JSON.stringify(cart)); // update sessionStorage
  renderCart(); // update UI
}

// Initial render
renderProducts();
renderCart();
