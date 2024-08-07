// 문제 설명
// 실패율
// failture_rate1.png

// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만,
// 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
// 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

function solution(N, stages) {
  var answer = [];
  let num = stages.length;
  let obj = {};
  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        count++;
      }
    }
    let n;
    if (count === 0 && num === 0) {
      n = 0;
    } else {
      n = count / num;
    }
    obj[i] = n;
    num = num - count;
  }

  let arr = [];

  for (let objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      arr.push(obj[objKey]);
    }
  }

  arr.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let val = Object.keys(obj).find((key) => obj[key] === value);
    delete obj[val];
    answer.push(val * 1);
  }
  return answer;
}

// -----------------------------------------------------------------------------------------------

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let arr = Array(N + 2).fill(0);
  let length = stages.length;

  for (let i of stages) {
    arr[i] += 1;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    let val = arr[i] / length;
    length -= arr[i];
    arr[i] = val;
  }

  arr.pop();
  arr.shift();

  const result = Object.entries(arr).sort((a, b) => b[1] - a[1]);

  return result.map((i) => Number(i[0]) + 1);
}
