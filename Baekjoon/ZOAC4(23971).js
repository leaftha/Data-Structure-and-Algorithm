const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ");
//   .split("\n");

let answer = 0;

answer += Math.ceil(input[0] / (parseInt(input[2]) + 1));
answer *= Math.ceil(input[1] / (parseInt(input[3]) + 1));

console.log(answer);
