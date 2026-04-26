// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(coffeeType) {
  let randomDelay = Math.floor(Math.random() * 3000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        `Your ${coffeeType} is ready after ${randomDelay / 1000} seconds`
      );
    }, randomDelay);
  });
}

(async () => {
  let result = await brewCoffee("cappuccino");
  console.log(result);
})();
