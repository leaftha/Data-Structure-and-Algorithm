const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.split(" ").map(Number));

let [length, n] = input.shift();

let q = [];
for (let i = 1; i <= length; i++) {
  q.push(i);
}

let count = 0;
let answer = [];

while (q.length) {
  count++;
  let num = q.shift();
  if (count === n) {
    answer.push(num);
    count = 0;
  } else {
    q.push(num);
  }
  console.log(q);
}

console.log(`<${answer.join(", ")}>`);
