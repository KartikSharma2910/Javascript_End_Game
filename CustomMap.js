function customMap(array, operation) {
  const result = [];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      result.push(operation(array[i]));
    }
  } else {
    return new Error("Map method only works on array");
  }

  return result;
}

const array = [];

console.log(customMap(array, (item) => item * 2));
