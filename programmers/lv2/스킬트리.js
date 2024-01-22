function solution(skill, skill_trees) {
  var answer = 0;

  for (let i of skill_trees) {
    let arr = Array(skill.length).fill(0);
    let isFalse = true;
    for (let j of i) {
      if (skill.indexOf(j) > -1) {
        let idx = skill.indexOf(j);
        if (idx === 0) {
          arr[idx] = 1;
        } else if (idx >= 1) {
          if (arr[idx - 1] === 1) {
            arr[idx] = 1;
          } else {
            isFalse = false;
            break;
          }
        }
      }
    }
    if (isFalse) {
      answer++;
    }
  }

  return answer;
}
