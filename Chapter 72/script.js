console.log("script.js initializing");

// let box1 = document.querySelector(".box");
// box1.style.backgroundColor = "red";

// let box2 = box1.nextElementSibling;
// box2.style.backgroundColor = "green";

// let box5 = document.querySelector(".container").lastElementChild;
// box5.style.backgroundColor = "blue";

// let box4 = box5.previousElementSibling;
// box4.style.backgroundColor = "yellow";

// let box3 = box4.previousElementSibling;
// box3.style.backgroundColor = "orange";

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
console.log(boxes);

let randomColor;

function getRandomColor() {
  let val1 = Math.floor(Math.random() * 255) + 1;

  let val2 = Math.floor(Math.random() * 255) + 1;

  let val3 = Math.floor(Math.random() * 255) + 1;

  randomColor = `rgb(${val1},${val2},${val3})`;
  return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.insertAdjacentText(
    "beforebegin",
    `${e.innerHTML} background color: ${randomColor},`
  );
  e.style.color = getRandomColor();
  e.insertAdjacentHTML("beforebegin", ` text color: ${randomColor}`);
});
