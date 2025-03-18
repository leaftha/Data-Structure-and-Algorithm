const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N, M] = input.shift();

let sum = 0;

for (let i = 0; i < M; i++) {
  sum += input[0][i];
}

let max = sum;

for (let i = M; i < input[0].length; i++) {
  sum += input[0][i];
  sum -= input[0][i - M];

  max = Math.max(max, sum);
}

console.log(max);
