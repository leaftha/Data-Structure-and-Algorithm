function solution(n, path, order) {
  var answer = true;

  const tree = Array.from({ length: n }, () => []);
  const before = Array(n).fill(-1);

  const wait = new Map();

  const visited = Array(n).fill(false);

  for (let [a, b] of path) {
    tree[b].push(a);
    tree[a].push(b);
  }

  for (let [a, b] of order) {
    before[b] = a;
  }

  let q = [0];
  visited[0] = true;

  while (q.length) {
    const cur = q.shift();

    for (let next of tree[cur]) {
      if (visited[next]) continue;

      if (before[next] !== -1 && !visited[before[next]]) {
        wait.set(before[next], next);
        continue;
      }

      visited[next] = true;
      q.push(next);

      if (wait.has(next)) {
        const unlocked = wait.get(next);
        wait.delete(next);
        visited[unlocked] = true;
        q.push(unlocked);
      }
    }
  }
  return visited.every((v) => v);
}
