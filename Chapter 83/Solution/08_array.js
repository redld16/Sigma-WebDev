// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function doubleAfterDelay(array) {
  return array.map((el) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(el * 2);
      }, 500);
    });
  });
}

(async () => {
  let result = await Promise.all(doubleAfterDelay(arr));
  console.log(result);
})();
