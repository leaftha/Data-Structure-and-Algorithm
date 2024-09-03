const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" "));

let n = String(input.shift());
let count = [];
let nums = n.split("-");

for (let i of nums) {
  let arr = i.split("+");
  let n = 0;
  for (let j of arr) {
    n += Number(j);
  }
  count.push(n);
}
let answer = count.reduce((prev, cur) => prev - cur);

console.log(answer);
