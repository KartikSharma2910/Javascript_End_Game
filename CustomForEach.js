function customForEach(array, operation) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      operation(array[i]);
    }
  } else {
    throw new Error("forEach method only works on array");
  }
}

const array = [1, 2, 3, 4, 5];
customForEach(array, (item) => console.log(item * 2));
