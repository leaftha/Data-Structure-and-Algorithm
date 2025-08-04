const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let wall = input.shift();

let answer = 0;
let right = [];
let left = [];

let min = -1;
for (let i = 0; i < m; i++) {
  if (min < wall[i]) {
    min = wall[i];
  }
  right.push(min);
}

min = -1;
for (let i = m - 1; i >= 0; i--) {
  if (min < wall[i]) {
    min = wall[i];
  }
  left.push(min);
}
left.reverse();
for (let i = 0; i < m; i++) {
  answer += Math.min(right[i], left[i]) - wall[i];
}

console.log(answer);
