// 내 풀이

function SameObj(a, b) {
    let isFalse = true;
    console.log(a, b);
    for (let i in b) {
        if (a[i] != b[i]) {
            isFalse = false;
            break;
        }
    }

    return isFalse;
}

function solution(s, t) {
    let answer = 0;
    const length = t.length;
    let objS = {};
    let objT = {};

    for (let i = 0; i < t.length; i++) {
        if (objT[t[i]]) {
            objT[t[i]] += 1;
        } else {
            objT[t[i]] = 1;
        }
    }

    for (let i = 0; i < length; i++) {
        if (objS[s[i]]) {
            objS[s[i]] += 1;
        } else {
            objS[s[i]] = 1;
        }
    }

    for (let i = length; i < s.length + 1; i++) {
        if (SameObj(objS, objT)) {
            answer++;
        }
        if (objS[s[i]]) {
            objS[s[i]] += 1;
        } else {
            objS[s[i]] = 1;
        }
        objS[s[i - length]] -= 1;
    }

    return answer;
}

// 풀이

function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}
function solution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();
    for (let x of t) {
        if (tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }
    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1);
        if (compareMaps(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt]) - 1);
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
