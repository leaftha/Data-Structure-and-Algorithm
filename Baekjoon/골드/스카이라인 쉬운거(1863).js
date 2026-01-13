const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let answer = 0;
let stack = [];

for (let [x, y] of input) {
  while (stack.length && stack[stack.length - 1] > y) {
    stack.pop();
    answer += 1;
  }

  if (stack.length === 0 || stack[stack.length - 1] < y) {
    if (y !== 0) stack.push(y);
  }
}

while (stack.length) {
  stack.pop();
  answer++;
}

console.log(answer);
