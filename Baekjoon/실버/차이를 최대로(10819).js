const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = input.shift();

const visited = Array.from({ length: n }).fill(false);
const perm = Array(n);
let answer = 0;
const dfs = (l) => {
  if (l === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(perm[i] - perm[i + 1]);
    }
    answer = Math.max(answer, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    perm[l] = arr[i];
    dfs(l + 1);
    visited[i] = false;
  }
};

dfs(0);

console.log(answer);
