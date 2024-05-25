function findMin(array) {
  let minimum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return minimum;
}

const ans = [1, 5, 2, 8, 12, 98, 21];
console.log(findMin(ans));
