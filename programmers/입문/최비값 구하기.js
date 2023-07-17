// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때,
// 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

// 풀이

function solution(array) {
    if (array.length === 1) return array[0];

    let answer = 0;
    let count2 = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (answer === array[i]) break;
            if (array[j] === array[i]) {
                count++;
            }
        }
        if (count2 < count) {
            answer = array[i];
            count2 = count;
        } else if (count2 === count) {
            answer = -1;
        }
    }
    return answer;
}

// ai
// 해당 함수는 주어진 정수 배열에서 최빈값을 구하는 로직을 구현한 함수로 보입니다. 함수의 동작은 다음과 같습니다:

// 주어진 배열의 길이가 1인 경우, 해당 요소를 최빈값으로 반환합니다.
// 주어진 배열에서 각 요소의 빈도수를 계산합니다. 내부적으로 두 개의 반복문을 사용하여 모든 요소들을 서로 비교합니다.
// 가장 빈도수가 큰 값을 answer 변수에 저장하고, 빈도수를 count2 변수에 저장합니다.
// 만약 동일한 빈도수가 여러 개 존재하는 경우, answer를 -1로 설정하여 최빈값이 여러 개라는 것을 나타냅니다.
// 위 코드의 방식으로도 최빈값을 구할 수 있지만, 코드가 두 개의 반복문을 사용하기 때문에 배열이 큰 경우에는
// 성능에 영향을 줄 수 있습니다. 따라서 배열의 크기가 크다면 다른 방법을 사용하는 것이 좋습니다.

// 더 효율적인 방법으로는 주어진 배열을 한 번 순회하면서 빈도수를 기록하고, 최빈값을 구하는 방식이 있습니다.
// 이전에 제가 제시한 자바스크립트 코드도 해당 방법을 사용하였습니다. 빈도수를 기록하는 객체(frequencyObj)를 사용하여 각 요소의 빈도수를 계산하고,
//  객체를 순회하여 최빈값을 찾는 방식입니다. 이 방법은 시간복잡도가 O(n)으로 더 효율적입니다.

// 해답

function solution(array) {
    // array의 길이가 1일 경우 갯수가 하나이기에
    // 그 값을 반환해준다.
    if (array.length === 1) return array[0];

    const obj = {};
    const answer = [];

    // array를 forEach() 반복문을 돌려
    // obj에 값이 없으면 값을 만들고 1을 넣어주고
    // obj에 값이 있으면 기존 값 +1을 해준다.
    array.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    });

    // 값과 그 값의 갯수를 정의해 둔 obj를 array에 넣어준다.
    // ex) [[1, 1], [2, 1], [3, 3], [4, 1]]
    for (let key in obj) {
        answer.push([key, obj[key]]);
    }

    // answer 배열을 갯수 기준으로 내림차순 정렬을 해준다.
    // ex) [[3, 3], [4, 1], [2, 1], [1, 1]]
    answer.sort((a, b) => b[1] - a[1]);

    // 최빈값이 여러 개면 -1을 반환해야 하기 때문에 확인한다.
    if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;

    // 여러개가 아니라면 정렬한 처음 값을 반환한다.
    return Number(answer[0][0]);
}
