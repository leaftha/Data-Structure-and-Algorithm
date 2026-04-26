function solution(cards) {
  var answer = 0;
  let g = [];
  const vistied = Array(cards.length).fill(false);
  const dfs = (idx, arr) => {
    if (vistied[idx]) {
      g.push(arr);
      return;
    }
    vistied[idx] = true;
    dfs(cards[idx] - 1, [...arr, idx]);
  };

  for (let i = 0; i < cards.length; i++) {
    if (vistied[i]) continue;
    dfs(i, []);
  }

  g.sort((a, b) => b.length - a.length);

  if (g.length < 2) return 0;

  answer = g[0].length * g[1].length;
  return answer;
}
