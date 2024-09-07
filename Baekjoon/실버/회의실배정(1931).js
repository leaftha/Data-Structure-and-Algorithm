const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();
// let arr = input.shift();

let answer = 0;

input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let last = input[0][1];
answer += 1;
for (let i = 1; i < input.length; i++) {
  if (input[i][0] >= last) {
    answer += 1;
    last = input[i][1];
  }
}

console.log(answer);
