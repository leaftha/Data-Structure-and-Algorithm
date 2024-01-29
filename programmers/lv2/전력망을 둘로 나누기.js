function solution(n, wires) {
  var answer = 1000000;
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = [];
  }
  for (let i of wires) {
    obj[i[0]].push(i[1]);
    obj[i[1]].push(i[0]);
  }
  let visted;

  function dfs(L, count, j) {
    if (count === n) {
      return count;
    } else {
      visted[L] = 1;
      for (let i of obj[L]) {
        if (visted[i] != 1 && j != i) {
          dfs(i, count + 1, j);
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    visted = Array(n + 1).fill(0);
    dfs(1, 1, i);
    let prev = 0;
    let next = 0;
    for (let i = 1; i < visted.length; i++) {
      if (visted[i] === 0) {
        prev++;
      } else {
        next++;
      }
    }
    answer = Math.min(answer, Math.abs(prev - next));
  }

  return answer;
}
