function solution(beginning, target) {
  let answer = Infinity;

  const board = beginning.map((row) => [...row]);

  const dfs = (row, count) => {
    if (row === beginning.length) {
      let c = 0;

      for (let j = 0; j < board[0].length; j++) {
        let same = true;
        let diff = true;

        for (let i = 0; i < board.length; i++) {
          if (board[i][j] !== target[i][j]) same = false;
          if (board[i][j] === target[i][j]) diff = false;
        }

        if (!same && !diff) return;

        if (diff) c++;
      }

      answer = Math.min(answer, count + c);
      return;
    }

    dfs(row + 1, count);

    for (let i = 0; i < board[row].length; i++) {
      board[row][i] ^= 1;
    }

    dfs(row + 1, count + 1);

    for (let i = 0; i < board[row].length; i++) {
      board[row][i] ^= 1;
    }
  };

  dfs(0, 0);

  return answer === Infinity ? -1 : answer;
}
