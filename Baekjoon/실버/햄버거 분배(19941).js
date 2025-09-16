const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n, m] = input.shift();

let [list] = input.shift();
let answer = 0;
let used = new Array(n).fill(false);

for (let i = 0; i < list.length; i++) {
  if (list[i] === "P") {
    const left = Math.max(0, i - Number(m));
    const right = Math.min(Number(n) - 1, i + Number(m));
    for (let j = left; j <= right; j++) {
      if (list[j] === "H" && !used[j]) {
        used[j] = true;
        answer++;
        break;
      }
    }
  }
}

console.log(answer);
