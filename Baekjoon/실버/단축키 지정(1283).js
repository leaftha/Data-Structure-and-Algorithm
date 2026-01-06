const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n] = input.shift();
let answer = [];

let set = new Set();
for (let strs of input) {
  let idx = -1;
  let pos = 0;
  for (let str of strs) {
    if (!set.has(str[0].toLowerCase())) {
      set.add(str[0].toLowerCase());
      idx = 0;
      break;
    }
    pos += 1;
  }

  if (idx === -1) {
    pos = 0;
    for (let str of strs) {
      let isHave = false;
      for (let i = 1; i < str.length; i++) {
        if (!set.has(str[i].toLowerCase())) {
          set.add(str[i].toLowerCase());
          idx = i;
          isHave = true;
          break;
        }
      }
      if (isHave) break;
      pos += 1;
    }
  }

  let ans = ``;
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (i === pos && j === idx) {
        ans += `[${strs[i][j]}]`;
      } else {
        ans += strs[i][j];
      }
    }
    if (i !== strs.length - 1) {
      ans += " ";
    }
  }
  answer.push(ans);
}

console.log(answer.join("\n"));
