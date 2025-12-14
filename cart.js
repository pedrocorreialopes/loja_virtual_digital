let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
}
