const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let arr = input.shift();
let [m] = input.shift();

let lt = 0;
let rt = Math.max(...arr);

let answer = 0;

while (lt <= rt) {
  let mid = Math.floor((rt + lt) / 2);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(arr[i], mid);
  }

  if (sum <= m) {
    answer = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}

console.log(answer);
