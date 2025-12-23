const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n, m] = input.shift();
let arr = input.splice(0, n);
let answer = [];
let set = new Set();

for (let [str] of arr) {
  set.add(str);
}

for (let [str] of input) {
  const strs = str.split(",");

  for (let s of strs) {
    set.delete(s);
  }
  answer.push(set.size);
}

console.log(answer.join("\n"));
