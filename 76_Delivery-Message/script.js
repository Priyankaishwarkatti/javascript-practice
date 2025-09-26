function orderFood(foodItem, callback) {
    console.log(`Ordering ${foodItem}...`);
    callback(foodItem); // callback gets executed
}

// Callback Function
function deliver(foodItem) {
    console.log(`Delivered your ${foodItem}!`);
}

// Usage
orderFood("Pizza", deliver);