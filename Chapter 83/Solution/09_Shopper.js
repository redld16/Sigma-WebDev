// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder() {
  let randomDelay = Math.floor(Math.random() * 3000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order placed successfully "+ randomDelay/1000 + " seconds");
    }, randomDelay);
  });
}

(async () => {
  let result = await placeOrder();
  console.log(result);
})();
