const customers = [
  {
    id: 1,
    name: "John",
    orders: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ],
  },
  {
    id: 2,
    name: "Jane",
    orders: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ],
  },
  {
    id: 3,
    name: "Alice",
    orders: [
      { id: 1, quantity: 4 },
      { id: 2, quantity: 1 },
    ],
  },
];

let grandTotal = {};

const ans = customers.forEach((purchase) => {
  grandTotal[purchase.id] = purchase.orders.reduce(
    (acc, order) => acc + order.quantity,
    0
  );
});

console.log(grandTotal);
