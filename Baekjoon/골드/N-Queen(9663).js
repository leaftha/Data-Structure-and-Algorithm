const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let q = [];
let answer = 0;

function back(x, y) {
  for (let [cx, cy] of q) {
    if (cx === x || cy === y) return false;
    if (Math.abs(cx - x) === Math.abs(cy - y)) return false;
  }
  return true;
}

function dfs(r) {
  if (r === n) {
    answer++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!back(r, i)) continue;
    q.push([r, i]);
    dfs(r + 1);
    q.pop();
  }
}

dfs(0);

console.log(answer);
