const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.trim().split(""));

const visited = Array(26).fill(false);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let maxCount = 0;

function dfs(x, y, count) {
  const index = board[x][y].charCodeAt(0) - 65;
  visited[index] = true;
  maxCount = Math.max(maxCount, count);

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const nextIndex = board[nx][ny].charCodeAt(0) - 65;
      if (!visited[nextIndex]) {
        dfs(nx, ny, count + 1);
      }
    }
  }

  visited[index] = false;
}

dfs(0, 0, 1);
console.log(maxCount);
