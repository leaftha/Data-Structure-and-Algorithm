// 내 풀이

function solution(str1, str2) {
    let answer = 'YES';
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        if (obj1[str1[i]]) {
            obj1[str1[i]] += 1;
        } else {
            obj1[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (obj2[str2[i]]) {
            obj2[str2[i]] += 1;
        } else {
            obj2[str2[i]] = 1;
        }
    }

    for (let i in obj1) {
        if (obj1[i] != obj2[i]) {
            answer = 'NO';
        }
    }

    return answer;
}

// 풀이

function solution(str1, str2) {
    let answer = 'YES';
    let sH = new Map();
    for (let x of str1) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    for (let x of str2) {
        if (!sH.has(x) || sH.get(x) == 0) return 'NO';
        sH.set(x, sH.get(x) - 1);
    }
    return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';

console.log(solution(a, b));
