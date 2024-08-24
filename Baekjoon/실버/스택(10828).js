const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" "));

const n = input.shift();

let stack = [];
for (let i of input) {
  if (i[0] === "push") {
    stack.push(Number(i[1]));
  } else if (i[0] === "pop") {
    console.log(stack.length === 0 ? -1 : stack.pop());
  } else if (i[0] === "size") {
    console.log(stack.length);
  } else if (i[0] === "empty") {
    console.log(stack.length === 0 ? 1 : 0);
  } else if (i[0] === "top") {
    console.log(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}
