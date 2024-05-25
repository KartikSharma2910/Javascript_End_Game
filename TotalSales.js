/**
 * You have an array of shops, each with an array of departments, and each department has an array of products. Each product has a price and quantity. Calculate the total sales for each shop.
 */

const shops = [
  {
    name: "Shop A",
    departments: [
      {
        name: "Electronics",
        products: [
          { id: 1, name: "Laptop", price: 1000, quantity: 5 },
          { id: 2, name: "Phone", price: 500, quantity: 10 },
        ],
      },
      {
        name: "Clothing",
        products: [
          { id: 1, name: "Shirt", price: 20, quantity: 50 },
          { id: 2, name: "Jeans", price: 30, quantity: 30 },
        ],
      },
    ],
  },
  {
    name: "Shop B",
    departments: [
      {
        name: "Electronics",
        products: [
          { id: 1, name: "Laptop", price: 1200, quantity: 3 },
          { id: 2, name: "Phone", price: 600, quantity: 8 },
        ],
      },
      {
        name: "Clothing",
        products: [
          { id: 1, name: "Shirt", price: 25, quantity: 40 },
          { id: 2, name: "Jeans", price: 35, quantity: 25 },
        ],
      },
    ],
  },
];

// Calculate total sales for each shop

const sales = {};

shops.forEach((shop) => {
  const totalSales = shop.departments.reduce((shopTotal, department) => {
    const departmentTotal = department.products.reduce((deptTotal, product) => {
      return deptTotal + product.price * product.quantity;
    }, 0);
    return shopTotal + departmentTotal;
  }, 0);
  sales[shop.name] = totalSales;
});

console.log(sales);
