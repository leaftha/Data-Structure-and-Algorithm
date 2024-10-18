const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let [n] = input.shift();

let g = {};

for (let i = 1; i <= n; i++) {
  g[i] = [];
}

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j < input[i].length; j += 2) {
    if (input[i][j] === -1) break;
    g[input[i][0]].push([input[i][j], input[i][j + 1]]);
  }
}

function dfs(n, c, visted) {
  visted[n] = 1;
  if (c > max) {
    max = c;
    one = n;
  }
  for (let [nextN, nextC] of g[n]) {
    if (visted[nextN] === 0) {
      dfs(nextN, nextC + c, visted);
    }
  }
}
let max = -1;
let one = 1;
let visted = Array(n + 1).fill(0);
dfs(1, 0, visted);
visted = Array(n + 1).fill(0);
dfs(one, 0, visted);

console.log(max);
