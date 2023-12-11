function solution(n) {
    let answer = '';

    function DFS(L) {
        if (L > 7) {
            return;
        } else {
            DFS(L + L);
            DFS(L + L + 1);
            answer += `${L} `;
        }
    }

    DFS(n);
    return answer;
}

// 풀이

function solution(n) {
    let answer = '';
    function DFS(v) {
        if (v > 7) return;
        else {
            answer += v + ' ';
            DFS(v * 2);
            DFS(v * 2 + 1);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));
