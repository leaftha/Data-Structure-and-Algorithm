const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.split(" ").map(Number));

let arr = input.join(" ").split(" ").map(Number);
let n = arr.shift();

let answer = [];

let num = [1];
let nums = [];
let count = 1;
let idx = 0;
answer.push("+");
while (nums.length != arr.length) {
  if (num[num.length - 1] === arr[idx]) {
    let a = num.pop();
    nums.push(a);
    answer.push("-");
    idx++;
  } else if (num[num.length - 1] != arr[idx] && count <= n) {
    count++;
    num.push(count);
    answer.push("+");
  } else {
    return console.log("NO");
  }
}

for (let i of answer) {
  console.log(i);
}
