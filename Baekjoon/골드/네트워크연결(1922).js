const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let [m] = input.shift();

const edges = [];

for (let [a, b, c] of input) {
  edges.push([c, a, b]);
}

edges.sort((a, b) => a[0] - b[0]);

const parent = Array.from({ length: n + 1 }, (_, i) => i);
const rank = Array(n + 1).fill(0);

const find = (x) => {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]];
    x = parent[x];
  }
  return x;
};

const union = (a, b) => {
  a = find(a);
  b = find(b);

  if (a === b) return false;

  if (rank[a] < rank[b]) {
    parent[a] = b;
  } else if (rank[a] > rank[b]) {
    parent[b] = a;
  } else {
    parent[b] = a;
    rank[a]++;
  }

  return true;
};

let sum = 0;
for (let [c, a, b] of edges) {
  if (union(a, b)) {
    sum += c;
  }
}

console.log(sum);
