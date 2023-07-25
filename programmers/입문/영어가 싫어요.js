function solution(numbers) {
    var answer = 0;
    let str = '';
    let string = '';
    const num = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    };

    for (let i = 0; i < numbers.length; i++) {
        str += numbers[i];
        if (num[str] || str === 'zero') {
            string += num[str];
            str = '';
        }
    }
    answer = string * 1;
    return answer;
}
