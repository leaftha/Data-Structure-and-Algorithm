const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

function getMax(arr, K, idx1, idx2) {
  return arr
    .map((v) => v[idx1] + v[idx2])
    .sort((a, b) => b - a)
    .slice(0, K)
    .reduce((sum, v) => sum + v, 0);
}

const answer = Math.max(
  getMax(input, m, 0, 1),
  getMax(input, m, 0, 2),
  getMax(input, m, 1, 2),
);

console.log(answer);
