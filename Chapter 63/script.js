let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);

arr[0] = 3;
console.log(arr);
console.log(arr.toString());
console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr.push(7));
console.log(arr);

let b = ["apple", "banana", "cherry"];

console.log(arr.concat(b));

console.log(arr.sort());

console.log(arr);

arr.splice(2, 2, "harry", "jerry");
console.log(arr);
