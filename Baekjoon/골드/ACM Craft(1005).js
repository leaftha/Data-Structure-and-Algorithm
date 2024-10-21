const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

const [t] = input.shift();
let idx = 0;

for (let _ = 0; _ < t; _++) {
  let [n, m] = input[idx];
  idx++;
  let times = [0, ...input[idx]];
  idx++;
  let g = Array.from({ length: n + 1 }, () => []);
  const dp = Array(n + 1).fill(0);
  const indegree = Array(n + 1).fill(0);
  let length = idx;
  for (let i = length; i < length + m; i++) {
    let [s, e] = input[i];
    g[s].push(e);
    indegree[e]++;
    idx++;
  }
  let [end] = input[idx];
  idx++;
  let q = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
      dp[i] = times[i];
    }
  }
  while (q.length) {
    let num = q.shift();
    for (let i of g[num]) {
      dp[i] = Math.max(dp[i], times[i] + dp[num]);
      indegree[i]--;
      if (indegree[i] === 0) {
        q.push(i);
      }
    }
  }
  console.log(dp[end]);
}
