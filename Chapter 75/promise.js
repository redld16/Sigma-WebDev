console.log("This is a promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.floor(Math.random() * 100) + 1;
  console.log(a);
  if (a < 50) {
    reject("NO Random Number Was Not Supporting You");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("harry");
    }, 2000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.floor(Math.random() * 100) + 1;
  console.log(a);
  if (a < 50) {
    reject("NO Random Number Was Not Supporting You 2");
  } else {
    setTimeout(() => {
      console.log("yes i am done 2");
      resolve("harry 2");
    }, 1000);
  }
});
let prom3 = new Promise((resolve, reject) => {
  let a = Math.floor(Math.random() * 100) + 1;
  console.log(a);
  if (a < 50) {
    reject("NO Random Number Was Not Supporting You 3");
  } else {
    setTimeout(() => {
      console.log("yes i am done 3");
      resolve("harry 3");
    }, 1000);
  }
});
let prom4 = new Promise((resolve, reject) => {
  let a = Math.floor(Math.random() * 100) + 1;
  console.log(a);
  if (a < 50) {
    reject("NO Random Number Was Not Supporting You 4");
  } else {
    setTimeout(() => {
      console.log("yes i am done 4");
      resolve("harry 4");
    }, 1000);
  }
});

// let p3 = Promise.allSettled([prom1, prom2]);
// let p3 = Promise.race([prom1, prom2]);
let p3 = Promise.any([prom1, prom2, prom3, prom4]);

p3.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});
