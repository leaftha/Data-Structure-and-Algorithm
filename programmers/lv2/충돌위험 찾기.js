function solution(points, routes) {
  var answer = 0;
  const robotPaths = [];
  for (let route of routes) {
    let path = [];
    let [r, c] = points[route[0] - 1];
    path.push([r, c]);

    for (let i = 1; i < route.length; i++) {
      let [tr, tc] = points[route[i] - 1];

      while (r !== tr) {
        r += tr > r ? 1 : -1;
        path.push([r, c]);
      }

      while (c !== tc) {
        c += tc > c ? 1 : -1;
        path.push([r, c]);
      }
    }

    robotPaths.push(path);
  }
  let maxTime = 0;

  for (let arr of robotPaths) {
    if (maxTime < arr.length) maxTime = arr.length;
  }

  for (let time = 0; time < maxTime; time++) {
    const map = new Map();

    for (let path of robotPaths) {
      if (time >= path.length) continue;

      const [r, c] = path[time];
      const key = `${r},${c}`;

      map.set(key, (map.get(key) || 0) + 1);
    }

    for (let count of map.values()) {
      if (count >= 2) answer++;
    }
  }

  return answer;
}
