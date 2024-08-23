const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.split(" ").map(Number));

let length = Number(input.shift().join(""));
let arr = input.join(" ").split(" ").map(Number);

arr.sort((a, b) => b - a);

let obj = {};
let count = 0;
for (let i of arr) {
  count += i;
  if (obj[i]) {
    obj[i] += 1;
  } else {
    obj[i] = 1;
  }
}

let max = 0;
for (let key in obj) {
  if (max < obj[key]) {
    max = obj[key];
  }
}

let maxArr = [];

for (let key in obj) {
  if (obj[key] === max) {
    maxArr.push(key);
  }
}
maxArr.sort((a, b) => a - b);
console.log(Math.round(count / length) === -0 ? 0 : Math.round(count / length));
console.log(arr[(length - 1) / 2]);
console.log(maxArr.length > 1 ? maxArr[1] : maxArr[0]);
console.log(Math.max(...arr) - Math.min(...arr));
