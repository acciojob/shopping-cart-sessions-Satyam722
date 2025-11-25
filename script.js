const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// -----------------------------
// Load existing cart from sessionStorage
// -----------------------------
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// -----------------------------
// Render Products
// -----------------------------
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price} `;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => addToCart(product));

    li.appendChild(btn);
    productList.appendChild(li);
  });
}

// -----------------------------
// Render Cart
// -----------------------------
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// -----------------------------
// Add to Cart
// -----------------------------
function addToCart(product) {
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// -----------------------------
// Remove from Cart (optional)
// -----------------------------
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// -----------------------------
// Clear Cart
// -----------------------------
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

clearCartBtn.addEventListener("click", clearCart);

// -----------------------------
// INITIAL RENDER (Now at the bottom—correct order!)
// -----------------------------
renderProducts();
renderCart();
