function solution(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);

  for (const [from, to] of edges) {
    tree[from].push(to);
  }
  let maxSheep = 0;
  let q = [];

  q.push([0, 1, 0, new Set()]);

  while (q.length) {
    const [current, sheepCount, wolfCount, visted] = q.shift();

    maxSheep = Math.max(maxSheep, sheepCount);

    for (const next of tree[current]) {
      visted.add(next);
    }

    for (const next of visted) {
      if (info[next]) {
        if (sheepCount !== wolfCount + 1) {
          const newVisted = new Set(visted);
          newVisted.delete(next);
          q.push([next, sheepCount, wolfCount + 1, newVisted]);
        }
      } else {
        const newVisted = new Set(visted);
        newVisted.delete(next);
        q.push([next, sheepCount + 1, wolfCount, newVisted]);
      }
    }
  }

  return maxSheep;
}
