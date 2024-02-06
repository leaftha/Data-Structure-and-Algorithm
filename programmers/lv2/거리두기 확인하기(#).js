function solution(places) {
    var answer = [];

    function bfs(arr) {
        let q = [];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (arr[i][j] === 'P') {
                    q.push([i, j]);
                }
            }
        }

        while (q.length) {
            let [y, x] = q.shift();
            let dxy = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
            ];

            for (let [dy, dx] of dxy) {
                let ex = x + dx;
                let ey = y + dy;

                if (ex >= 0 && ex < 5 && ey >= 0 && ey < 5) {
                    if (arr[ey][ex] === 'X') continue;
                    if (arr[ey][ex] === 'P') {
                        return 0;
                    }
                }
                for (let [wy, wx] of dxy) {
                    let aroundNX = ex + wx;
                    let aroundNY = ey + wy;

                    if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
                    if (aroundNX === x && aroundNY === y) continue;
                    if (arr[aroundNY][aroundNX] === 'P') return 0;
                }
            }
        }
        return 1;
    }

    for (let i of places) {
        answer.push(bfs(i));
    }

    return answer;
}
