const jobs = [
  {
    id: 1,
    route: {
      id: 2711733,
      name: "Delhi - Mumbai - Delhi",
    },
  },
  {
    id: 2,
    route: {
      id: 2711733,
      name: "Delhi - Mumbai - Delhi",
    },
  },
  {
    id: 3,
    route: {
      id: 2711734,
      name: "Delhi-Agra-Delhi",
    },
  },
  {
    id: 4,
    route: {
      id: 2711734,
      name: "Delhi-Agra-Delhi",
    },
  },
];

const uniqueRoutes = [];

jobs.forEach((job) => {
  if (!uniqueRoutes.some((route) => route.id === job.route.id)) {
    uniqueRoutes.push(job.route);
  }
});

console.log(uniqueRoutes);
