const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let idx = 0;
const answer = [];
while (1) {
  let [n] = input[idx];
  if (n === 0) break;
  const map = input.slice(idx + 1, idx + 1 + n);
  const vistied = Array.from({ length: n }, () => Array(n).fill(Infinity));
  vistied[0][0] = map[0][0];

  let q = [[0, 0, map[0][0]]];
  const dxy = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = Infinity;
  while (q.length) {
    let [y, x, coin] = q.shift();
    if (y === n - 1 && x === n - 1) {
      result = Math.min(result, coin);
    }
    for (let [dy, dx] of dxy) {
      let ey = y + dy;
      let ex = x + dx;

      if (
        ey >= 0 &&
        ey < n &&
        ex >= 0 &&
        ex < n &&
        vistied[ey][ex] > coin + map[ey][ex]
      ) {
        vistied[ey][ex] = coin + map[ey][ex];
        q.push([ey, ex, coin + map[ey][ex]]);
        // q.sort((a, b) => a[2] - b[2]);
      }
    }
  }
  answer.push(`Problem 1: ${result}`);
  idx += n + 1;
}

console.log(answer.join("\n"));
