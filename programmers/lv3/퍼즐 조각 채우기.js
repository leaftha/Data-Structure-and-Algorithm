function solution(game_board, table) {
  let answer = 0;
  const dxy = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const bfs = (board, y, x, value) => {
    let q = [[y, x]];
    let block = [];
    board[y][x] = -1;

    while (q.length) {
      let [cy, cx] = q.shift();
      block.push([cy, cx]);

      for (let [dy, dx] of dxy) {
        let ny = cy + dy;
        let nx = cx + dx;

        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < board.length &&
          nx < board.length &&
          board[ny][nx] === value
        ) {
          board[ny][nx] = -1;
          q.push([ny, nx]);
        }
      }
    }
    return normalize(block);
  };

  const normalize = (block) => {
    block.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let minY = block[0][0],
      minX = block[0][1];

    return block.map(([y, x]) => [y - minY, x - minX]);
  };

  const rotateBlock = (block) => {
    let rotated = block.map(([y, x]) => [x, -y]);
    return normalize(rotated);
  };

  const check = (game, block) => {
    if (game.length !== block.length) return false;
    game.sort();
    block.sort();
    return game.every(
      ([gy, gx], i) => gy === block[i][0] && gx === block[i][1]
    );
  };

  let blocks = [];
  let games = [];

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 1) {
        blocks.push(bfs(table, i, j, 1));
      }
      if (game_board[i][j] === 0) {
        games.push(bfs(game_board, i, j, 0));
      }
    }
  }

  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    for (let j = 0; j < blocks.length; j++) {
      let block = blocks[j];
      let match = false;

      for (let k = 0; k < 4; k++) {
        if (check(game, block)) {
          answer += block.length;
          blocks.splice(j, 1);
          match = true;
          break;
        }
        block = rotateBlock(block);
      }
      if (match) break;
    }
  }

  return answer;
}
