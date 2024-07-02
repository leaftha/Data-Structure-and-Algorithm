function solution(maps) {
  var answer = -1;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let q = [[0, 0, 1]];
  maps[0][0] = 0;
  let endy = maps[0].length;
  let endx = maps.length;

  while (q.length) {
    const [curX, curY, move] = q.shift();
    if (curX === endx - 1 && curY === endy - 1) {
      return move;
    }
    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (nx >= 0 && nx < endx && ny >= 0 && ny < endy && maps[nx][ny] === 1) {
        q.push([nx, ny, move + 1]);
        maps[nx][ny] = 0;
      }
    }
  }

  return answer;
}

function solution(maps) {
  var answer = -1;
  let dist = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  const dxy = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let q = [[0, 0, 1]];

  while (q.length) {
    let [y, x, count] = q.shift();

    if (y === maps.length - 1 && x === maps[0].length - 1) {
      return count;
    }

    for (let [dy, dx] of dxy) {
      let ey = dy + y;
      let ex = dx + x;

      if (
        ey >= 0 &&
        ey < maps.length &&
        ex >= 0 &&
        ex < maps[0].length &&
        maps[ey][ex] != 0 &&
        dist[ey][ex] === false
      ) {
        dist[ey][ex] = true;
        q.push([ey, ex, count + 1]);
      }
    }
  }
  return answer;
}
