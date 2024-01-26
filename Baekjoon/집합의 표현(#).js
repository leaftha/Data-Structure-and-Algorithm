function solution(n, arr) {
    let answer = '';
    let par = [];
    for (let i = 0; i <= n; i++) {
        par.push(i);
    }

    function union(a, b) {
        par[b] = a;
    }

    function find(n) {
        if (par[n] === n) {
            return n;
        } else {
            return find(par[n]);
        }
    }

    for (let [x, a, b] of arr) {
        if (x === 0) {
            union(a, b);
        } else {
            if (find(a) === find(b)) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }

    return answer;
}

let arr = [
    [0, 1, 3],
    [1, 1, 7],
    [0, 7, 6],
    [1, 7, 1],
    [0, 3, 7],
    [0, 4, 2],
    [0, 1, 1],
    [1, 1, 1],
];

console.log(solution(7, arr));
