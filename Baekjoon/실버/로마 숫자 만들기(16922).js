const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input[0];

const answer = new Set();

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    for (let k = 0; k <= n - i - j; k++) {
      const o = n - i - j - k;

      const sum = i * 1 + j * 5 + k * 10 + o * 50;

      answer.add(sum);
    }
  }
}

console.log(answer.size);
