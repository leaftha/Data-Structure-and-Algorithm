function solution(n, arr) {
  let answer = 0;
  let m = n / 2;
  let lt = 0;
  let rt = arr.length - 1;
  let remain = 0;
  while (lt <= rt) {
    if (arr[rt] === n) {
      answer++;
      rt -= 1;
      continue;
    }

    if (lt === rt) {
      remain += 1;
      break;
    }

    if (arr[lt] + arr[rt] >= m) {
      answer++;
      lt += 1;
      rt -= 1;
    } else {
      lt += 1;
      remain += 1;
    }
  }

  answer = answer + Math.floor(remain / 3);
  return answer;
}

let arr = [0, 1, 2, 3, 5, 8, 13];
console.log(solution(13, arr));
