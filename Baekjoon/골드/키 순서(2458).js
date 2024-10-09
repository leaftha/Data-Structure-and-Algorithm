const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n, m] = input.shift();

const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let [p, n] of input) {
  dist[p][n] = 1;
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

let anwer = 0;

for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= n; j++) {
    if (dist[i][j] < Infinity || dist[j][i] < Infinity) {
      count++;
    }
  }

  if (count === n) {
    anwer++;
  }
}

console.log(anwer);
