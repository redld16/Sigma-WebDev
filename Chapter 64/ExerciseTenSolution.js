let adj = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};

let shop = { 1: "Engine", 2: "Foods", 3: "Garments" };

let word = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

let random = () => {
  return Math.floor(Math.random() * 3) + 1;
};

function generateBusinessName(adj, shop, word) {
  console.log(`${adj[random()]} ${shop[random()]} ${word[random()]}`);
}

generateBusinessName(adj, shop, word);
