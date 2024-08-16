const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
// .split("\n");

let obj = {};

for (let i = 0; i < input.length; i++) {
  let s = input[i].toUpperCase();
  if (obj[s]) {
    obj[s] += 1;
  } else {
    obj[s] = 1;
  }
}
let max = -1;

for (let key in obj) {
  max = Math.max(max, obj[key]);
}

let answer = [];

for (let key in obj) {
  if (max === obj[key]) {
    answer.push(key);
  }
}
console.log(answer.length > 1 ? "?" : answer[0]);
