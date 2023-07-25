// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
    var answer = [];
    let num = 0;
    let max = -1;
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        num = array[i];
        if (max < num) {
            max = num;
            n = i;
        }
    }
    answer.push(max, n);
    return answer;
}
