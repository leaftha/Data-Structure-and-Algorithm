function solution(n) {
    function Re(num) {
        if (num === 0) {
            return;
        } else {
            Re(num - 1);
            console.log(num);
        }
    }

    Re(n);
}

// 풀이

function solution(n) {
    function DFS(L) {
        if (L == 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }
    DFS(n);
}

solution(3);
