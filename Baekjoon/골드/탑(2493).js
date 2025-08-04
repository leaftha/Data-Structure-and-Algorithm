const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let top = [];

for (let n of input) {
  top.push(...n);
}

let answer = [];
let stack = [];
for (let i = 0; i < n; i++) {
  while (stack.length > 0 && stack[stack.length - 1][1] < top[i]) {
    stack.pop();
  }

  if (stack.length === 0) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 1][0]);
  }
  stack.push([i + 1, top[i]]);
}

console.log(answer.join(" "));
