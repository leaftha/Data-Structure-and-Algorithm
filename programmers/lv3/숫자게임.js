function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let rt = 0;

    for (let lt = 0; lt < A.length; lt++) {
        if (rt > B.length) break;
        if (A[lt] < B[rt]) {
            rt++;
            answer++;
            continue;
        } else {
            while (rt <= B.length + 1) {
                rt++;
                if (A[lt] < B[rt]) {
                    rt++;
                    answer++;
                    break;
                }
            }
        }
    }
    return answer;
}
