let arr = [1, 93, 5, 6, 88];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// for (const key in obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

for (const i of arr) {
  console.log(i);
}
