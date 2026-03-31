const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let man = input[0];
let answer = 0;
man.sort((a, b) => a - b);
let left = 0;
let right = n - 1;

while (left < right) {
  let v = man[left] + man[right];
  if (v >= m) {
    answer++;
    left++;
    right--;
  } else {
    left++;
  }
}

console.log(answer);
