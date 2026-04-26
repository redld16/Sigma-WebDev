// /* global use, db */
// // MongoDB Playground
// // To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// // Make sure you are connected to enable completions and to be able to run a playground.
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// // The result of the last command run in a playground is shown on the results panel.
// // By default the first 20 documents will be returned with a cursor.
// // Use 'console.log()' to print to the debug output.
// // For more documentation on playgrounds please refer to
// // https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// // Select the database to use.
// use("mongodbVSCodePlaygroundDB");

// // Insert a few documents into the sales collection.
// db.getCollection("sales").insertMany([
//   {
//     item: "abc",
//     price: 10,
//     quantity: 2,
//     date: new Date("2014-03-01T08:00:00Z"),
//   },
//   {
//     item: "jkl",
//     price: 20,
//     quantity: 1,
//     date: new Date("2014-03-01T09:00:00Z"),
//   },
//   {
//     item: "xyz",
//     price: 5,
//     quantity: 10,
//     date: new Date("2014-03-15T09:00:00Z"),
//   },
//   {
//     item: "xyz",
//     price: 5,
//     quantity: 20,
//     date: new Date("2014-04-04T11:21:39.736Z"),
//   },
//   {
//     item: "abc",
//     price: 10,
//     quantity: 10,
//     date: new Date("2014-04-04T21:23:13.331Z"),
//   },
//   {
//     item: "def",
//     price: 7.5,
//     quantity: 5,
//     date: new Date("2015-06-04T05:08:13Z"),
//   },
//   {
//     item: "def",
//     price: 7.5,
//     quantity: 10,
//     date: new Date("2015-09-10T08:43:00Z"),
//   },
//   {
//     item: "abc",
//     price: 10,
//     quantity: 5,
//     date: new Date("2016-02-06T20:20:13Z"),
//   },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db
//   .getCollection("sales")
//   .find({
//     date: { $gte: new Date("2014-04-04"), $lt: new Date("2014-04-05") },
//   })
//   .count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection("sales").aggregate([
//   // Find all of the sales that occurred in 2014.
//   {
//     $match: {
//       date: { $gte: new Date("2014-01-01"), $lt: new Date("2015-01-01") },
//     },
//   },
//   // Group the total sales for each product.
//   {
//     $group: {
//       _id: "$item",
//       totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
//     },
//   },
// ]);

//crud oprations
use("CrudDb");

//create collections
// db.createCollection("courses");

//create
// db.courses.insertOne({
//   name: "harry's web dev course",
//   price: 0,
//   assignment: 12,
//   projects: 43,
// });

// db.courses.insertMany([
//   {
//     name: "JavaScript",
//     Price: 12000,
//     Instructor: "MySelf",
//   },
//   {
//     name: "Python Basics",
//     Price: 15000,
//     Instructor: "Alice Johnson",
//   },
//   {
//     name: "React Development",
//     Price: 18000,
//     Instructor: "Bob Williams",
//   },
//   {
//     name: "Data Science with R",
//     Price: 20000,
//     Instructor: "Carol Davis",
//   },
//   {
//     name: "Node.js Fundamentals",
//     Price: 14000,
//     Instructor: "David Brown",
//   },
//   {
//     name: "HTML & CSS Crash Course",
//     Price: 8000,
//     Instructor: "Eve Miller",
//   },
//   {
//     name: "SQL for Beginners",
//     Price: 10000,
//     Instructor: "Frank White",
//   },
//   {
//     name: "Machine Learning with Python",
//     Price: 25000,
//     Instructor: "Grace Lee",
//   },
//   {
//     name: "Cybersecurity Essentials",
//     Price: 17000,
//     Instructor: "Henry Green",
//   },
//   {
//     name: "Mobile App Development (Flutter)",
//     Price: 22000,
//     Instructor: "Ivy Black",
//   },
// ]);

//read opration

// let a = db.courses.find({ price: 0 });
// console.log(a.toArray());

// let a = db.courses.findOne({ price: 0 });
// console.log(a);

//update opration

// db.courses.updateOne({ price: 0 }, { $set: { price: 1000 } });

// db.courses.updateMany(
//   { Price: { $gt: 10 } } ,
//   { $set: { Price: 100 } }
// );

//delete

// db.courses.deleteOne({ Price: 100 });

db.courses.deleteMany({ Price: 100 });
