const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" "));

const n = input.shift();

let q = [];
for (let i of input) {
  if (i[0] === "push") {
    q.push(Number(i[1]));
  } else if (i[0] === "pop") {
    console.log(q.length === 0 ? -1 : q.shift());
  } else if (i[0] === "size") {
    console.log(q.length);
  } else if (i[0] === "empty") {
    console.log(q.length === 0 ? 1 : 0);
  } else if (i[0] === "front") {
    console.log(q.length === 0 ? -1 : q[0]);
  } else if (i[0] === "back") {
    console.log(q.length === 0 ? -1 : q[q.length - 1]);
  }
}
