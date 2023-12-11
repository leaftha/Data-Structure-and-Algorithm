function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function dfs(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] == 1) {
          tmp += `${i} `;
        }
      }
      if (tmp.length > 0) {
        answer.push(tmp);
      }
    } else {
      ch[L] = 1;
      dfs(L + 1);
      ch[L] = 0;
      dfs(L + 1);
    }
  }

  dfs(1);

  return answer;
}

console.log(solution(3));
