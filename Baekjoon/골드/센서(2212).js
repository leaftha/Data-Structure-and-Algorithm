const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let [N] = input[0];
let [K] = input[1];
let arr = input[2];

arr.sort((a, b) => a - b);

let distance = [];

for (let i = 1; i < arr.length; i++) {
  distance.push(arr[i] - arr[i - 1]);
}

distance.sort((a, b) => b - a);

for (let i = 0; i < K - 1; i++) {
  distance.shift();
}
let answer = 0;

for (let n of distance) {
  answer += n;
}

console.log(answer);
