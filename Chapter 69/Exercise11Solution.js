let n = 6;

// function factorial(number) {
//   let arr = Array.from(Array(number + 1).keys());
//   arr = arr.slice(1);
//   console.log(arr);

//   let fact = arr.reduce((a, b) => a * b);

//   console.log(fact);
// }

// factorial(n);

function facFor(number) {
  let fact = 1;
  //   for (let index = 0; index < number; index++) {
  //     fact *= number - index;
  //   }
  for (let index = 1; index <= number; index++) {
    fact *= index;
  }
  console.log(fact);
}
facFor(n);

// let fact = 1;
// for (let i = 0; i < n; i++) {
//   fact *= n - i;
// }
// console.log(fact);

// let arr = [6, 5, 4, 3, 2, 1];
// let arr2 = [1,2,3,4,5,6];

// let arr2 = [6];

// for (let i = 0; i < 5; i++) {
//   arr2.push(arr2[i] - 1);
// }
// console.log(arr2);

// let factArr = arr2.reduce((a, b) => {
//   return a * b;
// });

// console.log(factArr);
