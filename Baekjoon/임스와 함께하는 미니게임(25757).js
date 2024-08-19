const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let player = new Set();

for (let i = 1; i < input.length; i++) {
  player.add(input[i].trim());
}

let [n, g] = input[0].trim().split(" ");

if (g === "Y") {
  console.log(player.size);
} else if (g === "F") {
  console.log(Math.floor(player.size / 2));
} else {
  console.log(Math.floor(player.size / 3));
}
