const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m, count] = input.shift();
let ground = [];
let min = Infinity;
let maxhight = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    ground.push(input[i][j]);
  }
}

for (let h = 0; h <= 256; h++) {
  let add = 0;
  let remove = 0;

  for (let block of ground) {
    if (block > h) {
      remove += block - h;
    } else if (block < h) {
      add += h - block;
    }
  }

  if (remove + count >= add) {
    let time = remove * 2 + add;
    if (time < min || (time === min && h > maxhight)) {
      min = time;
      maxhight = h;
    }
  }
}

console.log(min, maxhight);
