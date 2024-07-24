function solution(enroll, referral, seller, amount) {
  var answer = [];

  let parent = {};
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName != "-") {
      total[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      money = Math.floor(money / 10);
    }
  }

  answer = enroll.map((name) => total[name]);
  return answer;
}
