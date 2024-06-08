const isPalindrome = (n) => {
  return n === +n.toString().split("").reverse().join("");
};

console.log(isPalindrome(12));
