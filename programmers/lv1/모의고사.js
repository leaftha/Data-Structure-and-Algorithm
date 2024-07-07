// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer = [0, 0, 0];
  for (let i = 0; i < answers.length; ++i) {
    if (answers[i] === arr1[i % arr1.length]) {
      answer[0]++;
    }
    if (answers[i] === arr2[i % arr2.length]) {
      answer[1]++;
    }
    if (answers[i] === arr3[i % arr3.length]) {
      answer[2]++;
    }
  }
  let max = 0;
  for (let i = 0; i < answer.length; ++i) {
    max = max < answer[i] ? answer[i] : max;
  }
  const result = [];
  for (let i = 0; i < answer.length; ++i) {
    if (max === answer[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

// ------------------------------------------------------------------

function solution(answers) {
  const answer = [];
  const pertterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of pertterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        score[j]++;
      }
    }
  }

  const max = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
