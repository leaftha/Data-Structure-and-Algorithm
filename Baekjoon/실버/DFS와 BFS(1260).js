const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let [n, c, s] = input.shift();

let tree = {};

for (let i = 1; i <= n; i++) {
  tree[i] = [];
}

for (let [i, j] of input) {
  tree[i].push(j);
  tree[j].push(i);
}

for (let key in tree) {
  tree[key].sort((a, b) => a - b);
}

let dfsVisted = Array(c + 1).fill(0);
let bfsVisted = Array(c + 1).fill(0);

let dfsArr = [];
let bfsArr = [];

function dfs(L) {
  if (dfsVisted[L] !== 1) {
    dfsVisted[L] = 1;
    dfsArr.push(L);
    for (let i of tree[L]) {
      dfs(i);
    }
  }
}

dfs(s);

let q = [s];
bfsVisted[s] = 1;

while (q.length) {
  let a = q.shift();
  bfsArr.push(a);
  for (let i of tree[a]) {
    if (bfsVisted[i] != 1) {
      q.push(i);
      bfsVisted[i] = 1;
    }
  }
}

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
