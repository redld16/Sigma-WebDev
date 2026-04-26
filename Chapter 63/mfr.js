let arr = [1, 13, 5, 7, 11];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] ** 2);
// }

let newArr = arr.map((e) => {
  return e ** 2;
});

console.log(newArr);

let greaterThanSeven = (e) => {
  return e > 7 ? true : false;
};

console.log(newArr.filter(greaterThanSeven));

let arr2 = [1, 2, 3, 4, 5, 6];

let mul = (a, b) => {
  return a * b;
};

console.log(arr2.reduce(mul));
