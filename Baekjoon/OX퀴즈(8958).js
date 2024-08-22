const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// .map((el) => el.split(" "));

for (let i = 1; i < input.length; i++) {
  let num = 0;
  let count = 1;
  // let string = input[i].split(" ");
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      num += count;
      count++;
    } else {
      count = 1;
    }
  }
  console.log(num);
}
