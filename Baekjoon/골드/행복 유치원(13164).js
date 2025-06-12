const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let arr = input.shift();

let distance = [];

for (let i = 1; i < arr.length; i++) {
  distance.push(arr[i] - arr[i - 1]);
}

distance.sort((a, b) => b - a);

let answer = 0;

for (let i = m - 1; i < distance.length; i++) {
  answer += distance[i];
}

console.log(answer);
