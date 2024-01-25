function solution(n, m, s, arr) {
    let answer = 0;
    let links = Array.from(Array(n + 1), () => Array());

    for (let [a, b, c] of arr) {
        links[a].push([b, c]);
    }

    let q = [];
    let vistied = Array(n + 1).fill(0);
    q.push(1);
    vistied[s] = 1;
    let dist = Array(n + 1).fill(99999999);
    dist[s] = 0;

    function short() {
        let min = 9999999999;
        let idx = 0;
        for (let i = 1; i < n + 1; i++) {
            if (dist[i] <= min) {
                idx = i;
                min = dist[i];
            }
        }
        return idx;
    }

    while (q.length != 0) {
        let node = q.shift();
        for ([nxt, w] of links[node]) {
            console.log(nxt, w);
            dist[nxt] = Math.min(dist[node] + w, dist[nxt]);
            q.push(nxt);
            vistied[nxt] = 1;
        }
    }
    console.log(links);
    console.log(dist);
    console.log(vistied);
    return answer;
}

let arr = [
    [5, 1, 1],
    [1, 2, 2],
    [1, 3, 3],
    [2, 3, 4],
    [2, 4, 5],
    [3, 4, 6],
];

console.log(solution(5, 6, 1, arr));
