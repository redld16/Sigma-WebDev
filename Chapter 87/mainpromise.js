import fs from "fs/promises";

let a = await fs.readFile("harry.txt");

let b = await fs.appendFile("harry.txt", " harry is");

console.log(a.toString());
// console.log(b.toString());
