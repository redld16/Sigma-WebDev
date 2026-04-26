// function printHello(){
//     console.log("hello world")
// }

// function hello(){
//     printHello()
//     console.log("bye")
// }

// hello()

console.log("hello");
console.log("world");

setTimeout(() => {
  console.log("settimeout 1");
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
}, 0);

console.log("the end");

const fn = () => {
  console.log("nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};
const loadScreen = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("harry", fn);
  document.head.append(sc);
};

loadScreen(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
