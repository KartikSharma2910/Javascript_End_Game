const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

function findById(array, id) {
  return array.filter((item) => item.id === id);
}

console.log(findById(data, 3));
