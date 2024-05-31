function solution(board) {
    const N = board.length;
    const dirs = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0]  // 위
    ];

    const dp = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => Array(dirs.length).fill(Infinity))
    );

    const q = [
        [0, 0, 0, 0], // 시작점에서 오른쪽으로 가는 경우
        [0, 0, 1, 0]  // 시작점에서 아래로 가는 경우
    ];

    const isInBoard = (x, y) =>
        x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;

    while (q.length) {
        const [x, y, pDirI, cost] = q.shift();

        dirs.forEach(([dx, dy], nDirI) => {
            const [nx, ny] = [x + dx, y + dy];
            if (!isInBoard(nx, ny)) return;

            const newCost = cost + (pDirI === nDirI ? 100 : 600);

            if (newCost < dp[nx][ny][nDirI]) {
                dp[nx][ny][nDirI] = newCost;
                q.push([nx, ny, nDirI, newCost]);
            }
        });
    }

    return Math.min(...dp[N - 1][N - 1]);
}
