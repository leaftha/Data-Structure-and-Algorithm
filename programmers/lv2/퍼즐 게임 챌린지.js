function solution(diffs, times, limit) {
  const n = diffs.length;

  function canSolveAll(level) {
    let totalTime = 0;

    for (let i = 0; i < n; i++) {
      const diff = diffs[i];
      const time_cur = times[i];
      const time_prev = i > 0 ? times[i - 1] : 0;

      if (diff <= level) {
        totalTime += time_cur;
      } else {
        const fail = diff - level;
        totalTime += fail * (time_cur + time_prev) + time_cur;
      }

      if (totalTime > limit) return false;
    }

    return totalTime <= limit;
  }

  let left = 1;
  let right = 0;
  diffs.forEach((item) => {
    if (right < item) right = item;
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canSolveAll(mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
