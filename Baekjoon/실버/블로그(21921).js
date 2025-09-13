const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let arr = input.shift();

let max = -1;

let add = 0;

for (let i = 0; i < m; i++) {
  add += arr[i];
}
max = add;
let count = 1;

for (let i = m; i < arr.length; i++) {
  add = add - arr[i - m] + arr[i];
  if (max < add) {
    max = add;
    count = 1;
  } else if (max === add) {
    count++;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(count);
}
