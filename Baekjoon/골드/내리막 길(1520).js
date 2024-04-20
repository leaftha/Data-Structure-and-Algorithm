const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [m, n] = input.shift();
let dp = Array.from(Array(m), () => Array(n).fill(-1));

const dxy = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function dfs(y, x) {
  if (y === m - 1 && x === n - 1) return 1;

  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;

  for (const [dy, dx] of dxy) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < m && nx >= 0 && nx < n && input[ny][nx] < input[y][x]) {
      dp[y][x] += dfs(ny, nx);
    }
  }

  return dp[y][x];
}

console.log(dfs(0, 0));
