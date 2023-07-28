// function solution(board) {
//     var answer = 0;
//     let count = 0;
//     let pos = [];
//     for (let i = 0; i < board.length; i++) {
//         console.log(board[i]);
//         for (let j = 0; j < board[i].length; j++) {
//             if (board[i][j] == 1) {
//                 count++;
//                 if (board[i - 1][j] != undefined && board[i - 1][j] === 0) {
//                     pos.push(`${i - 1} , ${j}`);
//                 }
//                 if (board[i - 1][j - 1] != undefined && board[i - 1][j - 1] === 0) {
//                     pos.push(`${i - 1} , ${j - 1}`);
//                 }
//                 if (board[i][j - 1] != undefined && board[i][j - 1] === 0) {
//                     pos.push(`${i} , ${j - 1}`);
//                 }
//                 if (board[i + 1][j] != undefined && board[i + 1][j] === 0) {
//                     pos.push(`${i + 1} , ${j}`);
//                 }
//                 if (board[i][j + 1] != undefined && board[i][j + 1] === 0) {
//                     pos.push(`${i} , ${j + 1}`);
//                 }
//                 if (board[i + 1][j + 1] != undefined && board[i + 1][j + 1] === 0) {
//                     pos.push(`${i + 1} , ${j + 1}`);
//                 }
//                 if (board[i - 1][j + 1] != undefined && board[i - 1][j + 1] === 0) {
//                     pos.push(`${i - 1} , ${j + 1}`);
//                 }
//                 if (board[i + 1][j - 1] != undefined && board[i + 1][j - 1] === 0) {
//                     pos.push(`${i + 1} , ${j - 1}`);
//                 }
//             }
//         }
//     }
//     console.log(count);
//     return answer;
// }
function solution(board) {
    let answer = 0;

    const dangerArea = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 1],
        [1, 1],
        [1, -1],
        [-1, -1],
    ];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 1) {
                dangerArea.map((v) => {
                    let [x, y] = v;
                    [x, y] = [x + i, y + j];
                    if (x >= 0 && x < board.length && y >= 0 && y < board[i].length && board[x][y] == 0)
                        board[x][y] = 2;
                });
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                answer++;
            }
        }
    }
    return answer;
}
