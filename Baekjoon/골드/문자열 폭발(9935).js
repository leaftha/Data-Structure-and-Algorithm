const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map((el) => el.trim().split(" ").map(String));
  .map((el) => el.trim());

let stack = [];
let str = input[1];
let c = 0;

for (let i = 0; i < input[0].length; i++) {
  stack.push(input[0][i]);
  if (stack.length >= str.length) {
    let isFalse = true;
    for (let j = 0; j < str.length; j++) {
      if (stack[stack.length - str.length + j] !== str[j]) {
        isFalse = false;
        break;
      }
    }
    if (isFalse) {
      for (let j = 0; j < str.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
