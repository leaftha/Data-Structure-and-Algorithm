function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] <= arr[j]) {
        swap(i, j);
      }
    }
  }

  return answer;
}

function swap(a, b) {
  let idx = arr[a];
  arr[a] = arr[b];
  arr[b] = idx;
}

// 풀이

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
