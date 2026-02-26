const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => String(el));

let [n, m] = input.shift().trim().split(" ").map(Number);
const answer = [];
const star = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === "*") {
      star.push([i, j]);
    }
  }
}

let maxSize = Math.min(n, m);

const cover = Array.from({ length: n }, () => Array(m).fill("."));

for (let [y, x] of star) {
  for (let i = 1; i <= maxSize; i++) {
    if (
      y + i < n &&
      y - i >= 0 &&
      x + i < m &&
      x - i >= 0 &&
      input[y + i][x] === "*" &&
      input[y - i][x] === "*" &&
      input[y][x + i] === "*" &&
      input[y][x - i] === "*"
    ) {
      answer.push(`${y + 1} ${x + 1} ${i}`);

      cover[y][x] = "*";
      for (let k = 0; k <= i; k++) {
        cover[y + k][x] = "*";
        cover[y - k][x] = "*";
        cover[y][x + k] = "*";
        cover[y][x - k] = "*";
      }
    }
  }
}

let isFalse = true;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] !== cover[i][j]) {
      isFalse = false;
    }
  }
}
if (!isFalse) {
  console.log(-1);
} else {
  console.log(answer.length);
  console.log(answer.join("\n"));
}
