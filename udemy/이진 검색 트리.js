// 트리

// 트리는 연결 리스트처럼 노드로 이루어진 데이터 구조
// 노드들 사이에 부모-자식 관계가 있다.
/// 나무가 뒤집힌 것 같아서 트리이다.

//      2
//    1   4
// 5     1  6

// 리스트는 선형구조 <= 하나다음엔 하나 반복
// 트리는 비 선형 구조 <= 하나에 여러 노드들이 연결되어 있음

// 트리는 노드가 자신보다 더 낮은 곳에 있지 않은 다른 노드를 가리키면 안됨
// 출발점이 두개도 안됨

// 루트(Root) : 트리 꼭대기에 있는 노드가
// 자식(Child) : 루트에서 멀어지는 방향으로 연결된 노드.
// 부모(Parent) : 자식의 반대 개념
// 리프(Leaf) : 자식이 없는 노드
// 간선(Edge) : 한노드에서 다른 노드로 향하는 화살표

// 트리의 활용
// 1. HTML과 DOM
// 2. 네트워크 라우팅
// 3. 추상 구문 트리
// 4. 인공지능
// 5. 운영체제에서 폴더의 시스템

//*************************************************************

// 이진 트리

// 다양한 트리의 종류중 하나인 이진 트리
// 이진 트리는 각 노드가 최대 두개의 자식을 가지는 경우
// 부모 노드의 왼쪽에 있는 모든 노드는 언제나 부모보다 작고
// 부모 노드보다 오른쪾에 있는 모든 노드는 언제나 부모보다 크다.

// 위의 규칙들은 무언가를 찾아보는 것을 아주 빠르고 쉽게 만들어 준다.

//*************************************************************

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.right = null;
//         this.left = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(val) {
//         var newNode = new Node(val);
//         if (this.root === null) {
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while (true) {
//             if (val === current.val) return undefined;
//             if (val < current.val) {
//                 if (current.left === null) {
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if (current.right === null) {
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }

//     find(n) {
//         if (this.root === null) return false;
//         let current = this.root;
//         let found = false;
//         while (current && !found) {
//             if (n < current.val) {
//                 current = current.left;
//             } else if (n > current.val) {
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if (!found) return undefined;
//         return current;
//     }
// }

// let tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(12);
// tree.insert(5);
// tree.insert(1);
// tree.insert(53);
// tree.insert(23);
// tree.insert(4);
// tree.insert(17);
// tree.insert(2);

// console.log(tree);

// 이진트리의 Big O

// Insertion - O(log n)
// Searching - O(log n)

//*************************************************************

// 트리 순회
// 규칙 없는 트리를 순회는 데는 두가지 방법이 있다.
// 1. 너비 우선 탐색 (Breadth-first Seacrch)
// 2. 깊이 우선 탐색 (Depth-first Seacrch)

// 이 두개의 차이는 순회 방향에 있다.

//*************************************************************

// 너비 우선 탐색 (Breadth-first Seacrch)

// 너비 우선 탐색은 아래로 내려가기 전에 같은 레벨에 있는 모든 노드들을 거쳐가는 것

//  (1)-->      2
//  (2)-->    1   4
//  (3)_--> 5     1  6
// [2,1,4,5,1,6] <= 이런 식으로

// 너비 우선 탐색을 만들기 위해서는 큐를 사용한다

//*************************************************************

// 깊이 우선 탐색 (Depth-first Seacrch)

// 깊이 우선 탐색은 밑으로 내려가서 순회하는 것

//  (1)-->      2
//  (2)-->    1   4
//  (3)_--> 5     1  6

// ex) [2,1,5,3,1,6]

// 전위 (PreOrder)

// 우선 root를 본 다음 왼쪽을 우선해서 순회한 다음 오른쪽을 순회
// ex) 위가 예시

// 후위 (PostOrder)

// 후위 순횐는 노드를 나중에 방문하고, 그 전에 오른쪽과 왼쪽을 순서대로 돈다.

//  (1)-->      2
//  (2)-->    1   4
//  (3)_--> 5     3  6

// ex) [5,1,3,6,4,2]

// 중위 탐색 (InOrder)

// 먼저 왼쪽 전체를 순회하고 노드를 방문하고
// 그 다음에 오른쪽 전체를 순회한다.

// ex) [5,1,2,3,4,6]

//*************************************************************

// 구현

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(n) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (n < current.val) {
                current = current.left;
            } else if (n > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        const traverse = (node) => {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(this.root);

        return data;
    }

    DFSPostOrder() {
        let data = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        };
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        };
        traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(15);
tree.insert(8);
tree.insert(20);
// tree.insert(4);
// tree.insert(17);
// tree.insert(2);

console.log(tree);

//*************************************************************

// 트리 순회의 두가지 중 무엇을 언제 쓰는 가?

// 너비 깊이를 선택은 트리에 따라 다르다.

// 트리가 완전히 펼쳐저서 넓게 펴진 상태로 아래까지 뻗어 나가는 트리는 너비탐색을 사용한다면
// 모든 노드를 저장하기 위해 큐를 사용한다.
// 그러니 큐에 많은 양의 데이터를 추가해야 한다. <- 공간복잡도가 커진다.
// 하지만 깊이 탐색을 쓰면 우선 한가지 길만 재귀해서 간다.
// 깊이보다 너비가 넓은 트리의 경우에는 깊이 우선 탐색이 더 적은 공간을 점유한다.

// 한 가지의 길만 있는 트리에서는 너비를 쓰면 근방근방 큐가 비게 된다.
// 깊이 우선을 쓰면 길이가 길어질 수로 레벨이 길어지고 메모리가 커진다.

// 깊이 탐색의 3가지중 언제 어느것을 쓰는 가?

// 예시

// 이진트리에 정위탐색을 쓰면 트리의 노드들이 오름차순으로 구하게 된다.
// 전위탐색은 트리를 복사하거나 평탄화 하는 경우에 유용하다.

// 두가지 상황에서 유용하지만 결국 코드에 많은 차이가 없어 되돌리기 쉽다.
// 결정하는데 많은 고민을 하지 않아도 된다.
