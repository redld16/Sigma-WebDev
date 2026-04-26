use("sigmaDatabase");

db.getCollection("courses").insertMany([
  {
    name: "JavaScript",
    Price: 12000,
    Instructor: "MySelf",
  },
  {
    name: "Python Basics",
    Price: 15000,
    Instructor: "Alice Johnson",
  },
  {
    name: "React Development",
    Price: 18000,
    Instructor: "Bob Williams",
  },
  {
    name: "Data Science with R",
    Price: 20000,
    Instructor: "Carol Davis",
  },
  {
    name: "Node.js Fundamentals",
    Price: 14000,
    Instructor: "David Brown",
  },
  {
    name: "HTML & CSS Crash Course",
    Price: 8000,
    Instructor: "Eve Miller",
  },
  {
    name: "SQL for Beginners",
    Price: 10000,
    Instructor: "Frank White",
  },
  {
    name: "Machine Learning with Python",
    Price: 25000,
    Instructor: "Grace Lee",
  },
  {
    name: "Cybersecurity Essentials",
    Price: 17000,
    Instructor: "Henry Green",
  },
  {
    name: "Mobile App Development (Flutter)",
    Price: 22000,
    Instructor: "Ivy Black",
  },
]);

console.log(`done inserting data`);
