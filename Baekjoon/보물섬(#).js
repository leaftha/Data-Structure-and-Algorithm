function solution(n, arr) {
    let answer = 0;
    let q = [];

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'L') {
                let visited = Array.from(Array(arr.length), () => Array(arr[0].length).fill(0));
                let dist = Array.from(Array(arr.length), () => Array(arr[0].length).fill(0));
                q.push([i, j]);

                while (q.length != 0) {
                    let [ey, ex] = q.shift();

                    for (let [dx, dy] of [
                        [0, 1],
                        [1, 0],
                        [-1, 0],
                        [0, -1],
                    ]) {
                        let ny = ey + dy;
                        let nx = ex + dx;
                        if (ny >= 0 && ny < arr.length && nx >= 0 && nx < arr[0].length) {
                            if (arr[ny][nx] === 'L') {
                                if (visited[ny][nx] === 0) {
                                    visited[ny][nx] = 1;
                                    dist[ny][nx] = dist[ey][ex] + 1;
                                    answer = Math.max(answer, dist[ny][nx]);
                                    q.push([ny, nx]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return answer;
}

let arr = [
    ['W', 'L', 'L', 'W', 'W', 'W', 'L'],
    ['L', 'L', 'L', 'W', 'L', 'L', 'L'],
    ['L', 'W', 'L', 'W', 'L', 'W', 'W'],
    ['L', 'W', 'L', 'W', 'L', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'L', 'W', 'W'],
];

console.log(solution(7, arr));
