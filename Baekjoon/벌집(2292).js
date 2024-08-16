const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);

let count = 1;
let answer = 1;
while (count < n) {
  count += 6 * answer;
  answer++;
}

console.log(answer);
