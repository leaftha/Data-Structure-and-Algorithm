// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
  var answer = 1;
  if (before.length != after.length) return (annswer = 0);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < before.length; i++) {
    arr1.push(before[i]);
  }
  for (let i = 0; i < after.length; i++) {
    arr2.push(after[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      answer = 0;
      break;
    } else {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return answer;
}
