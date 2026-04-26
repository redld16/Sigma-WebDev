// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data is coming");
//     },2000);
//   });
// }

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("loading modules");
  console.log("something else");
  let data = await getData();
  console.log(data);
  console.log("process data");
  console.log("task 2");
}

main();

// data.then((v) => {
//   console.log(data);

//   console.log("process data");

//   console.log("task 2");
// });
