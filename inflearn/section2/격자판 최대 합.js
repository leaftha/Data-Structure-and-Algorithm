// 격자판 최대 합
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = 0;
  let n2 = 0;
  let n3 = 0;
  let n4 = 0;
  let c = arr.length - 1;
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      n += arr[i][j];
      n2 += arr[j][i];
    }
    n3 += arr[i][i];
    n4 += arr[i][c];
    c--;
    if (n < n2) {
      num = n2;
    } else {
      num = n;
    }

    if (answer < num) {
      answer = num;
    }
    n = 0;
    n2 = 0;
  }

  if (n3 < n4) {
    num = n4;
  } else {
    num = n3;
  }

  if (answer < num) {
    answer = num;
  }

  return answer;
}

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
