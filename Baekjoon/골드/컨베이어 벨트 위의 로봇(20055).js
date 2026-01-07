const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, k] = input.shift();
const belt = input.shift();
const robot = Array(2 * n).fill(false);

let answer = 0;
while (1) {
  answer++;
  belt.unshift(belt.pop());
  robot.unshift(robot.pop());
  robot[n - 1] = false;
  for (let i = n - 2; i >= 0; i--) {
    if (robot[i] && !robot[i + 1] && belt[i + 1] > 0) {
      robot[i] = false;
      robot[i + 1] = true;
      belt[i + 1]--;

      if (i + 1 === n - 1) robot[i + 1] = false;
    }
  }

  if (belt[0] > 0) {
    robot[0] = true;
    belt[0]--;
  }

  let cnt = 0;
  for (let i = 0; i < 2 * n; i++) {
    if (belt[i] === 0) cnt++;
  }

  if (cnt >= k) {
    break;
  }
}

console.log(answer);
