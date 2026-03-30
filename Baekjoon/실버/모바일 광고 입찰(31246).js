const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let answer = 0;
let count = 0;
input.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));

for (let [a, b] of input) {
  if (a - b >= 0) {
    count++;
  } else {
    answer = Math.abs(a - b);
    count++;
  }

  if (count === m) break;
}

console.log(answer);
