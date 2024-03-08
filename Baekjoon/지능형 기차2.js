function solution(arr) {
  let answer = 0;

  let p = 0;
  for (let i of arr) {
    p += i[1];
    p -= i[0];
    answer = Math.max(answer, p);
  }

  return answer;
}

let arr = [
  [0, 32],
  [3, 13],
  [28, 25],
  [17, 5],
  [21, 20],
  [11, 0],
  [12, 12],
  [4, 2],
  [0, 8],
  [21, 0],
];

console.log(solution(arr));
