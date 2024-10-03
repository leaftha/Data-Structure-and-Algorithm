const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let g = {};

for (let i = 1; i <= n; i++) {
  g[i] = [];
}

for (let [p, c, n] of input) {
  g[p].push([c, n]);
  g[c].push([p, n]);
}
let first = 1;
let max = 0;

function dfs(L, num, visted) {
  visted[L] = true;
  if (num > max) {
    max = num;
    first = L;
  }
  for (let [c, n] of g[L]) {
    if (!visted[c]) {
      dfs(c, num + n, visted);
    }
  }
}

let visted = Array(n + 1).fill(false);

dfs(1, 0, visted);

visted = Array(n + 1).fill(false);

dfs(first, 0, visted);

console.log(max);
