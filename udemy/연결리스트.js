//연결 리스트

// 문자열, 숫자 등 무엇이던 원하는 데이터를 저장하는 자료 구조
// 배열 처럼 순서에 따라 다수의 데이터를 저장
// 하지만 각 데이터 엘리먼트들은 위치가 지정되고 각 데이터 엘리먼트들은 번호에 의해
// 인덱스(색인)이 부여되는 것과 다르게 연결 리스트는 그런 것 없이
// 다수의 데이터 엘리먼트들로 구성된다. 마치 객차들이 연속으로 연결되어 있는 열차처럼
// 그래서 데이터에 접근을 위한 인덱스가 없다. 그래서 각 데이터를 순회하면 접근한다.

// 여기서 각각의 데이터 엘리먼트들을 노드라고 한다. 헤드는 첫 노드, 테일은 마지막 노드이다.
// 그리고 length는 길이다.

// ex) [4] -> [6] -> [8] -> [2]
//     head                 tail

// 연결리스트 배열 비교

// 연결 리스트
// 인덱스가 없다. -> 대신 첫노드의 head(필수)와 마지막 노드인 tail(선택)은 가지고 있다.
// 각 노드는 next포인터를 통해 연결되어있다. 임의 접근은 허용하지 않는다.
// 각각 순서대로 순회해야한지만 새로운 항목을 추가하거나 기존 항목을 제거할 경우
// 연결 리스트를 사용하면 편리하다.
// 임의 접근이 필요하지 않는 아주 긴 데이터를 작업 혹은 그냥 리스트에 저잠만 하면 될 경우
// 연결리스트를 사용하는 것이 바람직하다.

// 배열
// 인덱스가 있다. 그래서 처음 또는 중간에 추가하면 순차적인 물결 효과가 있다.
// 처음 혹은 추가된 부분부터 다시 인덱스해야한다.

//*************************************************************

// 단방향 연결리스트

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        this.length -= 1;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    get(n) {
        if (n < 0 || n >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (n !== count) {
            current = current.next;
            count++;
        }
        return current;
    }
}

// let first = new Node('1')
// first.next = new Node('2')
// first.next.next = new Node('3')

let list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('6');
list.push('7');
list.push('8');
list.push('9');
list.push('10');

// list.traverse()
// console.log(list)
