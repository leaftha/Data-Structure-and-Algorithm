const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n, m] = input.shift();
let map = [];
for (let i of input) {
  map.push(i[0]);
}

let visted = Array.from({ length: Number(n) }, () => Array(Number(m)).fill(0));

const dxy = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

let q = [[0, 0, 1]];
visted[0][0] = 1;

let answer = 0;

while (q.length) {
  let [y, x, c] = q.shift();
  if (y === n - 1 && x === m - 1) {
    answer = c;
    break;
  }
  for (let [dy, dx] of dxy) {
    let ey = dy + y;
    let ex = dx + x;

    if (
      ey >= 0 &&
      ey < n &&
      ex >= 0 &&
      ex < m &&
      visted[ey][ex] === 0 &&
      map[ey][ex] === "1"
    ) {
      q.push([ey, ex, c + 1]);
      visted[ey][ex] = 1;
    }
  }
}

console.log(answer);
