const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let [m] = input.shift();

function find(p, x) {
  if (p[x] != x) {
    p[x] = find(p, p[x]);
  }
  return p[x];
}

function union(p, r, x, y) {
  let rootx = find(p, x);
  let rooty = find(p, y);

  if (rootx !== rooty) {
    if (r[rootx] > r[rooty]) {
      p[rooty] = rootx;
    } else if (r[rootx] < r[rooty]) {
      p[rootx] = rooty;
    } else {
      p[rootx] = rooty;
      r[rooty] += 1;
    }
  }
}

const parent = Array.from({ length: n + 1 }, (_, idx) => idx);
const rank = Array(n + 1).fill(0);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 1) {
      union(parent, rank, i + 1, j + 1);
    }
  }
}

let root = find(parent, input[input.length - 1][0]);
let isFalse = true;
for (let i = 1; i < input[input.length - 1].length; i++) {
  if (root !== find(parent, input[input.length - 1][i])) {
    isFalse = false;
  }
}

if (isFalse) {
  console.log("YES");
} else {
  console.log("NO");
}
