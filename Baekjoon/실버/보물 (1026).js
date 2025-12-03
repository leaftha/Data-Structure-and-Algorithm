const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let A = input[1].trim().split(" ").map(Number);
let B = input[2].trim().split(" ").map(Number);

A.sort((a, b) => a - b);
const sortedB = [...B].sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += A[i] * sortedB[i];
}

console.log(answer);
