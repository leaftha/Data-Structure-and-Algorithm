function solution(numbers) {
    var answer = 0;
    let str = Array(numbers.length).fill(false);
    let check = [];
    function find(n) {
        n = parseInt(n);
        if (check.indexOf(n) != -1) return false;
        check.push(n);

        if (n <= 1) {
            return false;
        } else {
            for (let i = 2; i < n - 1; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
        }
        return true;
    }

    function dfs(L, s) {
        if (find(s) && s != '') {
            console.log(s);
            answer++;
        }
        if (L === numbers.length) {
            return;
        } else {
            for (let i = 0; i < numbers.length; i++) {
                if (!str[i]) {
                    str[i] = true;
                    dfs(L + 1, s + numbers[i]);
                    str[i] = false;
                }
            }
        }
    }

    dfs(0, '');

    return answer;
}
