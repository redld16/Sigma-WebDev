let inp1 = "/";
let inp2 = 5;
let inp3 = 2;

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let sum = (inp2, inp3) => {
  console.log(inp2 + inp3);
};
let mul = (inp2, inp3) => {
  console.log(inp2 * inp3);
};
let min = (inp2, inp3) => {
  console.log(inp2 - inp3);
};
let div = (inp2, inp3) => {
  console.log(inp2 / inp3);
};
let pow = (inp2, inp3) => {
  console.log(inp2 ** inp3);
};

if (random > 10) {
  if (inp1 == "+") {
    sum(inp2, inp3);
  } else if (inp1 == "*") {
    mul(inp2, inp3);
  } else if (inp1 == "-") {
    min(inp2, inp3);
  } else if (inp1 == "/") {
    div(inp2, inp3);
  }
} else {
  if (inp1 == "+") {
    min(inp2, inp3);
  } else if (inp1 == "*") {
    sum(inp2, inp3);
  } else if (inp1 == "-") {
    div(inp2, inp3);
  } else if (inp1 == "/") {
    pow(inp2, inp3);
  }
}
