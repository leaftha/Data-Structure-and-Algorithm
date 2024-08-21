const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 1; i < input.length; i += 2) {
  let team = {};
  let count = {};
  let N = input[i + 1];
  for (let j = 0; j < N.length; j++) {
    if (team[N[j]]) {
      team[N[j]] += 1;
    } else {
      team[N[j]] = 1;
      count[N[j]] = [];
    }
  }

  let price = 1;
  for (let j = 0; j < N.length; j++) {
    if (team[N[j]] === 6) {
      let prev = [0];
      if (count[N[j]].length != 0) {
        prev = Number(count[N[j]].at(-1));
      }
      count[N[j]].push(Number(prev + price));
      price++;
    }
  }
  let cnt = 3;
  while (Object.keys(count).length != 1) {
    let min = Infinity;
    for (let key in count) {
      if (count[key].length === 0) {
        delete count[key];
        continue;
      }
      let arr = count[key];
      min = Math.min(min, arr[cnt]);
    }

    for (let key in count) {
      if (count[key][cnt] > min) {
        count[key] = [];
      }
    }

    cnt++;
  }
  console.log(Object.keys(count).join(""));
}
