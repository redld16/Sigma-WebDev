
let box1 = document.querySelector(".box");
box1.style.backgroundColor = "red";

let box2 = box1.nextElementSibling;
box2.style.backgroundColor = "green";

let box5 = document.querySelector(".container").lastElementChild;
box5.style.backgroundColor = "blue";

let box4 = box5.previousElementSibling;
box4.style.backgroundColor = "yellow";

let box3 = box4.previousElementSibling;
box3.style.backgroundColor = "orange";
