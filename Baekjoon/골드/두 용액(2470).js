const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N] = input.shift();

let arr = input.shift();
let answer = [0, 0];

arr.sort((a, b) => {
  return a - b;
});

let lt = 0;
let rt = arr.length - 1;
let min = Infinity;

while (lt < rt) {
  if (min > Math.abs(arr[lt] + arr[rt])) {
    min = Math.abs(arr[lt] + arr[rt]);
    answer[0] = arr[lt];
    answer[1] = arr[rt];
  }

  if (arr[lt] + arr[rt] > 0) {
    rt--;
  } else {
    lt++;
  }
}

console.log(answer.join(" "));
