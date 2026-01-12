const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k, p, x] = input[0];

const led = [
  "1111110",
  "0110000",
  "1101101",
  "1111001",
  "0110011",
  "1011011",
  "1011111",
  "1110000",
  "1111111",
  "1111011",
];

const diff = Array.from({ length: 10 }, () => Array(10).fill(0));

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let cnt = 0;
    for (let s = 0; s < 7; s++) {
      if (led[i][s] !== led[j][s]) cnt++;
    }
    diff[i][j] = cnt;
  }
}

const xStr = x.toString().padStart(k, "0");
let answer = 0;

for (let floor = 1; floor <= n; floor++) {
  if (floor === x) continue;

  const fStr = floor.toString().padStart(k, "0");
  let cnt = 0;

  for (let i = 0; i < k; i++) {
    cnt += diff[xStr[i]][fStr[i]];
  }

  if (cnt >= 1 && cnt <= p) answer++;
}

console.log(answer);
