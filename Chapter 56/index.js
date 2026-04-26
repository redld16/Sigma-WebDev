console.log("hello i am a conditional chapter");

let age = 29;
let grace = 3;

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if (age < 18) {
  console.log("not an adult");
} else if (age >= 18 && age <= 20) {
  console.log("teen");
} else if (age >= 20 && age <= 30) {
  console.log("mid age adult");
} else {
  console.log("adult");
}
