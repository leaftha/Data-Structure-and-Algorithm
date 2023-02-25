// 재귀
// JSON.parse / JSON.stringify 에서 활용
// Dom traversal algorithms
// object raversal

// #1
function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// #2
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(10);

// 팩토리얼 for과 재귀

// for
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// 재귀
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

factorial(10);

// 통상적인 재귀의 잠재적 위험
// 끝나는 조건 넣지 않기 == 최대 스택 도달
// 반환할 조건 잘못 넣기 == 제대로 종료가 되지 않음
// stackoverflow가 나옴 조심 조심

// Helper 메소드 재귀

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// 순수 재귀

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 배열을 사용하고 helper메소드 없이 순수 재귀을 작성하는 경우
// 배열을 복사하는 slice, spread 연산자,concat 같은 메소드를 사용 가능, 그러면 배열을 변경할 필요가 없어짐
// 일종의 결과를 축적 가능

// 문자열 변경 불가능
// 그래서 slice나 substring을 사용하여 사본을 만들어야함

// 객체의 경우 object.assign 이나 spread 연산자를 사용하는 게 유용
