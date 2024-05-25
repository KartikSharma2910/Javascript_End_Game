const departments = [
  {
    name: "HR",
    employees: [
      { id: 1, name: "Alice", salary: 50000 },
      { id: 2, name: "Bob", salary: 60000 },
    ],
  },
  {
    name: "Finance",
    employees: [
      { id: 1, name: "Charlie", salary: 70000 },
      { id: 2, name: "David", salary: 55000 },
    ],
  },
  {
    name: "IT",
    employees: [
      { id: 1, name: "Eve", salary: 65000 },
      { id: 2, name: "Frank", salary: 75000 },
    ],
  },
];

let totalSalary = {};

departments.forEach(
  (department) =>
    (totalSalary[department.name] = department.employees.reduce(
      (curr, acc) => curr + acc.salary,
      0
    ))
);

console.log(totalSalary);
