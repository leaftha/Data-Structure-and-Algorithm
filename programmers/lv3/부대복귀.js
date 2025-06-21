function solution(n, roads, sources, destination) {
  var answer = [];
  let obj = {};

  for (let i = 1; i <= n; i++) {
    obj[i] = [];
  }

  for (let [a, b] of roads) {
    obj[a].push(b);
    obj[b].push(a);
  }

  let distance = Array(n + 1).fill(-1);
  distance[destination] = 0;
  let q = [destination];
  while (q.length) {
    let cur = q.shift();
    for (let next of obj[cur]) {
      if (distance[next] === -1) {
        distance[next] = distance[cur] + 1;
        q.push(next);
      }
    }
  }

  for (let n of sources) {
    answer.push(distance[n]);
  }
  return answer;
}
