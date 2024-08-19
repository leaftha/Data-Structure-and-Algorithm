const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim());
}

let heart = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].indexOf("*") != -1) {
    heart.push(i + 2, arr[i].indexOf("*") + 1);
    break;
  }
}
let rightArm = 0;
let leftArm = 0;
let body = 0;
let rightLeg = 0;
let leftLeg = 0;

for (i = 0; i < heart[1] - 1; i++) {
  if (arr[heart[0] - 1][i] === "*") {
    rightArm++;
  }
}

for (let i = heart[1]; i < N; i++) {
  if (arr[heart[0] - 1][i] === "*") {
    leftArm++;
  }
}

for (let i = heart[0]; i < N; i++) {
  if (arr[i][heart[1] - 1] === "*") {
    body++;
  }
}

for (let i = heart[0]; i < N; i++) {
  if (arr[i][heart[1] - 2] === "*") {
    rightLeg++;
  }
}

for (let i = heart[0]; i < N; i++) {
  if (arr[i][heart[1]] === "*") {
    leftLeg++;
  }
}

console.log(heart[0], heart[1]);
console.log(rightArm, leftArm, body, rightLeg, leftLeg);
