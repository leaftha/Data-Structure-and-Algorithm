const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
let answer = [];
let idx = 0;

for (let i = 0; i < n; i++) {
  let [m] = input[i + idx];
  let arr = input[i + idx + 1];
  let price = 0;
  let max = -1;
  for (let j = arr.length - 1; j >= 0; j--) {
    if (max < arr[j]) {
      max = arr[j];
    } else {
      price += max - arr[j];
    }
  }

  answer.push(price);
  idx += 1;
}

console.log(answer.join("\n"));
