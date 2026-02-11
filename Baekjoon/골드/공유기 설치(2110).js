const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
let [n, m] = input.shift();
const house = [];

for (let [i] of input) {
  house.push(i);
}
house.sort((a, b) => a - b);
let answer = 0;
let left = 1;
let right = house[house.length - 1] - house[0];
while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let count = 1;
  let last = house[0];

  for (let i = 1; i < house.length; i++) {
    if (house[i] - last >= mid) {
      count++;
      last = house[i];
    }
  }

  if (count >= m) {
    left = mid + 1;
    answer = Math.max(answer, mid);
  } else {
    right = mid - 1;
  }
}

console.log(answer);
