// 스택

// 스택은 데어터의 모음 큐과 같이 데이터의 구조이지만
// 좀더 압축적인 데이터 구조

// 스택은 후입선출 원칙을 따르는 데이터들의 모음
// ex) 가장 마지막에 추가된 요소는 가장 먼저 제거됨
// ex) 마치 책 무더기나 그릇을 쌓아올린 것 처럼

// | 4 |  <---- 가장 먼저 제거됨 & 가장 마지막에 추가됨
// | 3 |
// | 2 |
// | 1 |
// | 0 |   <--- 가장 먼저 쌓이기 시작함 & 가장 마지막에 제거
// |---|

// 활용

// 1. 함수 호출을 다루는 상황에서 사용 <= 많은 프로그래밍 언어에서 자주 활용
// 2. 포토샹 등에서 사용되는 실행 취소, 다시 실행 가장 뒤에 작업부터 차근차근 제거됨
// 3. 인터넷 브라우저의 방문 기록
// 4. 알고리즘에 활용 (트리나 그래프에서)

//************************배열로 만들기*************************

let stack1 = [];
stack1.push('0');
stack1.push('1');
stack2.push('2');

stack1.pop();

let stack2 = [];
stack2.unshift('0');
stack2.unshift('1');
stack2.unshift('2');

stack2.shift();

console.log(stack1, stack2);

// 배열도 스택으로 사용가능하다.
// push/pop 조합이나 unshift/shift 조합을 사용하면 된다.
// 간단히 같은 방향에서 추가와 제거를 사용하면 된다.

//*************************class로 만들기***********************

// 배열로 사용하면 쉽고 빠르게 코딩 가능하다.

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return (this.size += 1);
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return temp.val;
    }
}

let stack = new Stack();

stack.push('0');
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');

console.log(stack);

// stack의 Big O
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// 스택을 다룰때 가장 중요한것은 삽입과 제거의 Big O가 상수여야 한다.

// 스택은 후입선출의 특성을 가진 데이터 구조
// 스택은 실행취소나 다시 실행 같은 기능에도 사용 됨
// 브라우저를 사용할 때 접속 기록을 추척할 때도 사용됨
// 자바스크립트에 내장되어 있지 않음(일부 언어는 내장되어 있음)
// 하지만 그렇다고 코딩하는데 오래 걸리지는 않음
// 배열로 사용하는 것이 편함
// 위의 class를 이용하는 것이 나쁜건 아니지만
// 복잡한 알고리즘을 사용할떄는 배열을 사용할 것임

//*************************************************************

// 큐

// 큐는 스택과 비슷한 짝꿍 데이터 구조이다.
// 큐는 선입선출의 데이터 구조이다.
// ex) 먼저 들어온 것이 먼저 나간다.
// ex) 놀이공원이나 식당의 줄처럼
// ex) 온란인 게임의 접속대기자나 인터넷에서 무언가를 업로드나 다운로드하는 경우
//     프린트 대기열

// | 4 |  <---- 가장 나중에 제거됨 & 가장 마지막에 추가됨
// | 3 |
// | 2 |
// | 1 |
// | 0 |   <--- 가장 먼저 쌓이기 시작함 & 가장 먼저 제거

//************************배열로 만들기*************************

let q1 = [];

q1.push('1');
q1.push('2');
q1.push('3');

q1.shift();

let q2 = [];

q2.unshift('1');
q2.unshift('2');
q2.unshift('3');

q2.pop();

// console.log(q1,q2)

// 배열도 큐으로 사용가능하다.
// push/shift 조합이나 unshift/pop 조합을 사용하면 된다.
// 간단히 같은 방향에서 추가와 제거를 사용하면 된다.
// 하지만 큐를 배열로 만드면 스택과 다르게 인덱스가 다시 적용되기 때문에
// 성능에 더 신경쓰는 경우에는 class로 직접만드는 것이 좋다.

//*************************class로 만들기***********************

class QNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new QNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return (this.size += 1);
    }

    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return temp.val;
    }
}

const q = new Queue();
q.enqueue('0');
q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.enqueue('4');

console.log(q);
