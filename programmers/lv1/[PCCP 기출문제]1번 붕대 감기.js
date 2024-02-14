function solution(bandage, health, attacks) {
    var answer = 0;
    let n = 0;
    let lastTime = attacks.at(-1);
    let fullHealth = health;
    let attacksTime = [];

    for (let i of attacks) {
        attacksTime.push(i[0]);
    }

    for (let i = 0; i <= lastTime[0]; i++) {
        if (i === attacksTime[0]) {
            attacksTime.shift();
            let [a, b] = attacks.shift();
            health -= b;
            n = 0;
        } else {
            if (i != 0) {
                n++;
            }
            if (health != fullHealth) {
                if (health + bandage[1] > fullHealth) {
                    health = fullHealth;
                } else {
                    health += bandage[1];
                }
                if (n === bandage[0]) {
                    if (health + bandage[2] > fullHealth) {
                        health = fullHealth;
                    } else {
                        health += bandage[2];
                    }
                    n = 0;
                }
            }
        }
        if (health < 0) {
            return -1;
        }
    }

    answer = health;
    return answer;
}
