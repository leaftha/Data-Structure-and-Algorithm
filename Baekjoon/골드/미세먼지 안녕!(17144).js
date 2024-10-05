const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [r, c, t] = input.shift();

let m = [];

for (let i = 0; i < r; i++) {
  if (input[i][0] === -1) {
    m.push(i);
  }
}

let b = [];

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (input[i][j] > 0) {
      b.push([i, j, input[i][j]]);
    }
  }
}

let dxy = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function c1() {
  let temp = Array.from({ length: r }, () => Array(c).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (input[i][j] > 0) {
        let amount = Math.floor(input[i][j] / 5);
        let count = 0;
        for (let [dy, dx] of dxy) {
          let ny = i + dy;
          let nx = j + dx;
          if (ny >= 0 && ny < r && nx >= 0 && nx < c && input[ny][nx] !== -1) {
            temp[ny][nx] += amount;
            count++;
          }
        }
        temp[i][j] -= count * amount;
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      input[i][j] += temp[i][j];
    }
  }
}
function c2() {
  let [cy, _] = m;
  for (let i = cy - 1; i > 0; i--) {
    input[i][0] = input[i - 1][0];
  }
  for (let i = 0; i < c; i++) {
    input[0][i] = input[0][i + 1];
  }
  for (let i = 0; i < cy; i++) {
    input[i][c - 1] = input[i + 1][c - 1];
  }
  for (let i = c - 1; i > 1; i--) {
    input[cy][i] = input[cy][i - 1];
  }
  input[cy][1] = 0;
}

function c3() {
  let [_, cy] = m;
  for (let i = cy + 1; i < r - 1; i++) {
    input[i][0] = input[i + 1][0];
  }
  for (let i = 0; i < c; i++) {
    input[r - 1][i] = input[r - 1][i + 1];
  }
  for (let i = r - 1; i > cy; i--) {
    input[i][c - 1] = input[i - 1][c - 1];
  }
  for (let i = c - 1; i > 1; i--) {
    input[cy][i] = input[cy][i - 1];
  }
  input[cy][1] = 0;
}

for (let i = 0; i < t; i++) {
  c1();
  c2();
  c3();
}

let answer = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (input[i][j] <= 0) continue;
    answer += input[i][j];
  }
}

console.log(answer);
