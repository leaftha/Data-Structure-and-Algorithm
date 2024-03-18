// function solution(board) {
//     let answer = 0;
//     let dx = [-1, 0, 1, 0];
//     let dy = [0, 1, 0, -1];

//     function dfs(x, y) {
//         if (x === 6 && y === 6) {
//             answer++;
//         } else {
//             for (let i = 0; i < 4; i++) {
//                 let nx = x + dx[i];
//                 let ny = y + dy[i];

//                 if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
//                     board[nx][ny] = 1;
//                     dfs(nx, ny);
//                     board[nx][ny] = 0;
//                 }
//             }
//         }
//     }

//     board[0][0] = 1;
//     dfs(0, 0);

//     return answer;
// }

// let arr = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [1, 1, 0, 1, 0, 1, 1],
//     [1, 1, 0, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

function solution(board) {
    let answer = 0;
    let dxy = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    let vis = Array.from(Array(7), () => Array(7).fill(0));
    vis[0][0] = 1;
    function dfs(y, x) {
        if (y === 6 && x === 6) {
            answer++;
            return;
        }
        for (let [dy, dx] of dxy) {
            let ey = dy + y;
            let ex = dx + x;
            if (ey >= 0 && ey <= 6 && ex >= 0 && ex <= 6 && board[ey][ex] === 0 && vis[ey][ex] === 0) {
                vis[ey][ex] = 1;
                dfs(ey, ex);
                vis[ey][ex] = 0;
            }
        }
    }

    dfs(0, 0);

    return answer;
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
