// 문제 설명
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
// 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
    var answer = '';
    if (polynomial === 'x') {
        return (answer = 'x');
    }
    let x = [];
    let n = [];
    let xCount = 0;
    let nCount = 0;
    let arr = polynomial.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let num = '';
        if (arr[i] != '+') {
            num = arr[i];
            if (num.includes('x')) {
                x.push(arr[i]);
            } else {
                n.push(num);
            }
        }
    }

    for (let i = 0; i < x.length; i++) {
        let arrX = x[i];
        if (arrX === 'x') {
            xCount += 1;
        } else {
            xCount += arrX.split('x')[0] * 1;
        }
    }

    for (let i = 0; i < n.length; i++) {
        nCount += n[i] * 1;
    }
    if (nCount === 0) {
        answer = `${xCount}x`;
    } else if (xCount === 0) {
        answer = `${nCount}`;
    } else if (xCount === 1) {
        answer = `x + ${nCount}`;
    } else {
        answer = `${xCount}x + ${nCount}`;
    }
    return answer;
}
