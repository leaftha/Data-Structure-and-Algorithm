const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = input.shift();
const dp1 = Array(n).fill(1);
const dp2 = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp1[i] = Math.max(dp1[i], dp1[j] + 1);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    if (arr[j] < arr[i]) {
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
    }
  }
}

let ans = 0;
for (let i = 0; i < n; i++) {
  ans = Math.max(ans, dp1[i] + dp2[i] - 1);
}

console.log(ans);
