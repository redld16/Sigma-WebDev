let a = prompt("enter the first number");
let b = prompt("enter the second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("the input should be only number");
}
let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 1;
  try {
    console.log("the sum is: ", sum * x);
    return true;
  } catch (error) {
    console.log("there is an error of", error);
    return false;
  } finally {
    console.log("server is closing down :)");
  }
}

main();
