let cont = document.querySelector(".container");

let html = ``;

async function message() {
  let dot1 = ".";

  let random = () => Math.floor(Math.random() * 7000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cont.insertAdjacentHTML(
        "beforeend",
        `<p>Initializing Hacking${dot1}${dot1}${dot1}</p>`
      );
    }, random());

    setTimeout(() => {
      cont.insertAdjacentHTML(
        "beforeend",
        `<p>Reading your Files${dot1}${dot1}${dot1}</p>`
      );
    }, random());

    setTimeout(() => {
      cont.insertAdjacentHTML(
        "beforeend",
        `<p>Password files Detected${dot1}${dot1}${dot1}</p>`
      );
    }, random());

    setTimeout(() => {
      cont.insertAdjacentHTML(
        "beforeend",
        `<p>Sending all passwords and personal files to server${dot1}${dot1}${dot1}</p>`
      );
    }, random());

    setTimeout(() => {
      cont.insertAdjacentHTML(
        "beforeend",
        `<p>Cleaning up${dot1}${dot1}${dot1}</p>`
      );
    }, random());
  });
}

async function main() {
  await message();
  setInterval(() => {
    Array.from(cont).forEach((e) => {
      e.classes.toggle("dot");
    });
  });

  if (
    Array.from(cont).forEach((e) => {
      e.classList != "dot";
    })
  ) {
    dot1.style.display = "hidden";
  }
}

main();
