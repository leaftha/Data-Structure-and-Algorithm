const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

let [n] = input.shift();
let arr = input.shift();
let abs = 2000000000;
let left = 0;
let right = 0;
let start = 0;
let end = n - 1;

while (start < end) {
  let sum = arr[start] + arr[end];
  if (Math.abs(sum) < abs) {
    abs = Math.abs(sum);
    left = arr[start];
    right = arr[end];
  }
  if (sum === 0) {
    break;
  } else if (sum < 0) {
    ++start;
  } else {
    --end;
  }
}
console.log(left, right);
