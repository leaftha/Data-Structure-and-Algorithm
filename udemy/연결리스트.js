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

    set(n, val) {
        let found = this.get(n);
        if (found) {
            found.val = val;
            return true;
        }
        return false;
    }

    insert(n, val) {
        if (n < 0 || n >= this.length) return false;
        if (n === this.length) return this.push(val);
        if (n === 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(n - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length += 1;
        return true;
    }

    remove(n) {
        if (n < 0 || n >= this.length) return undefined;
        if (n === 0) return this.shift();
        if (n === this.length - 1) return this.pop();
        let prevNode = this.get(n - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length -= 1;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

// let first = new Node('1')
// first.next = new Node('2')
// first.next.next = new Node('3')

// let list = new SinglyLinkedList();
// list.push('1');
// list.push('2');
// list.push('3');
// list.push('4');
// list.push('5');
// list.push('6');
// list.push('7');
// list.push('8');
// list.push('9');
// list.push('10');

// list.traverse()
// console.log(list)

// insertion : O(1)
// removal - it depens... O(1) or O(n)
// searching  : O(n)
// access : O(n)

// 삽입과 제거가 주 목적인 경우 쓰인다.
// 순회나 n번째 노드를 찾고 그런 경우 사용 X

//*************************************************************

//이중 연결리스트
// 기본적으로 단일 연결리스트와 비슷하지만
// 방향이 하나더 생긴다.
// prev 가 생겨서 단순해 보이지만 실제로 코드는 많은 것들이 바뀜'

// ex) [4] <- -> [6] <- -> [8] <- -> [2]
//     head                          tail

// 단일 연결리스트보다 방향을 하나더 저장 함으로 메모리가 더 많이 든다.
class DoubleNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new DoubleNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let popNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }
        this.length -= 1;
        return popNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let popNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = popNode.next;
            this.head.prev = null;
            popNode.next = null;
        }
        this.length -= 1;
        return popNode;
    }
    unshift(val) {
        let newNode = new DoubleNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    get(n) {
        if (n < 0 || n >= this.length) return null;
        if (n <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count != n) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count != n) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(n, val) {
        let found = this.get(n);
        if (found != null) {
            found.val = val;
            return true;
        }
        return false;
    }

    insert(n, val) {
        if (n < 0 || n >= this.length) return false;
        if (n === this.length) return this.push(val);
        if (n === 0) return this.unshift(val);
        let newNode = new DoubleNode(val);
        let before = this.get(n - 1);
        let after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length += 1;
        return true;
    }
}

let Dublist = new DoublyLinkedList();
Dublist.push('0');
Dublist.push('1');
Dublist.push('2');
Dublist.push('3');
Dublist.push('4');
Dublist.push('5');
Dublist.push('6');
console.log(Dublist);
