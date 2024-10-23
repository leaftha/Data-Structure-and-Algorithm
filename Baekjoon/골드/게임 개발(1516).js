const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

let [n] = input.shift();

let g = Array.from({ length: n + 1 }, () => []);
let times = Array(n + 1).fill(0);
let ingree = Array(n + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length - 1; j++) {
    if (j === 0) {
      times[i + 1] = input[i][j];
    } else {
      g[input[i][j]].push(i + 1);
      ingree[i + 1]++;
    }
  }
}

let q = [];

const dp = Array(n + 1).fill(0);
for (let i = 1; i < ingree.length; i++) {
  if (ingree[i] === 0) {
    q.push(i);
    dp[i] = times[i];
  }
}

while (q.length) {
  let cur = q.shift();

  for (let next of g[cur]) {
    ingree[next]--;
    dp[next] = Math.max(dp[next], dp[cur] + times[next]);
    if (ingree[next] === 0) {
      q.push(next);
    }
  }
}

for (let i = 1; i < dp.length; i++) {
  console.log(dp[i]);
}
