function solution(n) {
  var answer = 0;
  let queen = [];

  function check(x, y) {
    for (let [i, j] of queen) {
      if (i === x || j === y) {
        return false;
      }
      if (Math.abs(i - x) === Math.abs(j - y)) {
        return false;
      }
    }
    return true;
  }

  function dfs(L) {
    if (L === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!check(L, i)) continue;
      queen.push([L, i]);
      dfs(L + 1);
      queen.pop();
    }
  }

  dfs(0);

  return answer;
}

// ---------------------------------------------------------------------

// ➊ 퀸이 서로 공격할 수 없는 위치에 놓이는 경우의 수를 구하는 함수
function search(n, y, width, diagonal1, diagonal2) {
  let answer = 0;
  // ➋ 모든 행에 대해서 퀸의 위치가 결정되었을 경우
  if (y === n) {
    // ➌ 해결 가능한 경우의 수를 1 증가시킴
    answer += 1;
  } else {
    // ➍ 현재 행에서 퀸이 놓일 수 있는 모든 위치를 시도
    for (let i = 0; i < n; i++) {
      // ➎ 해당 위치에 이미 퀸이 있는 경우, 대각선 상에 퀸이 있는 경우 스킵
      if (width[i] || diagonal1[i + y] || diagonal2[i - y + n]) {
        continue;
      }
      // ➏ 해당 위치에 퀸을 놓음
      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;
      // ➐ 다음 행으로 이동하여 재귀적으로 해결 가능한 경우의 수 찾기
      answer += search(n, y + 1, width, diagonal1, diagonal2);
      // ➑ 해당 위치에 놓인 퀸을 제거함
      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = false;
    }
  }
  return answer;
}

function solution(n) {
  // ➒ search 함수 호출하여 해결 가능한 경우의 수 찾기
  const answer = search(
    n,
    0,
    Array(n).fill(false),
    Array(n * 2).fill(false),
    Array(n * 2).fill(false)
  );
  return answer;
}
