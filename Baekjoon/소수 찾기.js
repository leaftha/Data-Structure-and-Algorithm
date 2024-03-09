function solution(arr) {
  let answer = 0;

  for (let i of arr) {
    if (i === 1) continue;
    let isFalse = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isFalse = false;
        break;
      }
    }
    if (isFalse) {
      answer++;
    }
  }

  return answer;
}

let arr = [1, 3, 5, 7];

console.log(solution(arr));
