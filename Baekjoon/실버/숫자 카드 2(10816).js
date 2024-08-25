const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let arr = [...input[1]];
arr.sort((a, b) => a - b);

let obj = {};

for (let i of arr) {
  if (obj[i]) {
    obj[i] += 1;
  } else {
    obj[i] = 1;
  }
}
let answer = [];
for (let i of input[3]) {
  if (obj[i]) {
    answer.push(obj[i]);
  } else {
    answer.push(0);
  }
}
// for (let i = 0; i < input[3].length; i++) {
//   let n = input[3][i];
//   let left = 0;
//   let right = arr.length - 1;
//   let length = answer.length;
//   if (arr.length === 1 && arr[0] === n) {
//     answer.push(1);
//     continue;
//   }
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === n) {
//       answer.push(obj[arr[mid]]);
//       break;
//     }
//     if (arr[mid] < n) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   if (length === answer.length) {
//     answer.push(0);
//   }
// }

console.log(answer.join(" "));
