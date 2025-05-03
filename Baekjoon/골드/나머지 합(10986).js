const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, M] = input.shift();
const arr = input.shift();

let dp = Array(M).fill(0);
let sum = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  sum += arr[i];
  let num = sum % M;
  if (num < 0) num += M;

  if (num === 0) answer++;

  answer += dp[num];

  dp[num]++;
}

console.log(answer);
