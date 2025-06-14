function solution(storage, requests) {
  var answer = 0;
  let arr = Array.from(Array(storage.length + 2), () =>
    Array(storage[0].length + 2).fill(0)
  );

  for (let i = 0; i < storage.length; i++) {
    for (let j = 0; j < storage[0].length; j++) {
      arr[i + 1][j + 1] = storage[i][j];
    }
  }

  function bfs(y, x, char) {
    let q = [[y, x]];
    let visted = Array.from(Array(storage.length + 2), () =>
      Array(storage[0].length + 2).fill(0)
    );
    visted[y][x] = 1;
    let dxy = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
    let result = [];
    while (q.length) {
      let [y, x] = q.shift();
      for (let [dy, dx] of dxy) {
        let ny = dy + y;
        let nx = dx + x;
        if (
          ny >= 0 &&
          ny < arr.length &&
          nx >= 0 &&
          nx < arr[0].length &&
          arr[ny][nx] === 0 &&
          visted[ny][nx] === 0
        ) {
          q.push([ny, nx]);
          visted[ny][nx] = 1;
        } else if (
          ny >= 0 &&
          ny < arr.length &&
          nx >= 0 &&
          nx < arr[0].length &&
          arr[ny][nx] === char
        ) {
          result.push([ny, nx]);
        }
      }
    }
    return result;
  }

  for (let str of requests) {
    if (str.length === 1) {
      const chars = bfs(0, 0, str);
      for (let [y, x] of chars) {
        arr[y][x] = 0;
      }
    } else {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
          if (arr[i][j] === str[0]) {
            arr[i][j] = 0;
          }
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] !== 0) {
        answer++;
      }
    }
  }
  return answer;
}
