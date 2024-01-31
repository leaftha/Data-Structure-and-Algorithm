function solution(maps) {
    var answer = [];
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));

    const bfs = (startY, startX) => {
        let queue = [];
        let days = 0;
        queue.push([startY, startX]);
        visited[startY][startX] = true;

        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let [y, x] = queue.shift();
                days += maps[y][x] * 1;
                for (let d = 0; d < 4; d++) {
                    let ny = y + dy[d];
                    let nx = x + dx[d];
                    if (
                        ny >= 0 &&
                        ny < maps.length &&
                        nx >= 0 &&
                        nx < maps[0].length &&
                        !visited[ny][nx] &&
                        maps[ny][nx] !== 'X'
                    ) {
                        visited[ny][nx] = true;
                        queue.push([ny, nx]);
                    }
                }
            }
        }
        return days;
    };

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                let days = bfs(i, j);
                answer.push(days);
            }
        }
    }

    if (answer.length === 0) {
        return [-1];
    }

    answer.sort((a, b) => a - b);
    return answer;
}
