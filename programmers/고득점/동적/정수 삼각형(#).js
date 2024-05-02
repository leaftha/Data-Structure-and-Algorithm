// function solution(triangle) {
//   var answer = 0;
//   let length = triangle.length;

//   function recur(n, t, sum) {
//     if (t === length) {
//       answer = Math.max(answer, sum);
//     } else {
//       recur(n + 1, t + 1, sum + triangle[t][n]);
//       recur(n, t + 1, sum + triangle[t][n]);
//     }
//   }

//   recur(0, 0, 0);
//   return answer;
// }

// 재귀를 dp식으로 바꾸는 연습 필요

function solution(triangle) {
    var answer = 0;
    let length = triangle.length;
    let dp = Array.from(Array(length), () => Array());

    function recur(n, t) {
        if (dp[t][n] != undefined) {
            return dp[t][n];
        }

        if (t === length - 1) {
            return triangle[t][n];
        }
        dp[t][n] = triangle[t][n] + Math.max(recur(n + 1, t + 1), recur(n, t + 1));

        return dp[t][n];
    }
    recur(0, 0);

    answer = dp[0][0];

    return answer;
}
