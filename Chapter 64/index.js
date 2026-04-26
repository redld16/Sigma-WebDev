let random = Math.floor(Math.random() * 3) + 1;

let first, second, third;

if (random <= 1) {
  first = "crazy";
} else if (random > 1 && random < 3) {
  first = "amazing";
} else {
  first = "fire";
}

random = Math.floor(Math.random() * 3) + 1;
if (random <= 1) {
  second = "Engine";
} else if (random > 1 && random < 3) {
  second = "Foods";
} else {
  second = "Garments";
}

random = Math.floor(Math.random() * 3) + 1;
if (random <= 1) {
  third = "Bros";
} else if (random > 1 && random < 3) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
