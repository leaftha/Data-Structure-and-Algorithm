const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = Number(input.shift().join(""));

let ve = [];
let testcase = [];
let count = -1;
for (let i = 0; i < input.length; i++) {
  if (input[i].length === 2) {
    ve[count].push(input[i]);
  } else {
    testcase.push(input[i]);
    ve.push([]);
    count++;
  }
}

let dxy = [
  [0, 1],
  [1, 0],
  [0, -1],

  [-1, 0],
];

for (let i = 0; i < n; i++) {
  let [m, n, c] = testcase[i];
  let arr = Array.from(Array(n), () => Array(m).fill(0));
  let visted = Array.from(Array(n), () => Array(m).fill(0));
  for (let [y, x] of ve[i]) {
    arr[x][y] = 1;
  }

  let q = [];
  let count = 0;

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (arr[j][k] === 0) continue;
      if (arr[j][k] === 1 && visted[j][k] === 0) {
        q.push([j, k]);
        visted[j][k] = 1;

        count++;
        while (q.length) {
          let [y, x] = q.shift();
          for (let [ey, ex] of dxy) {
            let ny = y + ey;
            let nx = x + ex;

            if (
              ny >= 0 &&
              ny < n &&
              nx >= 0 &&
              nx < m &&
              visted[ny][nx] === 0 &&
              arr[ny][nx] === 1
            ) {
              visted[ny][nx] = 1;
              q.push([ny, nx]);
            }
          }
        }
      }
    }
  }
  console.log(count);
}
