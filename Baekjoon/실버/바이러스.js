const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let m = Number(input.shift().join(""));
let answer = -1;
let visted = Array(m + 1).fill(0);
let obj = {};

for (let i = 1; i <= m; i++) {
  obj[i] = [];
}
for (let i = 1; i < input.length; i++) {
  let [n1, n2] = input[i];
  obj[n1].push(n2);
  obj[n2].push(n1);
}

let q = [1];

while (q.length) {
  let n = q.shift();
  if (visted[n] === 1) continue;
  visted[n] = 1;
  answer++;

  for (let i of obj[n]) {
    q.push(i);
  }
}

console.log(answer);
