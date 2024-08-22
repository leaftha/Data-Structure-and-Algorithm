const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// .map(Number);
// .map((el) => el.split(" ").map(Number));

// console.log(input);
for (let i = 1; i < input.length; i++) {
  let s = [];
  let [n, word] = input[i].trim().split(" ");
  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < n; k++) {
      s.push(word[j]);
    }
  }
  console.log(s.join(""));
}
