function solution(arr) {
    var answer = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            answer += arr[j][i];
        }
    }

    return answer;
}

let arr = ['ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij'];

console.log(solution(arr));
