const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let [m] = input.shift();

let dist = Array(n + 1).fill(Infinity);

let g = {};

for (let i = 1; i <= n; i++) {
  g[i] = [];
}

for (let i = 0; i < m; i++) {
  g[input[i][0]].push([input[i][1], input[i][2]]);
}

let [s, e] = input[input.length - 1];

let q = [[s, 0]];

while (q.length) {
  let [n, c] = q.shift();
  if (dist[n] < c) continue;

  for ([qn, qc] of g[n]) {
    if (dist[qn] > c + qc) {
      dist[qn] = c + qc;
      q.push([qn, qc + c]);
    }
  }
  q.sort((a, b) => a[1] - b[1]);
}
console.log(dist[e]);
