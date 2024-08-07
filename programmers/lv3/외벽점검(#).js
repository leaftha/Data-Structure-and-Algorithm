function per(arr, n) {
  if (n === 0) return [[]];
  const result = [];

  arr.forEach((fixed, idx) => {
    const rest = [...arr];
    rest.splice(idx, 1);

    const perms = per(rest, n - 1);
    const combin = perms.map((p) => [fixed, ...p]);

    result.push(...combin);
  });

  return result;
}

function solution(n, weak, dist) {
  const length = weak.length;
  for (let i = 0; i < length; i++) {
    weak.push(weak[i] + n);
  }

  let answer = dist.length + 1;

  for (let i = 0; i < length; i++) {
    for (const friends of per(dist, dist.length)) {
      let cnt = 1;
      let postion = weak[i] + friends[cnt - 1];
      for (let j = i; j < i + length; j++) {
        if (postion < weak[j]) {
          cnt += 1;

          if (cnt > dist.length) {
            break;
          }
          postion = weak[j] + friends[cnt - 1];
        }
      }
      answer = Math.min(answer, cnt);
    }
  }

  return answer <= dist.length ? answer : -1;
}
