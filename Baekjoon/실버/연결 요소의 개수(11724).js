const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let tree = {};

for (let i = 1; i <= n; i++) {
  tree[i] = [];
}

let visted = Array(n + 1).fill(0);

for (let [a, b] of input) {
  tree[a].push(b);
  tree[b].push(a);
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  if (visted[i] === 0) {
    answer++;
    let q = [i];
    visted[i] = 1;
    while (q.length) {
      let s = q.shift();

      for (let j of tree[s]) {
        if (visted[j] === 0) {
          q.push(j);
          visted[j] = 1;
        }
      }
    }
  }
}

console.log(answer);
