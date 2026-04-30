function solution(m, n, h, w, drops) {
  const time = Array.from({ length: m }, () => Array(n).fill(Infinity));

  for (let i = 0; i < drops.length; i++) {
    let [y, x] = drops[i];

    time[y][x] = i + 1;
  }
  const rowMin = Array.from({ length: m }, () => Array(n).fill(0));
  for (let r = 0; r < m; r++) {
    const dq = [];

    for (let c = 0; c < n; c++) {
      while (dq.length && time[r][dq[dq.length - 1]] >= time[r][c]) {
        dq.pop();
      }
      dq.push(c);

      if (dq[0] <= c - w) dq.shift();

      if (c >= w - 1) {
        rowMin[r][c - w + 1] = time[r][dq[0]];
      }
    }
  }

  let best = -1;
  let answer = [0, 0];

  for (let c = 0; c <= n - w; c++) {
    const dq = [];

    for (let r = 0; r < m; r++) {
      while (dq.length && rowMin[dq[dq.length - 1]][c] >= rowMin[r][c]) {
        dq.pop();
      }
      dq.push(r);

      if (dq[0] <= r - h) dq.shift();

      if (r >= h - 1) {
        const val = rowMin[dq[0]][c];

        const sr = r - h + 1;
        const sc = c;

        if (
          val > best ||
          (val === best &&
            (sr < answer[0] || (sr === answer[0] && sc < answer[1])))
        ) {
          best = val;
          answer = [sr, sc];
        }
      }
    }
  }

  return answer;
}
