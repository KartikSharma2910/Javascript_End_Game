let str = "apple";
// a=1,p=2,l=1,e=1

let count = {};

let newString = str.split("");

for (let i = 0; i < newString.length; i++) {
  if (count[newString[i]]) {
    count[newString[i]]++;
  } else {
    count[newString[i]] = 1;
  }
}

console.log(count);
