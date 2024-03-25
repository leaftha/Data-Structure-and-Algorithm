function solution(ability) {
    var answer = 0;
    let ch = Array(ability[0].length).fill(false);
    function dfs(L, sum) {
        if (L === ability[0].length) {
            answer = Math.max(answer, sum);
            return;
        }

        for (let i = 0; i < ability.length; i++) {
            if (!ch[i]) {
                ch[i] = true;
                dfs(L + 1, sum + ability[i][L]);
                ch[i] = false;
            }
        }
    }

    dfs(0, 0);
    return answer;
}
