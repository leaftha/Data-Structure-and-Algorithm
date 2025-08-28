function solution(sales, links) {
  var answer = 0;
  const n = sales.length;
  let tree = Array.from({ length: sales.length + 1 }, () => []);
  for (let [a, b] of links) {
    tree[a].push(b);
  }

  const order = [];
  const stack = [1];

  while (stack.length) {
    const u = stack.pop();
    order.push(u);

    for (let v of tree[u]) {
      stack.push(v);
    }
  }

  const dp0 = Array(n + 1).fill(0);
  const dp1 = Array(n + 1).fill(0);
  for (let i = order.length - 1; i >= 0; i--) {
    const u = order[i];

    if (tree[u].length === 0) {
      dp1[u] = sales[u - 1];
      dp0[u] = 0;
      continue;
    }

    let sumMin = 0;
    let need = Infinity;
    for (const v of tree[u]) {
      const m = Math.min(dp0[v], dp1[v]);
      sumMin += m;
      const extra = dp1[v] - m;
      if (extra < need) need = extra;
    }

    dp1[u] = sales[u - 1] + sumMin;
    dp0[u] = sumMin + Math.max(need, 0);
  }

  answer = Math.min(dp0[1], dp1[1]);
  return answer;
}
