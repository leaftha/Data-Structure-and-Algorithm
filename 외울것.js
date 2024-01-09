// 순열

let arr = [];

function permu(p, dun) {
    if (dun.length === 0) {
        return arr.push(p);
    }

    for (let i = 0; i < dun.length; i++) {
        const newArr = [...dun.slice(0, i), ...dun.slice(i + 1)];
        permu([...p, dun[i]], newArr);
    }
}

permu([], [0, 1, 2]);
console.log(arr);

// ----------------------------------------------------------------------

// 조합

function Combination(n, k, arr, m) {
    let answer = 0;

    function dfs(L, s, sum) {
        if (L === k) {
            if (sum % m === 0) {
                answer++;
            }
        } else {
            for (let i = s; i < n; i++) {
                dfs(L + 1, i + 1, sum + arr[i]);
            }
        }
    }

    dfs(0, 0, 0);

    return answer;
}

let arr2 = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr2, 6));

// ----------------------------------------------------------------------

// dfs

function dfs(n) {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);
    function DFS(L) {
        if (L === n + 1) {
            let tmp = '';
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) tmp += i + ' ';
            }
            if (tmp.length > 0) answer.push(tmp.trim());
        } else {
            ch[L] = 1;
            DFS(L + 1);
            ch[L] = 0;
            DFS(L + 1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));

// ----------------------------------------------------------------------

// 결정 알고리즘

// 카운트, 몇 개의 그룹으로 나뉘는지 확인.
function count(numList, mid) {
    let count = 1;
    let sum = 0;
    for (let x of numList) {
        if (sum + x > mid) {
            count++;
            sum = x;
        } else {
            sum += x;
        }
    }
    return count;
}
// 메인 솔루션
function decision(numList, target) {
    let answer;
    let lt = Math.max(...numList);
    let rt = numList.reduce((a, c) => a + c, 0);
    // 이진 탐색 패턴
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        // 숫자 합이 mid일 때 나오는 갯수
        if (count(numList, mid) <= target) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}
