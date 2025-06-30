const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const n = +input.shift();
const map = input.map((row) => row.split("").map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

const bfs = (y, x) => {
  let count = 1;
  const q = [[y, x]];
  const dxy = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (q.length) {
    const [cy, cx] = q.shift();
    for (const [dy, dx] of dxy) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (
        ny >= 0 &&
        ny < n &&
        nx >= 0 &&
        nx < n &&
        !visited[ny][nx] &&
        map[ny][nx] === 1
      ) {
        visited[ny][nx] = true;
        q.push([ny, nx]);
        count++;
      }
    }
  }

  return count;
};

const result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      visited[i][j] = true;
      result.push(bfs(i, j));
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join("\n"));
