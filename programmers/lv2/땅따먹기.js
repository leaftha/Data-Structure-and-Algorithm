function solution(arr) {
  let answer = 0;
  let dp = Array.from(Array(arr.length), () => Array(arr[0].length).fill(0));
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (j === 0) {
        dp[i][j] =
          Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 1) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 2) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 3) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + arr[i][j];
      }
    }
  }
  answer = Math.max(...dp[arr.length - 1]);
  return answer;
}

// ------------------------------------------------------------------
//다시 풀이

function solution(land) {
  var answer = 0;

  let dp = Array.from(Array(land.length), () => Array(land[0].length).fill(0));
  dp[0] = land[0];

  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(
      land[i][0] + dp[i - 1][1],
      land[i][0] + dp[i - 1][2],
      land[i][0] + dp[i - 1][3]
    );
    dp[i][1] = Math.max(
      land[i][1] + dp[i - 1][0],
      land[i][1] + dp[i - 1][2],
      land[i][1] + dp[i - 1][3]
    );
    dp[i][2] = Math.max(
      land[i][2] + dp[i - 1][0],
      land[i][2] + dp[i - 1][1],
      land[i][2] + dp[i - 1][3]
    );
    dp[i][3] = Math.max(
      land[i][3] + dp[i - 1][0],
      land[i][3] + dp[i - 1][1],
      land[i][3] + dp[i - 1][2]
    );
  }
  answer = Math.max(...dp.at(-1));
  return answer;
}
