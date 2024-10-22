const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

let [n, m] = input.shift();

const g = Array.from({ length: n + 1 }, () => []);
const ingree = Array(n + 1).fill(0);

for (let [a, b] of input) {
  g[a].push(b);
  ingree[b]++;
}

let q = [];
for (let i = 1; i <= n; i++) {
  if (ingree[i] === 0) {
    q.push(i);
  }
}
let answer = [];

while (q.length) {
  let cur = q.shift();
  answer.push(cur);
  for (let c of g[cur]) {
    ingree[c]--;
    if (ingree[c] === 0) {
      q.push(c);
    }
  }
}

console.log(answer.join(" "));
