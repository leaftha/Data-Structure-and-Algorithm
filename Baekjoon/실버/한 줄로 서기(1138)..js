const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let arr = input.shift();

const answer = [];
for (let h = n; h >= 1; h--) {
  const pos = arr[h - 1];
  answer.splice(pos, 0, h);
}

console.log(answer.join(" "));
