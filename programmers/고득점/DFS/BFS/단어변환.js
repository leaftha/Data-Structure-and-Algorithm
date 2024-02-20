function solution(begin, target, words) {
    var answer = 0;
    if (words.indexOf(target) === -1) {
        return 0;
    }

    let vis = Array(words.length).fill(0);

    let q = [begin];

    while (q.length) {
        answer++;
        let s = q.shift();
        if (s === target) {
            break;
        }

        for (let i = 0; i < words.length; i++) {
            if (vis[i] === 1) continue;
            let cnt = 0;
            for (let j = 0; j < s.length; j++) {
                if (words[i][j] != s[j]) {
                    cnt++;
                }
                if (cnt > 1) {
                    break;
                }
            }

            if (cnt === 1) {
                q.unshift(words[i]);
                vis[i] = 1;
            }
        }
    }

    return answer - 1;
}
