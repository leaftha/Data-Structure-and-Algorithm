function solution(arr) {
  let answer = 0;
  let prefix = Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = Math.max(prefix[i] + arr[i], arr[i]);
  }

  answer = Math.max(...prefix);

  return answer;
}

let arr = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];

console.log(solution(arr));
