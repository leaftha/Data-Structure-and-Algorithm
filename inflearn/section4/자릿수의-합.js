// 자릿수의 합
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  let num;
  let count = 0;
  for (let i = 0; i < 7; i++) {
    num = arr[i];
    num += "";
    for (let j = 0; j < num.length; j++) {
      let n = num[j] * 1;
      count += n;
    }
    if (count > max) {
      max = count;
      answer = arr[i];
    } else if (count == max) {
      answer = answer > arr[i] ? answer : arr[i];
    }
    count = 0;
  }
  return answer;
}

// 풀이

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
