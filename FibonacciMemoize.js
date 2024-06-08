function memoisedFibonacci(n, memo = {}) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }

  let ans = memoisedFibonacci(n - 1, memo) + memoisedFibonacci(n - 2, memo);
  memo[n] = ans;

  return memo[n];
}

console.time();
console.log(memoisedFibonacci(8));
console.timeEnd();

console.time();
console.log(memoisedFibonacci(8));
console.timeEnd();
