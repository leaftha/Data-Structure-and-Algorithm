const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let nums = [...new Set(...input)].sort((a, b) => a - b);

let maping = new Map();
nums.forEach((val, idx) => {
  maping.set(val, idx);
});

let answer = [];

for (let n of input.shift()) {
  answer.push(maping.get(n));
}

console.log(answer.join(" "));
