const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let [n, m] = input.shift();

const dist = Array(n + 1).fill(Infinity);
dist[1] = 0;

for (let i = 0; i < n - 1; i++) {
  for (let [p, q, c] of input) {
    if (dist[p] !== Infinity && dist[p] + c < dist[q]) {
      dist[q] = dist[p] + c;
    }
  }
}

let isFalse = false;
for (let [p, q, c] of input) {
  if (dist[p] !== Infinity && dist[p] + c < dist[q]) {
    isFalse = true;
    break;
  }
}

if (isFalse) {
  console.log(-1);
} else {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    answer.push(dist[i] !== Infinity ? dist[i] : -1);
  }
  console.log(answer.join("\n"));
}
