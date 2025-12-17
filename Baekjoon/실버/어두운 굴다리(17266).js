const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let [m] = input.shift();
let x = input.shift();
let answer = n;

function check(H) {
  if (x[0] - H > 0) return false;
  for (let i = 0; i < m - 1; i++) {
    if (x[i + 1] - x[i] > 2 * H) return false;
  }
  if (x[m - 1] + H < n) return false;
  return true;
}
let h = 0;
let h2 = n;
while (h <= h2) {
  let mid = Math.floor((h + h2) / 2);
  if (check(mid)) {
    answer = mid;
    h2 = mid - 1;
  } else {
    h = mid + 1;
  }
}

console.log(answer);
