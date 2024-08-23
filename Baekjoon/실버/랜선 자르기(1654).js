const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.split(" ").map(Number));

let [n, count] = input.shift();

let lines = input.join(" ").split(" ").map(Number);

let right = Math.max(...lines);
let left = 1;

while (left <= right) {
  let mid = Math.floor((right + left) / 2);
  let num = 0;
  for (let i of lines) {
    num += Math.floor(i / mid);
  }
  if (num >= count) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(right);
