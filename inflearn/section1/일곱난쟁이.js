// 일곱 난쟁이 다시 공부 필요
function solution(arr) {
  let answer = arr;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //뒤에 것을 먼저 지워야 j이가 땅겨지지 않는다.
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

// 풀이
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
