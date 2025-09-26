const prices = [100, 200, 300];

// Higher-order function using map
function applyDiscount(prices, discountFn) {
    return prices.map(discountFn); // callback function
}

// Callback function (10% discount)
function tenPercent(price) {
    return price - price * 0.1;
}

const discountedPrices = applyDiscount(prices, tenPercent);

console.log(discountedPrices);