//정렬

// 정렬의 의미
// 정렬 알고리즘은 컬렉션(collection)의 항목을 재배열하는 과정을
// 의미함. 문자열 하나 고른 후에 문자열 내의 각 문자를 정렬하는 것이 예시
// ex) 숫자를 오름차순으로 하거나 내림차순으로 정렬, 알파벳 순서,
//     개봉 연도, 수익순 등

// 정렬이 무섭게 느껴지는 이유는 현존하는 유명 알고리즘을 15개나 떠올리 수 있음

// 정렬을 배우는 이유
// 1 정렬이 프로그래밍에서 정말로 흔하게 사용되기 때문
//     ex)자바스크립트나 다른언어 사용시 메소드에 어떤 알고리즘이 들어가 있는지 아는것이 중요

// 2 데이터를 정렬할 수 있는 방법은 많고 각각 장단점이 있음 어떤 상황에 어떤 알고리즘을 써야할지 알아야함

// 3 정렬은 전형적인 면접 주제임

// 자바스크립트 기분 내장 정렬

// .sort()
// 배열의 모든 항목이 문자열로 변환되고, 해당 문자열의 유니코드 값이 선택되고, 그 다음에 항목이 정렬됨

function numberCompare(n1, n2) {
  // n1.length - n2.length     //문자열 길이 정렬
  return n1 - n2;
}

[6, 4, 15, 10].sort(numberCompare); //[4, 6, 10, 15]

//버블 정렬

// 버블정렬은 별로 효율적이지 않음, 흔히 사용되지도 않음
// 하지만 특정 상황에서는 두각을 나타내며 어떻게 사용하는지 알면 재밌는 알고리즘이다.
// 몇 가지 최적화도 가능하다 그래서 다루기 좋은 주제
// 다른 정렬과 비교하기에도 좋다

// 버블정렬의 작동 방식은 루프를 돌면서 각 항목을 다음 항목과 비교하는 것이다.
// 항목과 다음 항목을 비교하고 더 크면 교환한다.
// 교환은 버블 정렬의 작동 원리에 중요한 부분
// 기본적으로 어떤항목이 더 크면 교환을 하고, 다음 항목과 비교하고,
// 다음 항목보다 더 크면 또 교환을 하고 다시 반복한다

// ex) [5,3,4,1,2] => [3,5,4,1,2] => [3,4,5,1,2] => [3,4,1,5,2] => [3,4,1,2,5] 반복

// 교환 방법

// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

//버블 정렬 구현

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//better
// i를 arr.length로 함으로서 비교 횟수를 줄일 수 있다.

function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([5, 3, 4, 1, 2]);

//최적화
//이미 거의 다 정렬 되었때 효과적
function bubbleSort3(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort3([8, 1, 2, 3, 4, 5, 6, 7]);

//버블 정렬의 빅오 기본적으로 big-O(n^2) 이미 거의 다 정렬 되었을 경우는 big-O(n)

//*************************************************************

// 선택 정렬

// 배열을 한번 주회하고 최솟값을 찾가 맨 앞으로 바꾸고 이걸 반복

// 구현

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([5, 3, 4, 1, 2]);

// 선택 정렬의 빅오 big-O(n^2)

//*************************************************************
// 삽입 정렬

// 배열의 과반을 점차적으로 만들어 정렬을 구축, 과반은 항상 정렬되어 있음

// ex) [5,3,4,1,2] => [3,5,4,1,2] => [3,4,5,1,2] => [1,3,4,5,2] => [1,2,3,4,5]

// 구현

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = current;
  }
  return arr;
}

// another

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
    console.log(`${i}회전: ${array}`);
  }
  return array;
}

insertionSort([5, 3, 4, 1, 2]);

// 시간 복잡도는 위와 비슷함 하지만 내림차순일때 가장 효율이 나쁨
// 삽입정렬의 특별한 점은 데이터를 계속 정렬해야 할 경우 좋다

//*************************************************************

//버블 선택 삽입 정렬 비교

//     **Best**Aberage**Worst**Space
// 버블**O(n)***O(n^2)**O(n^2)*O(1)
// ************************************
// 선택**O(n)***O(n^2)**O(n^2)*O(1)
// ************************************
// 삽입**O(n^2)*O(n^2)**O(n^2)*O(1)

// 특징적으로 3개의 정렬 모두 공간 복잡도는 O(1)인데
// 다른 빠른 알고리즘은 작은 배열을 추가로 만드는 방식이라
// 공간 복잡도가 크다

// 요약
// 정렬은 프로그래밍의 기본 면접에서도 기본
// 하지만 굳이 알고리즘 구현 방식을 모두 외울 필요 없음
// 전체적으로 3 정렬 모두 비슷함
//
