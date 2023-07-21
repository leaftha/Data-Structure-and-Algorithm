// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = 0;
    let n = 0;
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
            let prev = count;
            if (i != j) {
                count = numbers[i] * numbers[j];
            }
            if (prev < count) {
                n = count;
            } else if (count < prev) {
                n = prev;
                count = prev;
            }
        }
        if (n > answer) {
            answer = n;
        }
    }
    return answer;
}
