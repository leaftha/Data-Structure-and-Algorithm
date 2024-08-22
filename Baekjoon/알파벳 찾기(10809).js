const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// .map((el) => el.split(" "));

let answer = [];

for (let i = 97; i < 123; i++) {
  answer.push(input[0].indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));
