const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let idx = 0;
const answer = [];

while (1) {
  let [n, mRaw] = input[idx];
  if (n === 0 && mRaw === 0) break;

  const m = Math.round(mRaw * 100);
  let arr = [];

  for (let i = idx + 1; i <= n + idx; i++) {
    let [k, moneyRaw] = input[i];
    arr.push([k, Math.round(moneyRaw * 100)]);
  }

  const dp = Array(m + 1).fill(0);

  for (let [k, money] of arr) {
    for (let i = money; i <= m; i++) {
      dp[i] = Math.max(dp[i], dp[i - money] + k);
    }
  }

  answer.push(dp[m]);
  idx += n + 1;
}

console.log(answer.join("\n"));
