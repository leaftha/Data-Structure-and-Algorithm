const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const move = Array(101).fill(0);
const vistied = Array(101).fill(false);
for (let i = 1; i <= 100; i++) move[i] = i;
const sadari = input.splice(0, n);
const snake = [...input];
for (let [x, y] of sadari) move[x] = y;
for (let [u, v] of snake) move[u] = v;

let q = [[1, 0]];

while (q.length) {
  let [cur, count] = q.shift();
  if (cur === 100) {
    console.log(count);
    break;
  }
  for (let i = 1; i <= 6; i++) {
    let next = move[i + cur];
    if (next > 100) continue;
    if (vistied[next]) continue;
    vistied[next] = true;
    q.push([next, count + 1]);
  }
}
