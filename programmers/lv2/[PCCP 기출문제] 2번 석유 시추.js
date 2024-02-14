function solution(land) {
  var answer = 0;
  let lands = Array.from(Array(land.length), () =>
    Array(land[0].length).fill(0)
  );
  let vis = Array.from(Array(land.length), () => Array(land[0].length).fill(0));
  let dxy = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let q = [];
  let s = 0;
  let list = {};

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 0 || vis[i][j] === 1) continue;
      s++;
      q.push([i, j]);
      vis[i][j] = 1;
      let count = 0;
      let arr = [];
      while (q.length) {
        let [y, x] = q.shift();
        arr.push([y, x]);
        count++;
        for (let [dy, dx] of dxy) {
          let ey = y + dy;
          let ex = x + dx;
          if (
            ey >= 0 &&
            ey < land.length &&
            ex >= 0 &&
            ex < land[0].length &&
            land[ey][ex] === 1 &&
            vis[ey][ex] === 0
          ) {
            q.push([ey, ex]);
            vis[ey][ex] = 1;
          }
        }
      }

      arr.map((item) => {
        lands[item[0]][item[1]] = s;
      });
      list[s] = count;
    }
  }

  for (let i = 0; i < lands[0].length; i++) {
    let isFalse = true;
    let sum = 0;
    let vis2 = [];

    for (let j = 0; j < lands.length; j++) {
      if (lands[j][i] != 0 && vis2.indexOf(lands[j][i]) === -1) {
        sum += list[lands[j][i]];
        vis2.push(lands[j][i]);
      }
    }
    answer = Math.max(answer, sum);
  }
  return answer;
}
