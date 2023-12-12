function solution(n, m) {
  let answer = [];
  let tmp = Array(m).fill(0);

  function dfs(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        dfs(L + 1);
      }
    }
  }

  dfs(0);

  return answer;
}

console.log(solution(3, 2));
