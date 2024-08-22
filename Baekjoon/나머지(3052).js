const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// .map((el) => el.split(" ").map(Number));

let nums = new Set();
for (let n of input) {
  nums.add(n % 42);
}

console.log(nums.size);
