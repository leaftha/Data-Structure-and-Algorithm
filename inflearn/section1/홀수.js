// 홀수

function solution(arr) {
  let answer = [];
  let n1 = 0;
  let n2 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 1) {
      n1 += arr[i];
      if (n2 > arr[i]) {
        n2 = arr[i];
      }
    }
  }

  answer.push(n1);
  answer.push(n2);
  return answer;
}

// 풀이
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
