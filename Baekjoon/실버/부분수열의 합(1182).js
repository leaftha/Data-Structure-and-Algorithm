const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, M] = input.shift();
const arr = input.shift();
let answer = 0;
const visited = Array(N).fill(false);

const dfs = (idx, val) => {
  if (idx === N) {
    if (val === M) {
      answer++;
    }
    return;
  }

  dfs(idx + 1, val);
  dfs(idx + 1, val + arr[idx]);
};

dfs(0, 0);
if (M === 0) answer--;

console.log(answer);
