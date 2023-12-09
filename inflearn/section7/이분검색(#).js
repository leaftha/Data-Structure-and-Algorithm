function solution(target, arr) {
  let answer;

  arr.sort((a, b) => {
    return a - b;
  });

  let middle = Math.floor(arr.length / 2);
  while (arr[middle] != target) {
    if (arr[middle] < target) {
      middle = middle / 2;
    } else {
      middle = (arr.length - middle) / 2;
    }
  }

  answer = middle + 1;

  return answer;
}

// 풀이

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
