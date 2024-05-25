let rev = 0;
let n = 12345;

while (n > 0) {
  let last_digit = n % 10;
  rev = rev * 10 + last_digit;
  n = n / 10;
}

console.log(rev);
