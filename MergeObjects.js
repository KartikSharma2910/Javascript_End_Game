function mergeObjects(obj1, obj2) {
  const mergedObj = { ...obj1, ...obj2 };
  return mergedObj;
}

function isObject(obj) {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

function mergeObjects(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (isObject(obj2[key]) && isObject(result[key])) {
      result[key] = mergeObjects(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = {
  name: "Kartik Sharma",
  age: 23,
};

const obj2 = {
  occupation: "Software Developer",
  caste: "Brahmin",
};

const ans = mergeObjects(obj1, obj2);
console.log(ans);
