// K번째 큰 수

function solution(n, k, card) {
  let answer;
  let count = 0;
  card.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let o = i + 2; o < n; o++) {
        if (count === card[i] + card[j] + card[o]) break;
        if (count < k) {
          answer = card[i] + card[j] + card[o];
          count++;
        }
      }
    }
  }

  return answer;
}

// 풀이

function solution(n, k, card) {
  let answer;
  //Set : 중복제거
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 5, arr));
