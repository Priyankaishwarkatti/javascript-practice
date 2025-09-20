let cart = [];

function addItem(item, price) {
  cart.push({ item, price });
}

function removeItem(item) {
  cart = cart.filter(product => product.item !== item);
}

function totalPrice() {
  return cart.reduce((sum, product) => sum + product.price, 0);
}

addItem("Shoes", 2000);
addItem("T-shirt", 500);
removeItem("Shoes");

console.log(cart);
console.log("Total:", totalPrice());
