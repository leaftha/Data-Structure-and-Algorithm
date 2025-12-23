const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n] = input.shift();

let remove1 = 0;
let remove0 = 0;

for (let s of n) {
  if (s === "1") {
    remove1++;
  } else {
    remove0++;
  }
}

remove0 /= 2;
remove1 /= 2;

let answer1 = [];
let answer2 = [];

for (let i = 0; i < n.length; i++) {
  if (remove1 > 0 && n[i] === "1") {
    remove1--;
  } else {
    answer1.push(n[i]);
  }
}

for (let i = answer1.length - 1; i >= 0; i--) {
  if (remove0 > 0 && answer1[i] === "0") {
    remove0--;
  } else {
    answer2.push(answer1[i]);
  }
}

answer2.reverse();
console.log(answer2.join(""));
