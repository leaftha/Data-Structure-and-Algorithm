// function solution(board) {
//     let answer = 0;
//     let n = board.length;
//     let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//     let dy = [0, 1, 1, 1, 0, -1, -1, -1];

//     function dfs(x, y) {
//         board[x][y] = 0;
//         for (let k = 0; k < 8; k++) {
//             let nx = x + dx[k];
//             let ny = y + dy[k];
//             if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//                 dfs(nx, ny);
//             }
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (board[i][j] === 1) {
//                 answer++;
//                 console.log(answer);
//                 console.log(board);
//                 dfs(i, j);
//             }
//         }
//     }
//     return answer;
// }

// let arr = [
//     [1, 1, 0, 0, 0, 1, 0],
//     [0, 1, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 1, 0, 1, 0, 0],
// ];

// console.log(solution(arr));

function solution(board) {
    let answer = 0;
    let dxy = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
    ];
    let vis = Array.from(Array(board.length), () => Array(board.length).fill(0));
    // vis[0][0] = 1

    function dfs(y, x) {
        for (let [dy, dx] of dxy) {
            let ey = dy + y;
            let ex = dx + x;
            if (
                ey >= 0 &&
                ey < board.length &&
                ex >= 0 &&
                ex < board[0].length &&
                board[ey][ex] === 1 &&
                vis[ey][ex] === 0
            ) {
                vis[ey][ex] = 1;
                dfs(ey, ex);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (vis[i][j] === 1 || board[i][j] === 0) continue;
            vis[i][j] = 1;
            dfs(i, j);
            answer++;
        }
    }

    return answer;
}

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
