// 문제 설명
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
// (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
// 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
// (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

function solution(X, Y) {
    var answer = '';
    const x = X.split('');
    const y = Y.split('');
    let arr = [];
    let obj1 = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    let obj2 = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    x.map((n) => {
        return (obj1[n] += 1);
    });
    y.map((n) => {
        return (obj2[n] += 1);
    });

    for (let i = 0; i < 10; i++) {
        if (obj1[i] != 0 && obj2[i] != 0) {
            let a = obj1[i];
            let b = obj2[i];
            let c = Math.min(a, b);
            for (let j = 0; j < c; j++) {
                arr.push(i);
            }
        }
    }
    if (arr.length === 0) return (answer = '-1');

    arr.sort((a, b) => {
        return b - a;
    });

    arr.map((n) => {
        if (answer[0] != '0') {
            return (answer += n);
        }
    });

    return answer;
}

//11~15 오류남
