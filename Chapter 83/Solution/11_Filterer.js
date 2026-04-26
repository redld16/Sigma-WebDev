// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion

let products = [
  { name: "Product 1", price: 10.99, category: "Electronics" },
  { name: "Product 2", price: 19.99, category: "Clothing" },
  { name: "Product 3", price: 5.99, category: "Books" },
  { name: "Product 4", price: 29.99, category: "Electronics" },
  { name: "Product 5", price: 9.99, category: "Clothing" },
];

function filterProducts(products, searchTerm) {
  return products.filter((product) => {
    if (typeof searchTerm === "string") {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (typeof searchTerm === "number") {
      return product.price === searchTerm;
    }
  });
}

// Usage
console.log(filterProducts(products, "product 1"));
console.log(filterProducts(products, 5.99));
