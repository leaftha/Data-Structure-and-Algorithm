function solution(players, m, k) {
  var answer = 0;
  let servers = Array(24).fill(0);

  for (let i = 0; i < players.length; i++) {
    if (Math.floor(players[i] / m) > servers[i]) {
      let server = Math.floor(players[i] / m) - servers[i];
      for (let j = i; j < i + k; j++) {
        if (j < 24) {
          servers[j] += server;
        }
      }
      answer += server;
    }
  }

  return answer;
}
