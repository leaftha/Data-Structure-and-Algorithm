const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
// .split("\n")
// .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

// let [n] = input.shift();
const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
const stack = [];
let answer = "";

for (const char of input) {
  if (/[A-Z]/.test(char)) {
    answer += char;
  } else if (char === "(") {
    stack.push(char);
  } else if (char === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  } else {
    while (
      stack.length &&
      precedence[stack[stack.length - 1]] >= precedence[char]
    ) {
      answer += stack.pop();
    }
    stack.push(char);
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
