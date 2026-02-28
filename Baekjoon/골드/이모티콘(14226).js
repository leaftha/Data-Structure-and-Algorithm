const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N] = input.shift();

let q = [[1, 0, 0]];
const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
visited[1][0] = true;

while (q.length) {
  let [s, c, t] = q.shift();

  if (s === N) {
    console.log(t);
    break;
  }

  if (!visited[s][s]) {
    visited[s][s] = true;
    q.push([s, s, t + 1]);
  }

  if (c > 0 && s + c <= 1000 && !visited[s + c][c]) {
    visited[s + c][c] = true;
    q.push([s + c, c, t + 1]);
  }
  if (s > 0 && !visited[s - 1][c]) {
    visited[s - 1][c] = true;
    q.push([s - 1, c, t + 1]);
  }
}
