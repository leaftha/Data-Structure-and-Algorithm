const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

const ingree = {};
const time = {};
const chart = {};
const dp = {};
for (let i = 0; i < input.length; i++) {
  const n = input[i][0];
  chart[n] = [];
}

for (let i = 0; i < input.length; i++) {
  const n = input[i][0];
  const t = input[i][1];
  const ing = input[i][2] === undefined ? [] : input[i][2].split("");

  for (let next of ing) {
    chart[next].push(n);
  }

  time[n] = Number(t);
  ingree[n] = ing.length;
}

let q = [];
for (let key in ingree) {
  if (ingree[key] === 0) {
    q.push(key);
    dp[key] = time[key];
  }
}

while (q.length) {
  const cur = q.shift();
  for (let next of chart[cur]) {
    dp[next] = Math.max(dp[next] || 0, dp[cur] + time[next]);
    ingree[next]--;

    if (ingree[next] === 0) {
      q.push(next);
    }
  }
}
let answer = 0;
for (let key in dp) {
  answer = Math.max(answer, dp[key]);
}

console.log(answer);
