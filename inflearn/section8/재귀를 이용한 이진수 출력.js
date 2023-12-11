function solution(n) {
    let answer = '';

    function D(L) {
        if (L === 0) {
            return 1;
        } else {
            D(Math.floor(L / 2));
            answer += `${L % 2}`;
        }
    }

    D(n);
    return answer;
}

// 풀이

function solution(n) {
    let answer = '';
    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2));
            answer += String(n % 2);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));
