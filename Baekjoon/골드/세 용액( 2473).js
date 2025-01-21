const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = input.shift();
arr.sort((a, b) => a - b);

let answer = [0, 0, 0];
let min = Infinity;
for (let i = 0; i < n - 1; i++) {
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    let sum = arr[left] + arr[right] + arr[i];
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      answer[0] = arr[i];
      answer[1] = arr[left];
      answer[2] = arr[right];
    }
    if (sum < 0) left++;
    else right--;
  }
}

console.log(answer.join(" "));
