const array = [1, 2, 2, 5, 5, 1, 3];

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

/**
 * Using Reduce Method
 */

function removeDuplicatesTwo(array) {
  return array.reduce((curr, acc) => {
    if (!curr.includes(acc)) {
      curr.push(acc);
    }
    return curr;
  }, []);
}

/**
 * Using extra object ans array
 */

function removeDuplicatesThree(array) {
  let seen = {};
  let result = [];

  array.forEach((element) => {
    if (!seen[element]) {
      seen[element] = true;
      result.push(element);
    }
  });

  return result;
}

console.log(removeDuplicatesThree(array));
