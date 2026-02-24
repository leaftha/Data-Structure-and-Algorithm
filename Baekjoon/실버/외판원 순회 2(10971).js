const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N] = input.shift();
let answer = Infinity;
const vistied = Array(N).fill(false);
vistied[0] = true;
const dfs = (s, val, count) => {
  if (val >= answer) return;

  if (count === N) {
    if (input[s][0] !== 0) {
      answer = Math.min(answer, val + input[s][0]);
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!vistied[i] && input[s][i] !== 0) {
      vistied[i] = true;
      dfs(i, val + input[s][i], count + 1);
      vistied[i] = false;
    }
  }
};

dfs(0, 0, 1);

console.log(answer);
