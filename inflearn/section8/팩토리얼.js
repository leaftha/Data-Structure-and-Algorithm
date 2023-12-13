function solution(n) {
  let answer;

  function dfs(n) {
    if (n === 1) {
      return n;
    } else {
      return n * dfs(n - 1);
    }
  }

  answer = dfs(n);

  return answer;
}

// 풀이

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
