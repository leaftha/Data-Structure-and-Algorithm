const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const ingree = Array(n + 1).fill(0);
const sub = Array.from({ length: n + 1 }, () => []);
const time = Array(n + 1).fill(0);
const q = [];
const dp = Array(n + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  let t = input[i][0];
  let m = input[i][1];
  time[i + 1] = t;
  ingree[i + 1] += m;
  for (let j = 2; j < input[i].length; j++) {
    sub[input[i][j]].push(i + 1);
  }
}

for (let i = 1; i <= n; i++) {
  if (ingree[i] === 0) {
    dp[i] = time[i];

    q.push(i);
  }
}

while (q.length) {
  const cur = q.shift();

  for (let next of sub[cur]) {
    ingree[next]--;
    dp[next] = Math.max(dp[next], dp[cur] + time[next]);
    if (ingree[next] === 0) {
      q.push(next);
    }
  }
}

console.log(Math.max(...dp));
