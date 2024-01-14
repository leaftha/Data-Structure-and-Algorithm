function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => a[0] - b[0]);

  let maxIdx = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i][1]) {
      max = arr[i][1];
      maxIdx = i;
    }
  }

  let premax = [arr[0][0], arr[0][1]];
  for (let i = 0; i < maxIdx; i++) {
    if (premax[1] < arr[i][1]) {
      answer += (arr[i][0] - premax[0]) * premax[1];
      premax[1] = arr[i][1];
      premax[0] = arr[i][0];
    }
  }
  answer += (arr[maxIdx][0] - premax[0]) * premax[1] + arr[maxIdx][1];

  let latermax = [arr[arr.length - 1][0], arr[arr.length - 1][1]];
  for (let i = arr.length - 1; i > maxIdx; i--) {
    if (latermax[1] < arr[i][1]) {
      answer += (arr[i][0] - premax[0]) * premax[1];
      latermax[1] = arr[i][1];
      latermax[0] = arr[i][0];
    }
  }
  answer += (latermax[0] - arr[maxIdx][0]) * latermax[1];

  return answer;
}

let arr = [
  [2, 4],
  [11, 4],
  [15, 8],
  [4, 6],
  [5, 3],
  [8, 10],
  [13, 6],
];

console.log(solution(arr));
