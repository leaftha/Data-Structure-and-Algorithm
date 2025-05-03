const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N] = input.shift();

const visted = Array(N).fill(false);
let answer = Infinity;

const calc = () => {
  let start = [];
  let end = [];

  for (let i = 0; i < N; i++) {
    if (visted[i]) {
      start.push(i);
    } else {
      end.push(i);
    }
  }

  let startP = 0;
  let endP = 0;

  for (let i = 0; i < N / 2; i++) {
    for (let j = 0; j < N / 2; j++) {
      if (i === j) continue;
      startP += input[start[i]][start[j]];
      endP += input[end[i]][end[j]];
    }
  }

  answer = Math.min(answer, Math.abs(startP - endP));
};

const dfs = (count, idx) => {
  if (count === N / 2) {
    calc();
    return;
  }

  for (let i = idx; i < N; i++) {
    if (!visted[i]) {
      visted[i] = true;
      dfs(count + 1, idx + 1);
      visted[i] = false;
    }
  }
};

dfs(0, 0);

console.log(answer);
