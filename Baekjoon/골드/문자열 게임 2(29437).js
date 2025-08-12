const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

const [T] = input.shift();

for (let _ = 0; _ < T; _++) {
  let [str] = input.shift();
  let [k] = input.shift();
  k = Number(k);

  let pos = Array.from({ length: 26 }, () => []);

  for (let i = 0; i < str.length; i++) {
    pos[str.charCodeAt(i) - 97].push(i);
  }

  let min = Infinity;
  let max = 0;

  for (let p of pos) {
    if (p.length < k) continue;

    for (let i = 0; i <= p.length - k; i++) {
      let start = p[i];
      let end = p[i + k - 1];
      let len = end - start + 1;
      console.log(p);
      min = Math.min(min, len);
      max = Math.max(max, len);
    }
  }

  if (min === Infinity) {
    console.log(-1);
  } else {
    console.log(min, max);
  }
}
