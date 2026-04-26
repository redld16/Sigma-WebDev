// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let cart = [
  { name: "Product 1", price: 10.99, quantity: 2 },
  { name: "Product 2", price: 19.99, quantity: 1 },
  { name: "Product 3", price: 5.99, quantity: 3 },
];

// function calculateTotal(cart) {
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total += cart[i].price * cart[i].quantity;
//   }
//   return total;
// }

// console.log(calculateTotal(cart));


function calculateProductTotal(cart, productName) {
  const product = cart.find(
    item => item.name.toLowerCase() === productName.toLowerCase()
  );
  
  if (!product) {
    return "Product not found";
  }
  
  return product.price * product.quantity;
}

console.log(calculateProductTotal(cart, "Product 2"));
