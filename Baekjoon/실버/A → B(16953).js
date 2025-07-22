const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let q = [[n, 1]];

let answer = -1;

while (q.length) {
  let [cur, count] = q.shift();

  if (cur === m) {
    answer = count;
    break;
  }

  let a = cur * 2;

  if (a <= m) {
    q.push([a, count + 1]);
  }

  let b = `${cur}1`;
  if (Number(b) <= m) {
    q.push([Number(b), count + 1]);
  }
}

console.log(answer);
