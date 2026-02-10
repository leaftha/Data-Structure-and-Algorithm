const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input[0];

let left = 1;

let right = 1;
const answer = [];
while (right < 100000) {
  let weight = right * right - left * left;

  if (weight === n) {
    answer.push(right);
    right++;
  } else if (weight < n) {
    right++;
  } else {
    left++;
  }

  if (left === right) right++;
}
if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.join("\n"));
}
