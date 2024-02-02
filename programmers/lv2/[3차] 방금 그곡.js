function solution(m, musicinfos) {
  var answer = "(None)";

  function time(t1, t2) {
    t1 = t1.split(":");
    t2 = t2.split(":");
    const t1s = parseInt(t1[0]) * 60 + parseInt(t1[1]);
    const t2s = parseInt(t2[0]) * 60 + parseInt(t2[1]);

    return t2s - t1s;
  }

  for (let i = 0; i < musicinfos.length; i++) {
    musicinfos[i] = musicinfos[i].split(",");
    let t1 = musicinfos[i].shift();
    let t2 = musicinfos[i].shift();
    let t = time(t1, t2);
    musicinfos[i].push(t);
    musicinfos[i][1] = musicinfos[i][1].split("");
    for (let j = 1; j < musicinfos[i][1].length; j++) {
      if (musicinfos[i][1][j] === "#") {
        musicinfos[i][1].splice(j, 1);
        musicinfos[i][1][j - 1] += "#";
      }
    }

    let music = [];
    let n = 0;
    while (t != 0) {
      t -= 1;
      music.push(musicinfos[i][1][n]);
      n++;
      if (n === musicinfos[i][1].length) {
        n = 0;
      }
    }
    musicinfos[i][1] = music;
  }

  function find(m1, m2) {
    m1 = m1.split("");
    for (let j = 1; j < m1.length; j++) {
      if (m1[j] === "#") {
        m1.splice(j, 1);
        m1[j - 1] += "#";
      }
    }
    let isFalse = false;
    for (let i = 0; i < m2.length; i++) {
      if (m2[i] != m1[0]) continue;

      for (let j = 0; j < m1.length; j++) {
        if (m1[j] != m2[i + j]) {
          isFalse = false;
          break;
        } else {
          isFalse = true;
        }
      }
      if (isFalse) {
        return true;
      }
    }
  }

  let max = -1;
  for (let i of musicinfos) {
    if (find(m, i[1])) {
      if (max < i[2]) {
        answer = i[0];
        max = i[2];
      }
    }
  }

  return answer;
}
