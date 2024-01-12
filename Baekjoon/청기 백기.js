function solution(n) {
    let answer = 0;
    let arr = Array(n + 1).fill(false);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            if (j % i === 0) {
                arr[j] = !arr[j];
            }
        }
    }

    arr.map((i) => {
        if (i) {
            answer++;
        }
    });

    return answer;
}

// ----------------------------------------------------

function solution(n) {
    let answer = 0;

    answer = parseInt(answer ** 0.5);
    return answer;
}

console.log(solution(24));
