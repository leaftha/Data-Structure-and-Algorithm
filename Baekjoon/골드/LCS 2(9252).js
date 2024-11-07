const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map((el) => el.trim().split(" ").map(Number));
  .map((el) => String(el.trim(" ")));

const a = input.shift();
const b = input.shift();

const dp = Array.from(Array(a.length + 1), () => Array(b.length + 1).fill(0));

for (let i = 1; i < a.length + 1; i++) {
  for (let j = 1; j < b.length + 1; j++) {
    if (a[i - 1] == b[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[a.length][b.length]);

let answer = "";
let i = a.length;
let j = b.length;
while (i > 0 && j > 0) {
  if (a[i - 1] === b[j - 1]) {
    answer = a[i - 1] + answer;
    i--;
    j--;
  } else if (dp[i - 1][j] > dp[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}
if (answer.length > 0) {
  console.log(answer);
}
