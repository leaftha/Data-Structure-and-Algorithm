function solution(n, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;

  while (lt < rt) {
    if (arr[lt] + arr[rt] === n) {
      answer++;
    }

    if (arr[lt] + arr[rt] >= n) {
      rt -= 1;
    } else {
      lt += 1;
    }
  }

  return answer;
}

let arr = [5, 12, 7, 10, 9, 1, 2, 3, 11];
console.log(solution(13, arr));
