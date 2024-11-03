const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.shift().split(" ").map(Number);
const grid = input.map((line) => line.trim());

const visited = Array.from({ length: n }, () => Array(m).fill(0));
let answer = 0;

const directions = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

function dfs(y, x) {
  if (visited[y][x] === 1) return true;
  if (visited[y][x] === 2) return false;

  visited[y][x] = 1;

  const [dy, dx] = directions[grid[y][x]];
  const ny = y + dy;
  const nx = x + dx;

  if (dfs(ny, nx)) {
    visited[y][x] = 2;
    return true;
  }

  visited[y][x] = 2;
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] === 0) {
      if (dfs(i, j)) {
        answer++;
      }
    }
  }
}

console.log(answer);
