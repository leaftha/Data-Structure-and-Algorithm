function solution(arr) {
  let answer = [];
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i of arr) {
    if (sum <= 100) {
      sum += i;
      answer.push(i);
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
