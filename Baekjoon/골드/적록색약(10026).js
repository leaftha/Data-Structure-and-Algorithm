const fs = require("fs");
const rawInput = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(rawInput[0]);
const input = rawInput.slice(1).map((line) => line.trim().split(""));
let visited1 = Array.from(Array(n), () => Array(n).fill(false));
let visited2 = Array.from(Array(n), () => Array(n).fill(false));

const dxy = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const bfs = (y, x, color, visited, isColorWeak) => {
  let queue = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    let [cy, cx] = queue.shift();

    for (let [dy, dx] of dxy) {
      let ny = cy + dy;
      let nx = cx + dx;

      if (ny >= 0 && ny < n && nx >= 0 && nx < n && !visited[ny][nx]) {
        if (isColorWeak) {
          if (
            (color === "R" || color === "G") &&
            (input[ny][nx] === "R" || input[ny][nx] === "G")
          ) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          } else if (color === "B" && input[ny][nx] === "B") {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        } else {
          if (input[ny][nx] === color) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
    }
  }
};

let answer1 = 0;
let answer2 = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited1[i][j]) {
      bfs(i, j, input[i][j], visited1, false);
      answer1++;
    }
    if (!visited2[i][j]) {
      bfs(i, j, input[i][j], visited2, true);
      answer2++;
    }
  }
}

console.log(answer1, answer2);
