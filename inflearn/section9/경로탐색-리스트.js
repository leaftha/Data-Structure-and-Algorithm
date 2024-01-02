function solution(n, arr) {
    let answer = 0;
    let graph = {};

    for (let [a, b] of arr) {
        if (graph[a]) {
            graph[a].push(b);
        } else {
            graph[a] = [b];
        }
    }
    let path = [];
    let check = Array(n + 1).fill(0);
    function dfs(L) {
        if (L === n) {
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0 && graph[L].indexOf(i) != -1) {
                    check[i] = 1;
                    path.push(i);
                    dfs(i);
                    check[i] = 0;
                    path.pop();
                }
            }
        }
    }

    check[1] = 1;
    path.push(1);
    dfs(1);

    console.log(graph);

    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
