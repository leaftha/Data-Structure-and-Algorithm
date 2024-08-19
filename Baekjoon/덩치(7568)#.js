const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

let answer = [];

for (let i = 0; i < arr.length; i++) {
  let count = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      count++;
    }
  }
  answer.push(count);
}

console.log(answer.join(" "));
