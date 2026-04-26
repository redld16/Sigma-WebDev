// let obj = {
//   a: 1,
//   b: "harry",
// };

// // console.log(obj);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is crated");
  }

  eats() {
    console.log("kha raha hu");
  }
  jumps() {
    console.log("kood raha hu");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("object is created and it's a lion");
  }
  roar() {
    console.log("roars");
  }
  eats() {
    super.eats();
    console.log("kha raha hu raor");
  }
}

let l = new Lion("sher");
console.log(l);

let a = new Animal("bunny");

console.log(a);
