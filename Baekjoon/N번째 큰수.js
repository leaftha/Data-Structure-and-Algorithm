function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);

  answer = arr.at(-2);

  return answer;
}

let arr = [338, 304, 619, 95, 343, 496, 489, 116, 98, 127];

console.log(solution(arr));
