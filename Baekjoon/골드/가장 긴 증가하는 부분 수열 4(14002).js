const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let arr = input.shift();

const dp = Array(n).fill(1);
const prev = Array(n).fill(-1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxLen = Math.max(...dp);
let idx = dp.indexOf(maxLen);
const answer = [];

while (idx !== -1) {
  answer.push(arr[idx]);
  idx = prev[idx];
}

answer.reverse();

console.log(maxLen);
console.log(answer.join(" "));
