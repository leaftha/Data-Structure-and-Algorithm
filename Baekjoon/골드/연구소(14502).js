const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n, m] = input.shift();

let q = [];
let empty = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 2) {
      q.push([i, j]);
    }
    if (input[i][j] === 0) {
      empty.push([i, j]);
    }
  }
}

let comb = [];

function dfs(L, arr) {
  if (arr.length === 3) {
    comb.push(arr);
    return;
  }
  for (let i = L; i < empty.length; i++) {
    dfs(i + 1, [...arr, empty[i]]);
  }
}

dfs(0, []);

let dxy = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let c = 3;

function vir(q, map) {
  while (q.length) {
    let [y, x] = q.shift();

    for (let [dy, dx] of dxy) {
      let ey = dy + y;
      let ex = dx + x;
      if (ey >= 0 && ey < n && ex >= 0 && ex < m && map[ey][ex] === 0) {
        map[ey][ex] = 2;
        q.push([ey, ex]);
      }
    }
  }
}

let answer = 0;

for (let [a, b, c] of comb) {
  const copy = input.map((row) => [...row]);
  copy[a[0]][a[1]] = 1;
  copy[b[0]][b[1]] = 1;
  copy[c[0]][c[1]] = 1;

  let que = [...q];
  vir(que, copy);

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copy[i][j] === 0) {
        count++;
      }
    }
  }

  answer = Math.max(answer, count);
}
console.log(answer);
