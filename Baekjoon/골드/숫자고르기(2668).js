const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = [];

for (let [i] of input) {
  arr.push(i);
}
arr.unshift(0);
let result = [];
const dfs = (start, cur, path, vistied) => {
  console.log(cur, path);
  if (vistied[cur]) {
    if (start === cur) {
      result.push(...path);
    }
    return;
  }
  vistied[cur] = true;
  path.push(cur);
  dfs(start, arr[cur], path, vistied);
};

for (let i = 1; i < arr.length; i++) {
  const vistied = Array(n + 1).fill(false);
  dfs(i, i, [], vistied);
}

const answer = Array.from(new Set(result)).sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
