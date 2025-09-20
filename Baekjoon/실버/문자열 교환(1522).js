const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [str] = input.shift();

let k = [...str].filter((c) => c === "a").length;
let strs = str + str;

let count = 0;
for (let i = 0; i < k; i++) {
  if (strs[i] === "b") {
    count++;
  }
}
let answer = count;
for (let i = 1; i < str.length; i++) {
  if (strs[i - 1] === "b") {
    count -= 1;
  }
  if (strs[i + k - 1] === "b") {
    count++;
  }

  if (count < answer) {
    answer = count;
  }
}

if (k <= 1) {
  console.log(0);
} else {
  console.log(answer);
}
