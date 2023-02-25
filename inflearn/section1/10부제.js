// 10분제
function solution(day, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (day === arr[i] % 10) {
      answer += 1;
    }
  }

  return answer;
}

// 풀이
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
