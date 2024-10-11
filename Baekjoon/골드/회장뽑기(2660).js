const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n] = input.shift();
input.pop();
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let [a, b] of input) {
  dist[a][b] = 1;
  dist[b][a] = 1;
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
let arr = [];
let answer = Infinity;

for (let i = 1; i <= n; i++) {
  let max = 0;
  for (let j = 1; j <= n; j++) {
    if (i !== j) {
      max = Math.max(max, dist[i][j]);
    }
  }
  if (answer > max) {
    answer = max;
    arr = [];
    arr.push(i);
  } else if (answer == max) {
    arr.push(i);
  }
}
console.log(answer, arr.length);
console.log(...arr);
