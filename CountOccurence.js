function countOccurence(str) {
  str = str.toLowerCase();

  let occurence = {};
  let newString = str.split("");

  for (let i = 0; i < newString.length; i++) {
    if (occurence[str[i]]) {
      occurence[str[i]]++;
    } else {
      occurence[str[i]] = 1;
    }
  }
  console.log(occurence);
}

const word = "kartik";
countOccurence(word);
