const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N] = input.shift();

let arr = [];
for (i = 0; i < input[1].length; i++) {
  for (let j = 0; j < input[1][i]; j++) {
    if (i === 0) {
      arr.push("+");
    } else if (i === 1) {
      arr.push("-");
    } else if (i === 2) {
      arr.push("*");
    } else {
      arr.push("/");
    }
  }
}

const vitsted = Array(arr.length).fill(false);

const check = (arr) => {
  let result = input[0][0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      result += input[0][i + 1];
    } else if (arr[i] === "-") {
      result -= input[0][i + 1];
    } else if (arr[i] === "*") {
      result *= input[0][i + 1];
    } else {
      if (result > 0) {
        result = Math.floor(result / input[0][i + 1]);
      } else {
        result = Math.floor(Math.abs(result) / input[0][i + 1]) * -1;
      }
    }
  }
  return result;
};

let max = -Infinity;
let min = Infinity;
const dfs = (array) => {
  if (array.length === input[0].length - 1) {
    let result = check(array);
    if (result === +0 || result === -0) {
      result = 0;
    }
    max = Math.max(result, max);
    min = Math.min(result, min);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!vitsted[i]) {
      vitsted[i] = true;
      dfs([...array, arr[i]]);
      vitsted[i] = false;
    }
  }
};

dfs([], 0);

console.log(max);
console.log(min);
