function solution(arr) {
  let answer = [];

  answer.push(Math.min(...arr));
  answer.push(Math.max(...arr));

  return answer;
}

let arr = [20, 10, 35, 30, 7];

console.log(solution(arr));
