const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim());

for (let i = 1; i < input.length; i++) {
  let stack = [];

  for (let s of input[i]) {
    stack.push(s);
    if (s === ")" && stack.indexOf("(") != -1) {
      stack.pop();
      stack.pop();
    }
  }
  console.log(stack.length > 0 ? "NO" : "YES");
}
