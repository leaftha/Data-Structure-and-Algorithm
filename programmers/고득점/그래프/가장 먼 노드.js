function solution(n, edge) {
    var answer = 0;
    let node = {};
    for (let i = 1; i <= n; i++) {
        node[i] = [];
    }

    for (let [i, j] of edge) {
        node[i].push(j);
        node[j].push(i);
    }

    let vis = Array(n + 1).fill(0);
    vis[1] = 1;
    let q = [1];
    let count = 0;
    while (q.length) {
        let L = q.shift();
        count++;
        for (let i of node[L]) {
            if (vis[i] === 0) {
                q.push(i);
                vis[i] = vis[L] + 1;
            }
        }
    }
    let max = Math.max(...vis);

    for (let i of vis) {
        if (i === max) {
            answer++;
        }
    }
    return answer;
}
