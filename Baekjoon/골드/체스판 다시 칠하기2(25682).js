const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, K] = input.shift().split(" ").map(Number);
let board = input.map((line) => line.split(""));

let black = Array.from({ length: N }, () => Array(M).fill(0));
let white = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if ((i + j) % 2 === 0) {
      if (board[i][j] === "B") white[i][j] = 1;
      else black[i][j] = 1;
    } else {
      if (board[i][j] === "B") black[i][j] = 1;
      else white[i][j] = 1;
    }
  }
}

let black_sum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
let white_sum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    black_sum[i][j] =
      black[i - 1][j - 1] +
      black_sum[i - 1][j] +
      black_sum[i][j - 1] -
      black_sum[i - 1][j - 1];

    white_sum[i][j] =
      white[i - 1][j - 1] +
      white_sum[i - 1][j] +
      white_sum[i][j - 1] -
      white_sum[i - 1][j - 1];
  }
}

let answer = Infinity;
for (let i = K; i <= N; i++) {
  for (let j = K; j <= M; j++) {
    let blackCount =
      black_sum[i][j] -
      (i - K >= 0 ? black_sum[i - K][j] : 0) -
      (j - K >= 0 ? black_sum[i][j - K] : 0) +
      (i - K >= 0 && j - K >= 0 ? black_sum[i - K][j - K] : 0);

    let whiteCount =
      white_sum[i][j] -
      (i - K >= 0 ? white_sum[i - K][j] : 0) -
      (j - K >= 0 ? white_sum[i][j - K] : 0) +
      (i - K >= 0 && j - K >= 0 ? white_sum[i - K][j - K] : 0);

    answer = Math.min(answer, blackCount, whiteCount);
  }
}

console.log(answer);
