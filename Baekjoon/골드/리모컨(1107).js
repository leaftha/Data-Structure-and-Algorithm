const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n] = input.shift();
let [m] = input.shift();

let min = Math.abs(n - 100);

for (let i = 0; i < 999999; i++) {
  let num = i.toString();
  let isfalse = true;
  if (m !== 0) {
    for (let c of num) {
      if (input[0].indexOf(Number(c)) !== -1) {
        isfalse = false;
        break;
      }
    }
  }
  if (isfalse) {
    min = Math.min(min, Math.abs(i - n) + num.length);
  }
}

console.log(min);
