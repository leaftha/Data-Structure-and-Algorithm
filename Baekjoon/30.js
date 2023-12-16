// 어느 날, 미르코는 우연히 길거리에서 양수 N을 보았다. 미르코는 30이란 수를 존경하기 때문에, 그는 길거리에서 찾은 수에 포함된 숫자들을 섞어 30의 배수가 되는 가장 큰 수를 만들고 싶어한다.

// 미르코를 도와 그가 만들고 싶어하는 수를 계산하는 프로그램을 작성하라.

function solution(n) {
  let answer = "";
  let arr = [];
  for (let i of `${n}`) {
    arr.push(i);
  }
  if (arr.indexOf("0") < 0) {
    return (answer = -1);
  }

  let sum = 0;
  for (let i of arr) {
    if (i != "0") {
      sum += i * 1;
    }
  }

  if (sum % 3 != 0) {
    return (answer = -1);
  }

  arr.sort((a, b) => {
    return b - a;
  });

  arr.map((item) => {
    return (answer += item);
  });

  return answer;
}

console.log(solution(80875542));
