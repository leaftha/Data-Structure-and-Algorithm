function solution(arr) {
    let answer = '';

    const tree = {};

    for (let [a, b, c] of arr) {
        if (!tree[a]) {
            tree[a] = [b, c];
        }
    }

    let str = '';
    function recur(L) {
        if (L === '.') {
            answer = str;
            return;
        } else {
            recur(tree[L][0]);
            str += L;
            recur(tree[L][1]);
        }
    }

    recur('A');

    return answer;
}

let arr = [
    ['A', 'B', 'C'],
    ['B', 'D', '.'],
    ['C', 'E', 'F'],
    ['E', '.', '.'],
    ['F', '.', 'G'],
    ['D', '.', '.'],
    ['G', '.', '.'],
];

console.log(solution(arr));
