const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let [n, m] = input.shift();

const bfs = (arr) => {
  const cheese = [];
  const visted = Array.from(Array(n), () => Array(m).fill(0));
  let q = [[0, 0]];
  visted[0][0] = 1;
  while (q.length) {
    let [y, x] = q.shift();
    let count = 0;
    for (let [dy, dx] of dxy) {
      let ey = dy + y;
      let ex = dx + x;
      if (ey >= 0 && ey < n && ex >= 0 && ex < m && visted[ey][ex] === 0) {
        q.push([ey, ex]);
        visted[ey][ex] = 1;
      }
      if (
        arr[y][x] === 1 &&
        ey >= 0 &&
        ey < n &&
        ex >= 0 &&
        ex < m &&
        arr[ey][ex] === 0
      ) {
        count += 1;
      }
    }
    if (count >= 2) {
      cheese.push([y, x]);
    }
  }
  return cheese;
};

let answer = 0;
while (1) {
  const arr = bfs(input);
  if (arr.length === 0) {
    break;
  }
  for (let [y, x] of arr) {
    input[y][x] = 0;
  }
  answer += 1;
}

// console.log(answer);
