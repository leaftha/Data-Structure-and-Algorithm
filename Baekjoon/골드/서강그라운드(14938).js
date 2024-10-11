const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n, m, r] = input.shift();

let item = input.shift();

const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let [p, n, c] of input) {
  dist[p][n] = Math.min(dist[p][n], c);
  dist[n][p] = Math.min(dist[n][p], c);
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

let answer = 0;

for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= n; j++) {
    if (dist[i][j] <= m) {
      count += item[j - 1];
    }
  }
  answer = Math.max(answer, count);
}

console.log(answer);
