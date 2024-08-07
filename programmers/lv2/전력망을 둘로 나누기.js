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

// -----------------------------------------------------------

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) {
      if (child !== parent) {
        cnt += dfs(child, node);
      }
    }
    return cnt;
  }

  let min = Infinity;

  for (const [a, b] of wires) {
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    const cntA = dfs(a, b);
    const cntB = n - cntA;

    min = Math.min(min, Math.abs(cntA - cntB));

    graph[a].push(b);
    graph[b].push(a);
  }
  return min;
}
