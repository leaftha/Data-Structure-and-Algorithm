const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const arr = [];

for (let i = 0; i < input.length - 1; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
let answer = [];

function isCheck(arr) {
  arr.sort((a, b) => b - a);

  if (arr[0] >= arr[1] + arr[2]) {
    answer.push("Invalid");
  } else {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
    }
    if (set.size === 1) {
      answer.push("Equilateral");
    } else if (set.size === 2) {
      answer.push("Isosceles");
    } else {
      answer.push("Scalene");
    }
  }
}

for (let i of arr) {
  isCheck(i);
}

console.log(answer.join("\n"));
