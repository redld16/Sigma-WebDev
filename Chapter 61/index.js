let inp1 = prompt("enter the first number");
let inp2 = prompt("enter the oprator");
let inp3 = prompt("enter the second number");

let random = Math.floor(Math.random() * 100) + 1;

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 50) {
  alert(`${eval(`${inp1} ${inp2} ${inp3}`)}`);
} else {
  inp2 = obj[inp2];
  alert(`${eval(`${inp1} ${inp2} ${inp3}`)}`);
}
