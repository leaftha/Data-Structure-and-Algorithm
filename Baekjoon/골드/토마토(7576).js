const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [m, n] = input.shift();
let visted = Array.from({ length: n }, () => Array(m).fill(-1));

let q = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 1) {
      q.push([i, j]);
      visted[i][j] = 0;
    }
    if (input[i][j] === -1) {
      visted[i][j] = 0;
    }
  }
}

const dxy = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

let count = 0;
while (count < q.length) {
  let [y, x] = q[count];
  count++;
  for (let [dy, dx] of dxy) {
    let ey = dy + y;
    let ex = dx + x;

    if (
      ey >= 0 &&
      ey < n &&
      ex >= 0 &&
      ex < m &&
      visted[ey][ex] === -1 &&
      input[ey][ex] === 0
    ) {
      visted[ey][ex] = visted[y][x] + 1;
      q.push([ey, ex]);
    }
  }
}

let answer = 0;

for (let arr of visted) {
  if (arr.indexOf(-1) !== -1) {
    answer = -1;
    break;
  }
  answer = Math.max(answer, ...arr);
}

console.log(answer);
