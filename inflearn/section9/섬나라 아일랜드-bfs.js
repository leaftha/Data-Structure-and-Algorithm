// function solution(board) {
//     let answer = 0;
//     let n = board.length;
//     let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//     let dy = [0, 1, 1, 1, 0, -1, -1, -1];
//     let q = [];

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (board[i][j] === 1) {
//                 board[i][j] = 0;
//                 q.push([i, j]);
//                 answer++;
//                 while (q.length) {
//                     let x = q.shift();
//                     for (let k = 0; k < 8; k++) {
//                         let nx = x[0] + dx[k];
//                         let ny = x[1] + dy[k];
//                         if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//                             board[nx][ny] = 0;
//                             q.push([nx, ny]);
//                         }
//                     }
//                 }
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

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0 || vis[i][j] === 1) continue;
            let q = [[i, j]];
            console.log(...q);
            vis[i][j] = 1;
            answer++;
            while (q.length) {
                let [y, x] = q.shift();
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
                        q.push([ey, ex]);
                    }
                }
            }
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
