let btn = document.getElementById("btn");
let box = document.querySelector(".box");

btn.addEventListener("click", () => {
  box.innerHTML = "<b>content was changd</b>";
});

btn.addEventListener("contextmenu", () => {
  alert("please don't click right mouse");
});

addEventListener("keydown", (e) => {
  console.log(e.key);
});
