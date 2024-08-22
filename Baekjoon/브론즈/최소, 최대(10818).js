const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.split(" ").map(Number));

console.log(Math.min(...input[1]), Math.max(...input[1]));
