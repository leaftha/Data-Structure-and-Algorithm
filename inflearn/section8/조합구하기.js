function solution(n, m) {
  let answer = [];
  let arr = Array.from({ length: m }, () => 0);
  function dfs(L, j) {
    if (L === m) {
      answer.push(arr.slice());
    } else {
      for (let i = j; i <= n; i++) {
        arr[L] = i;
        dfs(L + 1, j + 1);
      }
    }
  }

  dfs(0, 1);

  return answer;
}

console.log(solution(4, 2));
