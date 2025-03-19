const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k] = input.shift();

let answer = 0;
for (let i = n - 1; i >= 0; i--) {
  // console.log(input[i][0]);
  if (input[i][0] <= k) {
    answer += Math.floor(k / input[i][0]);
    k -= Math.floor(k / input[i][0]) * input[i][0];
  }
}

console.log(answer);
