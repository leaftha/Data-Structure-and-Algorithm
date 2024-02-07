function solution(m, n, board) {
    var answer = 0;

    for (let i = 0; i < m; i++) {
        board[i] = board[i].split('');
    }

    let dxy = [
        [0, 1],
        [1, 0],
        [1, 1],
    ];

    while (true) {
        let q = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                let s = board[i][j];
                if (s === 0) {
                    continue;
                }
                let isFalse = true;
                for (let [dy, dx] of dxy) {
                    let ey = i + dy;
                    let ex = j + dx;
                    if (ey >= 0 && ey < m && ex >= 0 && ex < n) {
                        if (board[ey][ex] != s) {
                            isFalse = false;
                            break;
                        }
                    }
                }
                if (isFalse) {
                    q.push([i, j]);
                }
            }
        }
        if (q.length === 0) {
            break;
        }

        for (let [y, x] of q) {
            board[y][x] = 0;
            for (let [dy, dx] of dxy) {
                let ey = y + dy;
                let ex = x + dx;
                board[ey][ex] = 0;
            }
        }

        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i > 0; i--) {
                if (board[i][j] === 0) {
                    for (let k = i - 1; k >= 0; k--) {
                        if (board[k][j] !== 0) {
                            board[i][j] = board[k][j];
                            board[k][j] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                answer++;
            }
        }
    }

    return answer;
}
