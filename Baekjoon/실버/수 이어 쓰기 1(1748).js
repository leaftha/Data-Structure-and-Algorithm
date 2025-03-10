const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(String));

const [N] = input.shift();

console.log(N);

let answer = 0;

for (let i = 1; i <= N; i *= 10) {
  answer += N - i + 1;
}

console.log(answer);
