function solution(n) {
    var answer = 0;
    let queen = [];

    function check(x, y) {
        for (let [i, j] of queen) {
            if (i === x || j === y) {
                return false;
            }
            if (Math.abs(i - x) === Math.abs(j - y)) {
                return false;
            }
        }
        return true;
    }

    function dfs(L) {
        if (L === n) {
            answer++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!check(L, i)) continue;
            queen.push([L, i]);
            dfs(L + 1);
            queen.pop();
        }
    }

    dfs(0);

    return answer;
}

function solution(n) {
    var answer = 0;
    let q = [];

    function check(x, y) {
        for (let [i, j] of q) {
            if (i === x || j === y) {
                return false;
            }
            if (Math.abs(i - x) === Math.abs(j - y)) {
                return false;
            }
        }
        return true;
    }

    function dfs(L) {
        if (n === L) {
            answer++;
            return;
        } else {
            for (let i = 0; i < n; i++) {
                if (!check(L, i)) continue;
                q.push([L, i]);
                dfs(L + 1);
                q.pop();
            }
        }
    }

    dfs(0);
    return answer;
}
