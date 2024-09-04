const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" "));

let [n, m] = input.shift();

let campas = [];

for (let [s] of input) {
  campas.push(s);
}

let cx = 0;
let cy = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (campas[i][j] === "I") {
      cy = i;
      cx = j;
      break;
    }
  }
}

const dxy = [
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 0],
];
let visted = Array.from(Array(Number(n)), () => Array(Number(m)).fill(0));
let answer = 0;
function dfs(y, x) {
  visted[y][x] = 1;
  if (campas[y][x] === "P") answer += 1;
  for (let [ny, nx] of dxy) {
    let ey = ny + y;
    let ex = nx + x;
    if (
      ex >= 0 &&
      ex < m &&
      ey >= 0 &&
      ey < n &&
      campas[ey][ex] != "X" &&
      visted[ey][ex] === 0
    ) {
      dfs(ey, ex);
    }
  }
}

dfs(cy, cx);

console.log(answer === 0 ? "TT" : answer);
