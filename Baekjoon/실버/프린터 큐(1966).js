const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

for (let i = 1; i < input.length; i += 2) {
  let obj = [];

  let n = input[i][1];
  let arr = [...input[i + 1]];
  for (let j = 0; j < arr.length; j++) {
    obj.push([arr[j], j]);
  }
  let count = 0;
  while (arr.length) {
    let front = arr[0];
    if (Math.max(...arr) === front) {
      count++;
      if (obj[0][1] === n) {
        console.log(count);
        break;
      }
      arr.shift();
      obj.shift();
    } else {
      let a = arr.shift();
      let b = obj.shift();

      arr.push(a);
      obj.push(b);
    }
  }
}
