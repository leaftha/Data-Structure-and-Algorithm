const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input[0];
let nums = input[1];
let answer = 0;
nums.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (left === i) {
      left++;
    } else if (right === i) {
      right--;
    } else {
      let sum = nums[left] + nums[right];
      if (sum === nums[i]) {
        answer++;
        break;
      } else if (sum < nums[i]) {
        left++;
      } else {
        right--;
      }
    }
  }
}

console.log(answer);
