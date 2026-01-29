const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(undefined)),
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;

  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }

  if (dp[a][b][c] !== undefined) {
    return dp[a][b][c];
  }

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return dp[a][b][c];
}

let result = [];
for (const line of input) {
  let [a, b, c] = line;
  if (a === -1 && b === -1 && c === -1) break;
  result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}

console.log(result.join("\n"));
