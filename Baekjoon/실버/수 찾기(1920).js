const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));
let arr = [...input[1]];

arr.sort((a, b) => a - b);

for (let n of input[3]) {
  let left = 0;
  let right = arr.length - 1;
  let isFalse = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === n) {
      isFalse = 1;
      break;
    }
    if (arr[mid] < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(isFalse);
}
