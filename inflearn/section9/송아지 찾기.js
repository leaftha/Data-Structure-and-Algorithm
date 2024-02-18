function solution(s, e) {
  let answer = 0;
  let q = [s];
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  ch[s] = 1;
  dis[s] = 0;
  while (q.length) {
    let out = q.shift();
    for (let v of [out + 1, out + 5, out - 1]) {
      if (v === e) {
        return dis[out] + 1;
      }
      if (v > 0 && v <= 10000 && ch[v] === 0) {
        ch[v] = 1;
        q.push(v);
        dis[v] = dis[out] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
