function solution(board) {
  var answer = 10000000;

  let arr = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );
  let q = [];
  let end = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "D") {
        arr[i][j] = "X";
      } else if (board[i][j] === "R") {
        q.push([i, j, 0]);
        arr[i][j] = 1;
      } else if (board[i][j] === "G") {
        end.push(i);
        end.push(j);
      }
    }
  }
  while (q.length) {
    let [y, x, n] = q.shift();
    if (y === end[0] && x === end[1]) {
      answer = Math.min(answer, n);
    }
    for (let i = y; i < board.length; i++) {
      if (board[i][x] === "D") {
        if (arr[i - 1][x] === 0) {
          arr[i - 1][x] = n + 1;
          q.push([i - 1, x, n + 1]);
        }
        break;
      } else if (i === board.length - 1 && arr[i][x] === 0) {
        arr[i][x] = n + 1;
        q.push([i, x, n + 1]);
        break;
      }
    }
    for (let i = y; i >= 0; i--) {
      if (board[i][x] === "D") {
        if (arr[i + 1][x] === 0) {
          arr[i + 1][x] = n + 1;
          q.push([i + 1, x, n + 1]);
        }
        break;
      } else if (i === 0 && arr[i][x] === 0) {
        arr[i][x] = n + 1;
        q.push([i, x, n + 1]);
        break;
      }
    }
    for (let i = x; i < board[0].length; i++) {
      if (board[y][i] === "D") {
        if (arr[y][i - 1] === 0) {
          arr[y][i - 1] = n + 1;
          q.push([y, i - 1, n + 1]);
        }
        break;
      } else if (i === board[0].length - 1 && arr[y][i] === 0) {
        arr[y][i] = n + 1;
        q.push([y, i, n + 1]);
        break;
      }
      ``;
    }
    for (let i = x; i >= 0; i--) {
      if (board[y][i] === "D") {
        if (arr[y][i + 1] === 0) {
          arr[y][i + 1] = n + 1;
          q.push([y, i + 1, n + 1]);
        }
        break;
      } else if (i === 0 && arr[y][i] === 0) {
        arr[y][i] = n + 1;
        q.push([y, i, n + 1]);
        break;
      }
    }
  }

  if (answer === 10000000) {
    answer = -1;
  }
  return answer;
}
