console.log("hello world");

// document.body.children[0].children[2].style.backgroundColor = "red";

// let boxes = document.getElementsByClassName("box");
// boxes[2].style.backgroundColor = "blue";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector("#red").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "green";
//   if (e.id == "red") {
//     e.style.backgroundColor = "red";
//   }
// });

// console.log(document.getElementsByTagName("div"));

// let e = document.getElementsByTagName("div");
// e[4].matches("#red");

// let e = document.getElementsByTagName("div");
// e[4].closest(".container");

// let e = document.getElementsByTagName("div");
// console.log(document.querySelector(".container").contains(e[2]));

console.log(
  document.querySelector("body").contains(document.querySelector(".container"))
);
