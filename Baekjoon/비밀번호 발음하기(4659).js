const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let case1 = ["a", "e", "i", "o", "u"];

function check(s) {
  let isFalse = false;

  let string = s.split("");
  string.pop();

  for (let i of case1) {
    if (s.indexOf(i) != -1) {
      isFalse = true;
      break;
    }
  }
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (case1.indexOf(s[i]) != -1) {
      count1++;
      count2 = 0;
    } else {
      count2++;
      count1 = 0;
    }

    if (count1 === 3 || count2 === 3) {
      isFalse = false;
      break;
    }
  }

  let count = 1;
  let prev = s[0];
  for (let i = 1; i < s.length; i++) {
    if (prev === s[i] && prev != "e" && prev != "o") {
      count++;
    } else {
      prev = s[i];
      count = 1;
    }
    if (count === 2) {
      isFalse = false;
      break;
    }
  }

  return isFalse;
}

for (let i = 0; i < input.length - 1; i++) {
  let checking = check(input[i]);
  console.log(`<${input[i].trim()}> is${checking ? "" : " not"} acceptable.`);
}
