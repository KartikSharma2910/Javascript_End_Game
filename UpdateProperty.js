function updateProperty(obj, key, value) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = value;
  }
  return obj;
}

const exampleObj = { a: 1, b: 2, c: 3 };
const updatedObj = updateProperty(exampleObj, "b", 42);

console.log(updatedObj);
