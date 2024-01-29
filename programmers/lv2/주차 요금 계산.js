function solution(fees, records) {
    var answer = [];
    const cars = {};
    const endClock = 23 * 60 + 59;
    let car = [];

    for (let i of records) {
        const arr = i.split(' ');
        if (car.indexOf(arr[1]) === -1) {
            car.push(arr[1]);
        }
        const n = arr[0].split(':');
        let clock = n[0] * 1 * 60 + n[1] * 1;
        if (cars[arr[1]]) {
            cars[arr[1]].push(clock);
        } else {
            cars[arr[1]] = [clock];
        }
    }

    car.sort((a, b) => a * 1 - b * 1);
    for (let i of car) {
        let length;
        let count = 0;
        if (cars[i].length % 2 != 0) {
            length = cars[i].length + 1;
        } else {
            length = cars[i].length;
        }

        for (let j = 0; j <= length - 1; j += 2) {
            // let end = cars[i][j+1] ? cars[i][j+1] : endClock
            let end;
            if (cars[i][j + 1] === undefined) {
                end = endClock;
            } else {
                end = cars[i][j + 1];
            }
            count += end - cars[i][j];
        }
        let sum = 0;
        if (count > fees[0]) {
            sum = fees[1] + Math.ceil((count - fees[0]) / fees[2]) * fees[3];
        } else {
            sum = fees[1];
        }
        answer.push(sum);
    }

    return answer;
}
