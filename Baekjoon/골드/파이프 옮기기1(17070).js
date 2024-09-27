const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const n = input.shift()[0];
const grid = input;

let answer = 0;

function isValid(y, x) {
  return y >= 0 && y < n && x >= 0 && x < n && grid[y][x] === 0;
}

function dfs(y, x, direction) {
  if (y === n - 1 && x === n - 1) {
    answer++;
    return;
  }

  if (direction === 0 || direction === 2) {
    if (isValid(y, x + 1)) {
      dfs(y, x + 1, 0);
    }
  }

  if (direction === 1 || direction === 2) {
    if (isValid(y + 1, x)) {
      dfs(y + 1, x, 1);
    }
  }

  if (isValid(y, x + 1) && isValid(y + 1, x) && isValid(y + 1, x + 1)) {
    dfs(y + 1, x + 1, 2);
  }
}

if (grid[0][0] === 0 && grid[0][1] === 0) {
  dfs(0, 1, 0);
}

console.log(answer);
