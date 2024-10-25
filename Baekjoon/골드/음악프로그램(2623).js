const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

let [n, m] = input.shift();

let ingree = Array(n + 1).fill(0);

let g = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j < input[i].length - 1; j++) {
    g[input[i][j]].push(input[i][j + 1]);
    ingree[input[i][j + 1]]++;
  }
}

let q = [];
for (let i = 1; i < ingree.length; i++) {
  if (ingree[i] === 0) {
    q.push(i);
  }
}

let answer = [];

while (q.length) {
  let cur = q.shift();
  answer.push(cur);
  for (let next of g[cur]) {
    ingree[next]--;
    if (ingree[next] === 0) {
      q.push(next);
    }
  }
}

if (answer.length !== 0) {
  console.log(answer.join("\n"));
} else {
  console.log(0);
}
