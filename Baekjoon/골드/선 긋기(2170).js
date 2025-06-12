const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

input.sort((a, b) => a[0] - b[0]);

let start = input[0][0];
let last = input[0][1];
let answer = 0;

for (let i = 1; i < input.length; i++) {
  if (last >= input[i][0]) {
    last = Math.max(last, input[i][1]);
  } else {
    answer += last - start;
    start = input[i][0];
    last = input[i][1];
  }
}

answer += last - start;

console.log(answer);
