function solution(maps) {
  var answer = 0;
  let q = [];
  let vis1 = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  let vis2 = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );

  for (let i = 0; i < maps.length; i++) {
    maps[i] = maps[i].split("");
    if (maps[i].indexOf("S") != -1) {
      q.push([i, maps[i].indexOf("S"), 0]);
    }
  }

  let dxy = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let L1 = 0;
  let L2 = 0;

  while (q.length) {
    let [y, x, move] = q.shift();

    if (maps[y][x] === "L") {
      L1 = move;
      q = [];
      q.push([y, x, 0]);
      break;
    }

    for (let [dy, dx] of dxy) {
      let ex = x + dx;
      let ey = y + dy;
      if (
        ey >= 0 &&
        ey < maps.length &&
        ex >= 0 &&
        ex < maps[0].length &&
        maps[ey][ex] != "X" &&
        vis1[ey][ex] != 1
      ) {
        q.push([ey, ex, move + 1]);
        vis1[ey][ex] = 1;
      }
    }
  }

  if (L1 === 0) {
    return -1;
  }
  while (q.length) {
    let [y, x, move] = q.shift();
    if (maps[y][x] === "E") {
      // console.log(q)
      L2 = move;
      break;
    }

    for (let [dy, dx] of dxy) {
      let ex = x + dx;
      let ey = y + dy;
      if (
        ey >= 0 &&
        ey < maps.length &&
        ex >= 0 &&
        ex < maps[0].length &&
        maps[ey][ex] != "X" &&
        vis2[ey][ex] != 1
      ) {
        q.push([ey, ex, move + 1]);
        vis2[ey][ex] = 1;
      }
    }
  }

  if (L2 === 0) {
    return -1;
  }
  console.log(L1, L2);
  answer = L1 + L2;

  return answer;
}

// --------------------------------------------------------------------

function solution(maps) {
  var answer = 0;
  let q = [];
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].indexOf("S") != -1) {
      q.push([i, maps[i].indexOf("S"), 0]);
    }
  }

  let dist1 = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  let dist2 = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );

  let count1 = 0;
  let count2 = 0;
  const dxy = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let label = [];
  while (q.length) {
    let [y, x, move] = q.shift();
    if (maps[y][x] === "L") {
      q = [];
      q.push([y, x, 0]);
      count1 = move;
      break;
    }
    for (let [dx, dy] of dxy) {
      let ex = dx + x;
      let ey = dy + y;

      if (
        ex >= 0 &&
        ex < maps[0].length &&
        ey >= 0 &&
        ey < maps.length &&
        maps[ey][ex] != "X" &&
        dist1[ey][ex] != 1
      ) {
        q.push([ey, ex, move + 1]);
        dist1[ey][ex] = 1;
      }
    }
  }
  if (count1 === 0) return -1;

  while (q.length) {
    let [y, x, move] = q.shift();
    if (maps[y][x] === "E") {
      count2 = move;
      break;
    }
    for (let [dx, dy] of dxy) {
      let ex = dx + x;
      let ey = dy + y;

      if (
        ex >= 0 &&
        ex < maps[0].length &&
        ey >= 0 &&
        ey < maps.length &&
        maps[ey][ex] != "X" &&
        dist2[ey][ex] != 1
      ) {
        q.push([ey, ex, move + 1]);
        dist2[ey][ex] = 1;
      }
    }
  }
  if (count2 === 0) return -1;
  return count1 + count2;
}
