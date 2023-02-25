//봉우리
function solution(arr) {
  let answer = 0;
  let top;
  let left;
  let right;
  let down;
  let n;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      left = arr[i][j - 1];
      right = arr[i][j + 1];
      top = i - 1 < 0 ? 0 : arr[i - 1][j];
      down = i + 1 > arr.length - 1 ? 0 : arr[i + 1][j];
      n = arr[i][j];

      if (left === undefined) {
        left = 0;
      }

      if (right === undefined) {
        right = 0;
      }

      if (Math.max(left, right, top, down, n) === n) {
        answer++;
      }
    }
  }

  return answer;
}

//풀이
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
