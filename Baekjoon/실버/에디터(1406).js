const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [strs] = input.shift();
strs = strs.split("");
let [m] = input.shift();
let right = [];

for (let i = 0; i < input.length; i++) {
  let [cmd, s] = input[i];

  if (cmd === "L") {
    if (strs.length) {
      let str = strs.pop();
      right.push(str);
    }
  } else if (cmd === "D") {
    if (right.length) {
      let str = right.pop();
      strs.push(str);
    }
  } else if (cmd === "B") {
    if (strs.length) {
      strs.pop();
    }
  } else if (cmd === "P") {
    strs.push(s);
  }
}

console.log(strs.join("") + right.reverse().join(""));
