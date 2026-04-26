// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function sumUntilNegative(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return sum;
    } else {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumUntilNegative(arr));


