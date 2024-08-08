function solution(board, aloc, bloc) {
  const row = board.length;
  const col = board[0].length;

  const dxy = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function isValue(r, c) {
    return 0 <= r && r < row && 0 <= c && c < col;
  }

  function recur(alpha, beta, visited, step) {
    const [r, c] = step % 2 === 0 ? alpha : beta;

    let canMove = false;
    let isOppen = true;

    const winStep = [];
    const loseStep = [];

    for (let [dx, dy] of dxy) {
      const nr = dx + r;
      const nc = dy + c;

      if (isValue(nr, nc) && !visited.has(`${nr},${nc}`) && board[nr][nc]) {
        canMove = true;
        if (alpha[0] === beta[0] && alpha[1] === beta[1]) {
          return [true, step + 1];
        }
        const [win, stepLeft] =
          step % 2 === 0
            ? recur(
                [nr, nc],
                beta,
                new Set([...visited, `${r},${c}`]),
                step + 1
              )
            : recur(
                alpha,
                [nr, nc],
                new Set([...visited, `${r},${c}`]),
                step + 1
              );

        isOppen &= win;

        if (win) {
          winStep.push(stepLeft);
        } else {
          loseStep.push(stepLeft);
        }
      }
    }
    if (!canMove) {
      return [false, step];
    }

    if (isOppen) {
      return [false, Math.max(...winStep)];
    }

    return [true, Math.min(...loseStep)];
  }
  const [_, steps] = recur(aloc, bloc, new Set(), 0);
  return steps;
}
