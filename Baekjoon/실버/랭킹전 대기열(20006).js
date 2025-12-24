const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n, m] = input.shift();

const rooms = [];
for (let [level, name] of input) {
  if (rooms.length === 0) {
    rooms.push([[Number(level), name]]);
    continue;
  }
  let isFalse = true;
  for (let room of rooms) {
    if (
      room[0][0] + 10 >= Number(level) &&
      room[0][0] - 10 <= Number(level) &&
      room.length < Number(m)
    ) {
      room.push([Number(level), name]);
      isFalse = false;
      break;
    }
  }

  if (isFalse) {
    rooms.push([[Number(level), name]]);
  }
}

let answer = [];

for (const room of rooms) {
  if (room.length === Number(m)) answer.push("Started!");
  else answer.push("Waiting!");

  room.sort((a, b) => a[1].localeCompare(b[1]));

  for (const [level, name] of room) {
    answer.push(`${level} ${name}`);
  }
}

console.log(answer.join("\n"));
