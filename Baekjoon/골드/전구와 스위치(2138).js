const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split("").map(Number));
let n = Number(input[0][0]);
let a1 = input[1];
let a2 = [...a1];
let total = input[2];
const btn = (str, idx) => {
  const n = str.length;
  for (let i = idx - 1; i <= idx + 1; i++) {
    if (i >= 0 && i < n) {
      str[i] = str[i] === 0 ? 1 : 0;
    }
  }
};
let cnt1 = 1;
btn(a1, 0);
for (let i = 1; i < a1.length; i++) {
  if (a1[i - 1] !== total[i - 1]) {
    btn(a1, i);
    cnt1++;
  }
}
let cnt2 = 0;
for (let i = 1; i < a2.length; i++) {
  if (a2[i - 1] !== total[i - 1]) {
    btn(a2, i);
    cnt2++;
  }
}

const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== total[i]) {
      return false;
    }
  }
  return true;
};
if (check(a1) && check(a2)) {
  console.log(Math.min(cnt1, cnt2));
} else if (check(a1)) {
  console.log(cnt1);
} else if (check(a2)) {
  console.log(cnt2);
} else {
  console.log(-1);
}
