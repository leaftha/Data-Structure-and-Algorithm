const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, r, q] = input[0];
let idx = 1;

const g = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < n - 1; i++) {
  const [u, v] = input[idx++];
  g[u].push(v);
  g[v].push(u);
}

const queries = [];
for (let i = 0; i < q; i++) {
  queries.push(input[idx++][0]);
}

const parent = Array(n + 1).fill(0);
const order = [];
const stack = [r];
parent[r] = -1;

while (stack.length) {
  const u = stack.pop();
  order.push(u);
  for (const v of g[u]) {
    if (v === parent[u]) continue;
    parent[v] = u;
    stack.push(v);
  }
}

const subSize = Array(n + 1).fill(1);
for (let i = order.length - 1; i >= 0; i--) {
  const u = order[i];
  const p = parent[u];
  if (p > 0) subSize[p] += subSize[u];
}

for (const u of queries) {
  console.log(subSize[u]);
}
