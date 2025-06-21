function solution(board, skill) {
  var answer = 0;

  const diff = Array.from({ length: board.length + 1 }, () =>
    Array(board[0].length).fill(0)
  );

  for (let [type, r1, c1, r2, c2, degree] of skill) {
    let val = 0;
    if (type === 1) {
      val = -degree;
    } else {
      val = degree;
    }

    diff[r1][c1] += val;
    if (c2 + 1 < board[0].length) diff[r1][c2 + 1] -= val;
    if (r2 + 1 < board.length) diff[r2 + 1][c1] -= val;
    if (r2 + 1 < board.length && c2 + 1 < board[0].length)
      diff[r2 + 1][c2 + 1] += val;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      diff[i][j] += diff[i][j - 1];
    }
  }

  for (let j = 0; j < board[0].length; j++) {
    for (let i = 1; i < board.length; i++) {
      diff[i][j] += diff[i - 1][j];
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += diff[i][j];
      if (board[i][j] > 0) answer++;
    }
  }
  return answer;
}
