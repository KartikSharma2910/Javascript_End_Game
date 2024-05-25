/**
 * You have an array of companies, each with an array of departments, and each department has an array of expenses. Calculate the total expenses for each company.
 */

const companies = [
  {
    name: "Company A",
    departments: [
      {
        name: "HR",
        expenses: [1000, 1500, 2000],
      },
      {
        name: "Finance",
        expenses: [2000, 2500, 3000],
      },
    ],
  },
  {
    name: "Company B",
    departments: [
      {
        name: "HR",
        expenses: [1200, 1700, 2200],
      },
      {
        name: "Finance",
        expenses: [2200, 2700, 3200],
      },
    ],
  },
];

// Calculate total expenses for each company

let expenses = {};

companies.forEach((company) => {
  const totalExpense = company.departments.reduce(
    (companyTotal, department) => {
      const departmentTotal = department.expenses.reduce(
        (deptTotal, expense) => {
          return deptTotal + expense;
        },
        0
      );
      return companyTotal + departmentTotal;
    },
    0
  );
  expenses[company.name] = totalExpense;
});

console.log(expenses);
