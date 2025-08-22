const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, l, r] = input.shift();
const inRange = (y, x) => 0 <= y && y < n && 0 <= x && x < n;

const dxy = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
let answer = 0;
while (true) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let moved = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      const q = [[i, j]];
      let qHead = 0;
      visited[i][j] = true;

      const union = [];
      let sum = 0;

      while (qHead < q.length) {
        const [y, x] = q[qHead++];
        union.push([y, x]);
        sum += input[y][x];

        for (const [dy, dx] of dxy) {
          const ny = y + dy,
            nx = x + dx;
          if (!inRange(ny, nx) || visited[ny][nx]) continue;

          const diff = Math.abs(input[y][x] - input[ny][nx]);
          if (l <= diff && diff <= r) {
            visited[ny][nx] = true;
            q.push([ny, nx]);
          }
        }
      }

      if (union.length >= 2) {
        const avg = Math.floor(sum / union.length);
        for (const [y, x] of union) input[y][x] = avg;
        moved = true;
      }
    }
  }
  if (!moved) break;
  answer++;
}

console.log(answer);
