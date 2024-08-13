const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n1 = 0;
let n2 = 0;

let monoey1 = Number(input[0]);
let monoey2 = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);

for (let i of arr) {
  n1 += Math.floor(monoey1 / i);
  monoey1 -= Math.floor(monoey1 / i) * i;
}

let downCnt = 0;
let upCnt = 0;

let prev = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < prev) {
    upCnt++;
    downCnt = 0;
    if (upCnt === 3) {
      n2 += Math.floor(monoey2 / arr[i]);
      monoey2 -= Math.floor(monoey2 / arr[i]) * arr[i];
      upCnt = 0;
    }
  } else if (arr[i] > prev) {
    downCnt++;
    upCnt = 0;
    if (downCnt === 3) {
      monoey2 += n2 * arr[i];
      n2 = 0;
      downCnt = 0;
    }
  }
  prev = arr[i];
}

if (n1 * arr.at(-1) + monoey1 > n2 * arr.at(-1) + monoey2) {
  console.log("BNP");
} else if (n1 * arr.at(-1) + monoey1 < n2 * arr.at(-1) + monoey2) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
