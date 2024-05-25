function findMax(array) {
  let maximum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  console.log(maximum);
}

const array = [1, 2, 6, 2, 9, 34, 26];
findMax(array);
