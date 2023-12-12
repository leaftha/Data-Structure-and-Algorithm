function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(L, sumT, sumS) {
    if (sumT > m) return;
    if (L === ps.length) {
      if (answer < sumS) {
        answer = sumS;
      }
    } else {
      dfs(L + 1, sumT + pt[L], sumS + ps[L]);
      dfs(L + 1, sumT, sumS);
    }
  }

  dfs(0, 0, 0);
  return answer;
}

// 풀이

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
