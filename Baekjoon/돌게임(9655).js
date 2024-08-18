const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  // .split(" ");
  .split("\n");

if (input[0] % 2 === 1) {
  console.log("SK");
} else {
  console.log("CY");
}
