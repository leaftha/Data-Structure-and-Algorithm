function solution(n, computers) {
    var answer = 0;
    let obj = {};
    let vis = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        obj[i] = [];
    }

    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j && computers[i][j] === 1) {
                obj[i].push(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (vis[i] === 1) continue;
        let q = [i];
        vis[i] = 1;
        answer++;
        while (q.length) {
            let L = q.shift();
            if (obj[L].length != 0) {
                for (let x of obj[L]) {
                    if (vis[x] === 1) continue;
                    q.push(x);
                    vis[x] = 1;
                }
            }
        }
    }
    return answer;
}
