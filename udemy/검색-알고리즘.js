//검색 알고리즘

//선형 검색
//첫부분(끝부분)에서 시작해서 끝부분(첫부분)으로 이동하면서 한번에 하나의
//항목을 확인
//하나 하나 체크 함
//ex) indexOf
//

//Linear Search Exercise
function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    } else if (i === arr.length - 1) {
      return -1;
    }
  }
}

//풀이
// 이런 방법이...
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5

//Big-O
//Best O(1)    Average O(n)  Worst O(n)

//*************************************************************

//이진 검색
//이미 정렬된 데이터에서만 가능
//너무 적은 시간을 단축하기 위해 사용하는 것은 비추
//배열을 두 부분으로 나누고 보통 중간에 있는 중간점을 선택하고, 우리가 찾는 값이 중간점을
//기준으로 좌측 벌반과 우측 절반 중 어느 쪽에 있을지 확인 이걸 반복

// Binary Search Exercise
function binarySearch(arr, n) {
  if (arr.length === 0) {
    return -1;
  }
  let arr2 = arr;
  let middle = Math.floor(arr2.length / 2);
  while (arr2[middle] !== n) {
    if (arr2[middle] < n) {
      arr2.splice(middle);
    } else {
      arr2.splice(arr.length, middle + 1);
    }
    middle = Math.floor(arr2.length / 2);
  }
  return middle;
}

//풀이
function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== n && start <= end) {
    if (n < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === n) {
    return middle;
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5], 6); // -1

//*************************************************************

//나이브 문자열 검색
//기본적이고 흔한 방법

function naiveSearch(long, short) {
  let num = 0;
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[count]) {
      count++;
    } else {
      count = 0;
    }
    if (count === short.length) {
      num++;
      count = 0;
    }
  }
  return num;
}

//풀이
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("wowomgzomg", "omg");

// 두 코드의 성능 차이는 문자열과 패턴의 길이가 커질수록 더욱 커집니다.
// 첫번째 코드는 패턴의 길이가 길어질수록 문자열을 많이 반복하므로 성능이 저하될 가능성이 높습니다.
// 반면, 두번째 코드는 두 개의 반복문을 사용하기 때문에,
// 문자열과 패턴의 길이가 커져도 상대적으로 성능이 안정적입니다.
// 따라서 두 코드 중에서는 일반적으로 두번째 코드가 더 좋은 코드입니다

// 첫 번째 코드의 시간 복잡도는 O(n)입니다. 문자열 long을 한 번 순회하며,
// 비교 대상인 문자열 short와 일치하는 부분을 찾아 카운트하는 과정을 거칩니다.

// 두 번째 코드의 시간 복잡도는 O(n*m)입니다. 문자열 long을 한 번 순회하며,
// 각 문자 위치에서 문자열 short와 일치하는지 확인하기 위해 내부적으로 short를 순회합니다
// . short의 길이가 길어질수록 전체 수행 시간이 더 오래 걸리게 됩니다.

// 따라서, 첫 번째 코드의 시간 복잡도가 더 효율적입니다.

// 첫 번째 코드의 경우 문자열의 각 문자마다 비교를 하므로,
// 최악의 경우 O(mn)의 시간 복잡도를 가집니다.
// 여기서 m은 문자열 short의 길이이고, n은 문자열 long의 길이입니다.

// 반면에 두 번째 코드의 경우 이중 반복문을 사용하지만,
// 불필요한 비교를 줄이기 위해 문자열 short의 길이만큼
// 비교를 하므로, 최악의 경우 O(mn)보다는 작은 시간 복잡도를 가집니다.
// 따라서 두 번째 코드가 더 효율적이라고 볼 수 있습니다.
