const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

const [n, m] = input.shift();

const chicken = [];
const house = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 1) {
      house.push([i, j]);
    }
    if (input[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

function chickenSum(arr) {
  let sum = 0;
  for (let i = 0; i < house.length; i++) {
    let [y, x] = house[i];
    let houseSum = [];
    for (let j = 0; j < arr.length; j++) {
      let [cy, cx] = arr[j];
      houseSum.push(Math.abs(y - cy) + Math.abs(x - cx));
    }
    sum += Math.min(...houseSum);
  }
  return sum;
}

let answer = Infinity;
function dfs(idx, arr) {
  if (arr.length === m) {
    answer = Math.min(answer, chickenSum(arr));
    return;
  }

  for (let i = idx; i < chicken.length; i++) {
    dfs(i + 1, [...arr, chicken[i]]);
  }
}

dfs(0, []);

console.log(answer);
