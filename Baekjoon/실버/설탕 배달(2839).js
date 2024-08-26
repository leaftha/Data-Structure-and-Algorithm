const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = input[0].shift();
let answer = 0;
while (n > 0) {
  if (n % 5 === 0) {
    n -= 5;
  } else {
    n -= 3;
  }
  answer++;
}

console.log(n === 0 ? answer : -1);
