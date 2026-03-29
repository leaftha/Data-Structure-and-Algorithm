const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N] = input.shift();

const day = Array(366).fill(0);

for (let [s, e] of input) {
  for (let i = s; i <= e; i++) {
    day[i]++;
  }
}

let answer = 0;
let w = 0;
let h = 0;

for (let i = 1; i <= 365; i++) {
  if (day[i] > 0) {
    w++;
    h = Math.max(h, day[i]);
  } else {
    answer += w * h;
    w = 0;
    h = 0;
  }
}

answer += w * h;

console.log(answer);
