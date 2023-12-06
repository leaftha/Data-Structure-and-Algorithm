// 내 풀이

function solution(board, moves) {
    var answer = 0;
    let arr = [];
    for (let i = 0; i < moves.length; i++) {
        let k = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][k] != 0) {
                if (arr[arr.length - 1] === board[j][k]) {
                    answer += 2;
                    arr.pop();
                } else {
                    arr.push(board[j][k]);
                }
                board[j][k] = 0;
                break;
            }
        }
    }
    return answer;
}

// 풀이

function solution(board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach((pos) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][pos - 1] !== 0) {
                let tmp = board[i][pos - 1];
                board[i][pos - 1] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(tmp);
                break;
            }
        }
    });

    return answer;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
