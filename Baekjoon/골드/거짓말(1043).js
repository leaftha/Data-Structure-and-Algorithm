const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let truth = input.shift();
let tc = truth.shift();

function find(p, x) {
  if (p[x] !== x) {
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
      p[rooty] = rootx;
      r[rootx] += 1;
    }
  }
}
let parent = Array.from({ length: n + 1 }, (_, index) => index);
let rank = new Array(n + 1).fill(0);

for (let p of input) {
  let first = p[1];
  for (let i = 2; i < p.length; i++) {
    union(parent, rank, first, p[i]);
  }
}

let truthRoot = new Set();
for (let person of truth) {
  truthRoot.add(find(parent, person));
}

let lieCount = 0;
for (let party of input) {
  let canLie = true;
  for (let i = 1; i < party.length; i++) {
    if (truthRoot.has(find(parent, party[i]))) {
      canLie = false;
      break;
    }
  }
  if (canLie) {
    lieCount++;
  }
}

console.log(lieCount);
