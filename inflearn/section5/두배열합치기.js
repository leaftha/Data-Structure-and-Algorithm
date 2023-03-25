// 두배열 합치기

function solution(arr1, arr2) {
  let answer = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length) {
    if (arr1[a] <= arr2[b]) {
      answer.push(arr1[a]);
      a++;
    } else if (arr2[b] < arr1[a]) {
      answer.push(arr2[b]);
      b++;
    }
  }

  while (a < arr1.length) {
    answer.push(arr1[a]);
    a++;
  }

  while (b < arr2.length) {
    answer.push(arr2[b]);
    b++;
  }
  return answer;
}

// 풀이
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
