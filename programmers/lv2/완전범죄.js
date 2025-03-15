function solution(info, n, m) {
  let answer = Infinity;

  let dp = Array.from({ length: info.length + 1 }, () =>
    Array.from({ length: n }, () => Array(m).fill(-1))
  );

  const dfs = (idx, a, b, aPoint) => {
    if (a >= n || b >= m) return Infinity;

    if (idx === info.length) return b < m ? aPoint : Infinity;

    if (dp[idx][a][b] !== -1) return dp[idx][a][b];

    let [ai, bi] = info[idx];
    let aTrack = dfs(idx + 1, a + ai, b, aPoint + ai);
    let bTrack = dfs(idx + 1, a, b + bi, aPoint);

    return (dp[idx][a][b] = Math.min(aTrack, bTrack));
  };

  answer = dfs(0, 0, 0, 0);

  return answer === Infinity ? -1 : answer;
}
