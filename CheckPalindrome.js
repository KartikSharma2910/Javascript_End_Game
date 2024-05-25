function checkPalindrome(str) {
  str = str.toLowerCase();
  let reversedString = str.split("").reverse().join("");
  return str === reversedString;
}

const str = "ABA";
console.log(checkPalindrome(str));

