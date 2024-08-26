const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let stack = [];
for (let i = 1; i < input.length; i++) {
  let n = input[i].shift();
  if (n != 0) {
    stack.push(n);
  } else {
    stack.pop();
  }
}

let sum = 0;

for (let i of stack) {
  sum += i;
}

console.log(sum);
