// 등수 구하기
function solution(arr) {
  let answer = [];
  //... spread연사자로 복사(얕은 복사) 배열의 값을 변경해도 기존 배열이 변경 X
  let arr2 = [...arr];
  //sort로 내림차순 정렬
  arr2.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        answer.push(j + 1);
      }
    }
  }
  return answer;
}

//풀이
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// AI님의 말씀

// 두 함수의 차이점은 속도와 메모리 사용량입니다. 첫 번째 함수는 복사 배열을 만들고 정렬을 하여
// 메모리 사용량이 더 크고, 정렬하는 과정에서 시간이 더 걸릴 수 있습니다.
// 반면에, 두 번째 함수는 반복문을 사용하여 각 요소의 등수를 구하기 때문에
// 메모리 사용량이 더 적고, 반복문만 실행하면 되기 때문에 속도도 더 빠를 것입니다.

// 따라서, 두 번째 함수가 더 좋은 코드로 평가될 수 있습니다.
