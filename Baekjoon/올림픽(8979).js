const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];

let [n, m] = input[0].trim().split(" ").map(Number);

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
let count = 1;

arr.sort((a, b) => {
  if (a[1] != b[1]) {
    return b[1] - a[1];
  } else if (a[2] != b[2]) {
    return b[2] - a[2];
  } else {
    return b[3] - a[3];
  }
});

arr[0][4] = 1;

for (let i = 1; i < arr.length; i++) {
  if (
    arr[i][1] === arr[i - 1][1] &&
    arr[i][2] === arr[i - 1][2] &&
    arr[i][3] === arr[i - 1][3]
  ) {
    arr[i].push(arr[i - 1][4]);
    count++;
  } else {
    count++;
    arr[i].push(count);
  }
}

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === m) {
    answer = arr[i][4];
    break;
  }
}

console.log(answer);
