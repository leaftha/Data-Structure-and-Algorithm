const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const moves = input.slice(0, -1);
const n = moves.length;

let dp = Array.from({ length: 5 }, () => Array(5).fill(Infinity));
dp[0][0] = 0;

function getCost(from, to) {
  if (from === to) return 1;
  if (from === 0) return 2;
  if (Math.abs(from - to) === 2) return 4;
  return 3;
}

for (const move of moves) {
  const nextDp = Array.from({ length: 5 }, () => Array(5).fill(Infinity));
  for (let left = 0; left < 5; left++) {
    for (let right = 0; right < 5; right++) {
      if (dp[left][right] !== Infinity) {
        if (right !== move) {
          nextDp[move][right] = Math.min(
            nextDp[move][right],
            dp[left][right] + getCost(left, move)
          );
        }
        if (left !== move) {
          nextDp[left][move] = Math.min(
            nextDp[left][move],
            dp[left][right] + getCost(right, move)
          );
        }
      }
    }
  }
  dp = nextDp;
}

let answer = Infinity;
for (let left = 0; left < 5; left++) {
  for (let right = 0; right < 5; right++) {
    answer = Math.min(answer, dp[left][right]);
  }
}

console.log(answer);
