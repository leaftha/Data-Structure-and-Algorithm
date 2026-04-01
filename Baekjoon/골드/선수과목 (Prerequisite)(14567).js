const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const ingree = Array(n + 1).fill(0);
const answer = Array(n).fill(0);

const sub = Array.from({ length: n + 1 }, () => []);

for (let [a, b] of input) {
  ingree[b]++;
  sub[a].push(b);
}

let q = [];

for (let i = 1; i <= n; i++) {
  if (ingree[i] === 0) {
    q.push([i, 1]);
  }
}

while (q.length) {
  let [cur, count] = q.shift();

  answer[cur - 1] = count;

  for (let next of sub[cur]) {
    ingree[next]--;
    if (ingree[next] === 0) {
      q.push([next, count + 1]);
    }
  }
}

console.log(answer.join(" "));
