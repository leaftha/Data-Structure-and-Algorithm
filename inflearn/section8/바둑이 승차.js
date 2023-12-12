function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let check = Array(arr).fill(0);

  function dfs(L, sum) {
    if (L === arr.length) {
      if (sum < c) {
        if (answer < sum) {
          answer = sum;
        }
      }
    } else {
      dfs(L + 1, sum + arr[L]);
      dfs(L + 1, sum);
    }
  }

  dfs(0, 0);

  return answer;
}

// 풀이

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
