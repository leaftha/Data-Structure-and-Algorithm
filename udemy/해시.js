// 해시 테이블

// 해시 테이블은 키-값 쌍을 저장하는 데 사용됩니다.

// 배열과 비슷하지만 키가 정렬되지 않습니다.

// 배열과 달리 해시 테이블은 값 찾기, 새 값 추가
// 및 값 제거와 같은 모든 작업에 대해 빠릅니다.

//*************************************************************

// 구현

// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96
//         total = (total + value % arrayLen) % arrayLen
//     }

//     return total
// }

// 해시 개선
// 현재 해시의 문제

// 문자열만 해시(걱정하지 않음)
// 일정하지 않은 시간 - 키 길이가 선형
// 조금 더 무작위 일 수 있습니다

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// 소수를 이용해 충돌방지.

//*************************************************************

//큰 배열과 훌륭한 해시 함수가 있더라도 충돌은 불가피합니다.

// 충돌을 처리하기 위한 많은 전략이 있지만 다음 두 가지에 중점을 둘 것입니다.

// 개별 체이닝 (Separate Chaning)
// 직선 탐색법 (Linear Probing)

// 개별 체이닝 (Separate Chaning)

// 개별 체이닝은 기본적으로 같은 장소에 여러 데이터를 저장할때
// 배열이나 연결 리스트 등과 같은 것을 활용하여 이중 데이터 구조를 쓰는 것을
// 공동 저장을 하는 것, 그래서 여러개의 키-캆 쌍은 같은 자리에 저장 가능

// 직선 탐색법 (Linear Probing)

// 직선 탐색볍은 각 위치에 하나의 데이터만 저장한다는 규칙을 그대로 살려서 지킨다.
// 충돌을 감지하면 빈칸을 확인, 다음 빈칸에 저장

//*************************************************************

// 해시 테이블 구현

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log(ht);

//*************************************************************

// 해시 테이블의 big O
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)
