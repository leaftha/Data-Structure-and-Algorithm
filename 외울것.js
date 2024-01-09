// 순열

let arr = [];

function permu(p, dun) {
  if (dun.length === 0) {
    return arr.push(p);
  }

  for (let i = 0; i < dun.length; i++) {
    const newArr = [...dun.slice(0, i), ...dun.slice(i + 1)];
    permu([...p, dun[i]], newArr);
  }
}

permu([], [0, 1, 2]);
console.log(arr);

// ----------------------------------------------------------------------

// 조합
Combination;
function Combination(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));

// ----------------------------------------------------------------------

// dfs

function dfs(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
