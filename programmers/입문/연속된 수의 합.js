// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때,
// 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  var answer = [];
  let isEven, standard;

  if (num % 2 == 0) {
    isEven = true;
  } else {
    isEven = false;
  }

  if (isEven) {
    standard = (total - num / 2) / num;
  } else {
    standard = total / num;
  }

  if (isEven) {
    for (let i = standard - num / 2 + 1; i <= standard + num / 2; i++) {
      answer.push(i);
    }
  } else {
    for (
      let i = standard - Math.floor(num / 2);
      i <= standard + Math.floor(num / 2);
      i++
    ) {
      answer.push(i);
    }
  }
  return answer;
}

// 공부 필요
