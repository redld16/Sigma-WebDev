import path from "path";

let myPath =
  "C:\\Users\\chand\\Documents\\VS Code\\CodeWithHarry\\sigma-webdev-course\\Chapter 87\\harry.txt";
console.log(path.extname(myPath));

console.log(path.dirname(myPath));
console.log(path.basename(myPath));


console.log(path.join("c:/","programs\\harry.txt"))