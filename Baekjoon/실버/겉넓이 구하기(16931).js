const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, M] = input.shift();
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const h = input[i][j];

    if (h > 0) answer += 2;

    const up = i > 0 ? input[i - 1][j] : 0;
    answer += Math.max(h - up, 0);

    const down = i < N - 1 ? input[i + 1][j] : 0;
    answer += Math.max(h - down, 0);

    const left = j > 0 ? input[i][j - 1] : 0;
    answer += Math.max(h - left, 0);

    const right = j < M - 1 ? input[i][j + 1] : 0;
    answer += Math.max(h - right, 0);
  }
}

console.log(answer);
