function solution(arr) {
    var answer = [0, 0];

    function recur(x, y, n) {
        if (n === 1) {
            return answer[arr[x][y]]++;
        }

        let isTrue = true;

        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                if (arr[x][y] != arr[i][j]) {
                    isTrue = false;
                    break;
                }
            }
        }

        if (isTrue) return answer[arr[x][y]]++;

        n /= 2;

        recur(x, y, n);
        recur(x + n, y, n);
        recur(x, y + n, n);
        recur(x + n, y + n, n);
    }

    recur(0, 0, arr.length);

    return answer;
}
