const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let idx = 0;

for (let _ = 0; _ < n; _++) {
  let [N, M, K, C] = input[idx];
  const team = Array.from({ length: N + 1 }, () => ({
    scores: Array(M + 1).fill(0),
    total: 0,
    submit: 0,
    lastTime: 0,
  }));
  for (let i = idx + 1; i < idx + 1 + C; i++) {
    let [tn, tm, tk] = input[i];
    team[tn].lastTime = i;
    team[tn].submit++;

    if (team[tn].scores[tm] < tk) {
      team[tn].total += tk - team[tn].scores[tm];
      team[tn].scores[tm] = tk;
    }
  }

  const sorted = team.slice(1).sort((a, b) => {
    if (b.total !== a.total) {
      return b.total - a.total;
    }
    if (a.submit !== b.submit) return a.submit - b.submit;
    return a.lastTime - b.lastTime;
  });

  for (let i = 0; i < sorted.length; i++) {
    if (team[K] === sorted[i]) {
      console.log(i + 1);
      break;
    }
  }
  idx += C + 1;
}
