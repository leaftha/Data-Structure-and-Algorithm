const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
// .map((line) => line.trim());

let [n] = input.shift();
let area = 0;

for (let i = 0; i < n; i++) {
  const [x1, y1] = input[i];
  const [x2, y2] = input[(i + 1) % n];
  area += x1 * y2 - x2 * y1;
}

console.log(Math.abs(area / 2).toFixed(1));
