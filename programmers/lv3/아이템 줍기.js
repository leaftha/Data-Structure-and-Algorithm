function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  const scale = (n) => n * 2;

  let map = Array.from({ length: 102 }, () => Array(102).fill(-1));

  for (const [x1, y1, x2, y2] of rectangle) {
    let sx = scale(x1),
      sy = scale(y1);
    let ex = scale(x2),
      ey = scale(y2);

    for (let i = sy; i <= ey; i++) {
      for (let j = sx; j <= ex; j++) {
        if (i === sy || i === ey || j === sx || j === ex) {
          if (map[i][j] !== 2) map[i][j] = 1;
        } else {
          map[i][j] = 2;
        }
      }
    }
  }

  let dxy = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let q = [[scale(characterX), scale(characterY), 0]];

  let visited = Array.from({ length: 102 }, () => Array(102).fill(false));
  visited[scale(characterY)][scale(characterX)] = true;

  while (q.length) {
    let [x, y, count] = q.shift();

    if (x === scale(itemX) && y === scale(itemY)) {
      return count / 2;
    }

    for (let [dx, dy] of dxy) {
      let nx = dx + x;
      let ny = dy + y;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < 102 &&
        ny < 102 &&
        !visited[ny][nx] &&
        map[ny][nx] === 1
      ) {
        q.push([nx, ny, count + 1]);
        visited[ny][nx] = true;
      }
    }
  }

  return -1;
}
